import { mkdirSync, rmdirSync, writeFileSync } from 'fs'
import { Argv, CommandModule } from 'yargs'
import { $ } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { giteaPush } from '../common/gitea-push'
import { Arguments as HelmArgs, helmOptions } from '../common/helm-opts'
import { hf, hfStream } from '../common/hf'
import { ENV, LOG_LEVEL_STRING } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'
import { ProcessOutputTrimmed } from '../common/zx-enhance'
import { decrypt } from './decrypt'
import { Arguments as DroneArgs, genDrone } from './gen-drone'

const fileName = 'apply'
const dir = '/tmp/otomi/'
const templateFile = `${dir}deploy-template.yaml`
let debug: OtomiDebugger

interface Arguments extends HelmArgs, DroneArgs {}

/* eslint-disable no-useless-return */
const cleanup = (argv: Arguments): void => {
  if (argv['skip-cleanup']) return
  rmdirSync(dir, { recursive: true })
}
/* eslint-enable no-useless-return */

const setup = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  if (argv._[0] === fileName) cleanupHandler(() => cleanup(argv))
  debug = terminal(fileName)

  if (options) await otomi.prepareEnvironment(options)
  await decrypt(argv)
  mkdirSync(dir, { recursive: true })
}

const deployAll = async (argv: Arguments) => {
  const output: ProcessOutputTrimmed = await hf(
    { fileOpts: 'helmfile.tpl/helmfile-init.yaml', args: 'template' },
    { streams: { stdout: debug.stream.log } },
  )
  if (output.exitCode > 0) {
    debug.exit(output.exitCode, output.stderr)
  } else if (output.stderr.length > 0) {
    debug.error(output.stderr)
  }
  const templateOutput = output.stdout
  writeFileSync(templateFile, templateOutput)
  await $`kubectl apply -f ${templateFile}`
  await $`kubectl apply -f charts/prometheus-operator/crds`
  await hf(
    {
      fileOpts: argv.file,
      labelOpts: [...(argv.label ?? []), 'stage!=post'],
      logLevel: LOG_LEVEL_STRING(),
      args: ['apply', '--skip-deps'],
    },
    { streams: { stdout: debug.stream.log } },
  )
  if (!ENV.isCI) {
    await genDrone(argv)
    await giteaPush()
  }
  await hf(
    {
      fileOpts: argv.file,
      labelOpts: [...(argv.label ?? []), 'stage=post'],
      logLevel: LOG_LEVEL_STRING(),
      args: ['apply', '--skip-deps'],
    },
    { streams: { stdout: debug.stream.log } },
  )
}

export const apply = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  if (argv._[0] === 'deploy' || (!argv.label && !argv.file)) {
    debug.verbose('Start deploy')
    await deployAll(argv)
  } else {
    debug.verbose('Start apply')
    const skipCleanup = argv['skip-cleanup'] ? '--skip-cleanup' : ''
    await hfStream(
      {
        fileOpts: argv.file,
        labelOpts: argv.label,
        logLevel: LOG_LEVEL_STRING(),
        args: ['apply', '--skip-deps', skipCleanup],
      },
      { trim: true, streams: { stdout: debug.stream.log } },
    )
  }
}

export const module: CommandModule = {
  command: fileName,
  describe: 'Apply K8S resources',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    await apply(argv, { skipDecrypt: true })
  },
}

export default module
