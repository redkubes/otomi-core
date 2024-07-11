import retry, { Options } from 'async-retry'
import { mkdirSync, rmdirSync, writeFileSync } from 'fs'
import { cloneDeep, isEmpty } from 'lodash'
import { prepareDomainSuffix } from 'src/common/bootstrap'
import { cleanupHandler, prepareEnvironment } from 'src/common/cli'
import { logLevelString, terminal } from 'src/common/debug'
import { env } from 'src/common/envalid'
import { hf } from 'src/common/hf'
import { getDeploymentState, getHelmReleases, setDeploymentState } from 'src/common/k8s'
import { getFilename, rootDir } from 'src/common/utils'
import { getCurrentVersion, getImageTag, writeValuesToFile } from 'src/common/values'
import { HelmArguments, getParsedArgs, helmOptions, setParsedArgs } from 'src/common/yargs'
import { ProcessOutputTrimmed } from 'src/common/zx-enhance'
import { Argv, CommandModule } from 'yargs'
import { $, nothrow } from 'zx'
import { applyAsApps } from './apply-as-apps'
import { cloneOtomiChartsInGitea, commit, printWelcomeMessage } from './commit'
import { upgrade } from './upgrade'

const cmdName = getFilename(__filename)
const dir = '/tmp/otomi/'
const templateFile = `${dir}deploy-template.yaml`

const cleanup = (argv: HelmArguments): void => {
  if (argv.skipCleanup) return
  rmdirSync(dir, { recursive: true })
}

const setup = (): void => {
  const argv: HelmArguments = getParsedArgs()
  cleanupHandler(() => cleanup(argv))
  mkdirSync(dir, { recursive: true })
}

const applyAll = async () => {
  const d = terminal(`cmd:${cmdName}:applyAll`)
  const prevState = await getDeploymentState()
  const intitalInstall = isEmpty(prevState.version)
  const argv: HelmArguments = getParsedArgs()
  const hfArgs = intitalInstall
    ? ['sync', '--concurrency=1', '--sync-args', '--disable-openapi-validation --qps=20']
    : ['apply', '--sync-args', '--qps=20']

  await upgrade({ when: 'pre' })
  d.info('Start apply all')
  d.info(`Deployment state: ${JSON.stringify(prevState)}`)
  const tag = await getImageTag()
  const version = await getCurrentVersion()
  await setDeploymentState({ status: 'deploying', deployingTag: tag, deployingVersion: version })

  const state = await getDeploymentState()
  const releases = await getHelmReleases()
  await writeValuesToFile(`${env.ENV_DIR}/env/status.yaml`, { status: { otomi: state, helm: releases } }, true)

  const output: ProcessOutputTrimmed = await hf(
    { fileOpts: 'helmfile.tpl/helmfile-init.yaml', args: 'template' },
    { streams: { stderr: d.stream.error } },
  )
  if (output.exitCode > 0) {
    throw new Error(output.stderr)
  } else if (output.stderr.length > 0) {
    d.error(output.stderr)
  }
  const templateOutput = output.stdout
  writeFileSync(templateFile, templateOutput)

  d.info('Deploying CRDs')
  await $`kubectl apply -f charts/kube-prometheus-stack/crds --server-side`
  await $`kubectl apply -f charts/tekton-triggers/crds --server-side`
  d.info('Deploying essential manifests')
  await $`kubectl apply -f ${templateFile}`
  d.info('Deploying charts containing label stage=prep')
  await hf(
    {
      // 'fileOpts' limits the hf scope and avoids parse errors (we only have basic values in this statege):
      fileOpts: 'helmfile.d/helmfile-02.init.yaml',
      labelOpts: ['stage=prep'],
      logLevel: logLevelString(),
      args: hfArgs,
    },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )
  await prepareDomainSuffix()

  let labelOpts = ['']
  if (intitalInstall) {
    // When Otomi is installed for the very first time and ArgoCD is not yet there.
    // The 'tag!=teams' does not include team-ns-admin release name.
    labelOpts = ['tag!=teams']
    await hf(
      {
        labelOpts,
        logLevel: logLevelString(),
        args: hfArgs,
      },
      { streams: { stdout: d.stream.log, stderr: d.stream.error } },
    )
  } else {
    // When Otomi is already installed and Tekton pipeline performs GitOps.
    // We ensure that helmfile does not deploy any team related Helm release.

    // We still need to deploy all teams because some settings depend on platform apps.
    // Note that team-ns-admin contains ingress for platform apps.
    const params = cloneDeep(argv)
    //TODO here happens the real installation of the apps
    await applyAsApps(params)
  }

  await upgrade({ when: 'post' })
  if (!(env.isDev && env.DISABLE_SYNC)) {
    await commit()
    if (intitalInstall) {
      await hf(
        {
          // 'fileOpts' limits the hf scope and avoids parse errors (we only have basic values in this statege):
          fileOpts: `${rootDir}/helmfile.tpl/helmfile-e2e.yaml`,
          logLevel: logLevelString(),
          args: hfArgs,
        },
        { streams: { stdout: d.stream.log, stderr: d.stream.error } },
      )
      await cloneOtomiChartsInGitea()
      await printWelcomeMessage()
    }
  }
  await setDeploymentState({ status: 'deployed', version })
  d.info('Deployment completed')
}

const apply = async (): Promise<void> => {
  const d = terminal(`cmd:${cmdName}:apply`)
  const argv: HelmArguments = getParsedArgs()
  const retryOptions: Options = {
    factor: 1,
    retries: 3,
    maxTimeout: 30000,
  }
  if (!argv.label && !argv.file) {
    await retry(async (bail) => {
      try {
        await applyAll()
      } catch (e) {
        d.error(e)
        await nothrow($`helm uninstall wait-for-otomi-realm -n maintenance`)
        await nothrow($`kubectl delete job wait-for-otomi-realm -n maintenance`)
        d.info(`Retrying in ${retryOptions.maxRetryTime} ms`)
        throw e
      }
    }, retryOptions)

    return
  }
  d.info('Start apply')
  const skipCleanup = argv.skipCleanup ? '--skip-cleanup' : ''
  await hf(
    {
      fileOpts: argv.file,
      labelOpts: argv.label,
      logLevel: logLevelString(),
      args: ['apply', '--include-needs', skipCleanup],
    },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )
}

export const module: CommandModule = {
  command: cmdName,
  describe: 'Apply all, or supplied, k8s resources',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: HelmArguments): Promise<void> => {
    setParsedArgs(argv)
    setup()
    await prepareEnvironment()
    await apply()
  },
}
