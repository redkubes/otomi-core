import { Argv } from 'yargs'
import { $, nothrow } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { BasicArguments, ENV, LOG_LEVEL, LOG_LEVELS } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'
import { stream } from '../common/zx-enhance'

const fileName = 'x'
let debug: OtomiDebugger

/* eslint-disable no-useless-return */
const cleanup = (argv: BasicArguments): void => {
  if (argv['skip-cleanup']) return
}
/* eslint-enable no-useless-return */

const setup = async (argv: BasicArguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  if (argv._[0] === fileName) cleanupHandler(() => cleanup(argv))
  debug = terminal(fileName)

  if (options) await otomi.prepareEnvironment(options)
}

export const x = async (argv: BasicArguments, options?: PrepareEnvironmentOptions): Promise<number> => {
  await setup(argv, options)
  const commands = argv._.slice(1)
  if (LOG_LEVEL() >= LOG_LEVELS.VERBOSE) commands.push('-v')
  const output = await stream(nothrow($`${commands}`), { stdout: debug.stream.log, stderr: debug.stream.error })
  return output.exitCode
}

export const module = {
  command: fileName,
  describe: 'Execute command in container',
  builder: (parser: Argv): Argv => parser,

  handler: async (argv: BasicArguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    const exitCode = await x(argv, { skipKubeContextCheck: true })
    process.exit(exitCode)
  },
}

export default module
