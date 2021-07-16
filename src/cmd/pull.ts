import { Argv } from 'yargs'
import { $ } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { Arguments as HelmArgs, helmOptions } from '../common/helm-opts'
import { ENV } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'
import { Arguments as BootsrapArgs, bootstrap } from './bootstrap'

interface Arguments extends HelmArgs, BootsrapArgs {}

const fileName = 'pull'
let debug: OtomiDebugger

/* eslint-disable no-useless-return */
const cleanup = (argv: Arguments): void => {
  if (argv['skip-cleanup']) return
}
/* eslint-enable no-useless-return */

const setup = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  if (argv._[0] === fileName) cleanupHandler(() => cleanup(argv))
  debug = terminal(fileName)

  if (options) await otomi.prepareEnvironment(options)
}

export const pull = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  otomi.closeIfInCore(fileName)
  debug.verbose('Pull latest values')
  await $`git -C ${ENV.DIR} pull`
  await bootstrap(argv)
}

export const module = {
  command: fileName,
  describe: `Wrapper for git pull && ${otomi.scriptName} bootstrap`,
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    await pull(argv, { skipKubeContextCheck: true })
  },
}

export default module
