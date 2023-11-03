import { mkdirSync, rmdirSync, writeFileSync } from 'fs'
import { isEmpty } from 'lodash'
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
  const argv: HelmArguments = getParsedArgs()
  const prevState = await getDeploymentState()

  await upgrade({ when: 'pre' })
  d.info('Start apply all')
  d.debug(`Deployment state: ${JSON.stringify(prevState)}`)
  const tag = await getImageTag()
  const version = await getCurrentVersion()
  await setDeploymentState({ status: 'deploying', deployingTag: tag, deployingVersion: version })

  const state = await getDeploymentState()
  const releases = await getHelmReleases()
  await writeValuesToFile(`${env.ENV_DIR}/env/status.yaml`, { status: { otomi: state, helm: releases } }, true)

  const output: ProcessOutputTrimmed = await hf(
    { fileOpts: 'helmfile.tpl/helmfile-init.yaml', args: 'template' },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )
  if (output.exitCode > 0) {
    throw new Error(output.stderr)
  } else if (output.stderr.length > 0) {
    d.error(output.stderr)
  }
  const templateOutput = output.stdout
  writeFileSync(templateFile, templateOutput)
  await $`kubectl apply -f ${templateFile}`
  await nothrow(
    $`if ! kubectl replace -f charts/kube-prometheus-stack/crds; then kubectl create -f charts/kube-prometheus-stack/crds; fi`,
  )
  d.info('Deploying charts containing label stage=prep')
  await hf(
    {
      // 'fileOpts' limits the hf scope and avoids parse errors (we only have basic values in this statege):
      fileOpts: 'helmfile.d/helmfile-02.init.yaml',
      labelOpts: [...(argv.label || []), 'stage=prep'],
      logLevel: logLevelString(),
      args: ['apply'],
    },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )
  await prepareDomainSuffix()
  d.info('Deploying charts containing label stage!=prep')
  await hf(
    {
      labelOpts: [...(argv.label || []), 'stage!=prep'],
      logLevel: logLevelString(),
      args: ['apply'],
    },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )

  const intitalInstall = isEmpty(prevState.version)
  await upgrade({ when: 'post' })
  await cloneOtomiChartsInGitea()
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
