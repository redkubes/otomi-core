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
import { $ } from 'zx'
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
  await $`kubectl apply -f charts/operator-lifecycle-manager/crds --server-side`
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
      args: ['apply'],
    },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )
  await prepareDomainSuffix()
  // const applyLabel: string = process.env.OTOMI_DEV_APPLY_LABEL || 'stage!=prep'
  // d.info(`Deploying charts containing label ${applyLabel}`)

  // The 'tag!=teams' does not include team-ns-admin release name
  let labelOpts = ['tag!=teams']

  if (!intitalInstall) {
    const params = cloneDeep(argv)
    params.label = ['team=admin']
    // We still need to deploy team admin as it contain ingress for platform apps
    await applyAsApps(params)

    // We still need to deploy teams because some settings depend on platform apps
    // We deploy it separately to ensure error isolation
    params.label = ['tag=teams']
    await applyAsApps(params)

    // We ensure that helmfile does not deploy any team related Helm release
    labelOpts = ['pipeline!=otomi-task-teams']
  }

  await hf(
    {
      labelOpts,
      logLevel: logLevelString(),
      args: ['apply'],
    },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )

  await upgrade({ when: 'post' })
  if (!(env.isDev && env.DISABLE_SYNC)) {
    await commit()
    if (intitalInstall) {
      await hf(
        {
          // 'fileOpts' limits the hf scope and avoids parse errors (we only have basic values in this statege):
          fileOpts: `${rootDir}/helmfile.tpl/helmfile-e2e.yaml`,
          logLevel: logLevelString(),
          args: ['apply'],
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
  if (!argv.label && !argv.file) {
    await applyAll()
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
