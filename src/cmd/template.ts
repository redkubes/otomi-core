import { Argv } from 'yargs'
import { OtomiDebugger, terminal } from '../common/debug'
import { hfTemplate } from '../common/hf'
import { ENV } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'
import { Arguments as HelmArgs, helmOptions } from '../common/yargs-opts'

interface Arguments extends HelmArgs {
  outDir: string
}

const fileName = 'template'
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

export const template = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  debug.verbose('Templating STARTED')
  await hfTemplate(argv, argv.outDir, { stdout: debug.stream.log, stderr: debug.stream.error })
  debug.verbose('Templating DONE')
}

export const module = {
  command: `${fileName} [outDir]`,
  describe: 'Export k8s resources',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    await template(argv, { skipKubeContextCheck: true })
  },
}

export default module
