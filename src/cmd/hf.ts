import { Argv } from 'yargs'
import { OtomiDebugger, terminal } from '../common/debug'
import { hfStream } from '../common/hf'
import { LOG_LEVEL_STRING, setParsedArgs } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'
import { env } from '../common/validators'
import { Arguments as HelmArgs, helmOptions } from '../common/yargs-opts'

interface Arguments extends HelmArgs {
  args?: string[]
}

const fileName = 'hf'
let debug: OtomiDebugger

/* eslint-disable no-useless-return */
const cleanup = (argv: Arguments): void => {
  if (argv.skipCleanup) return
}
/* eslint-enable no-useless-return */

const setup = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  if (argv._[0] === fileName) cleanupHandler(() => cleanup(argv))
  debug = terminal(fileName)

  if (options) await otomi.prepareEnvironment(options)
}

export const hf = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  try {
    await hfStream(
      {
        fileOpts: argv.file,
        labelOpts: argv.label,
        logLevel: LOG_LEVEL_STRING(),
        args: argv.args ?? [],
      },
      { trim: true, streams: { stdout: debug.stream.log, stderr: debug.stream.error } },
    )
  } catch (error) {
    debug.exit(1, error.stderr)
  }
}

export const module = {
  command: `${fileName} [args..]`,
  describe: '',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: Arguments): Promise<void> => {
    setParsedArgs(argv)
    await hf(argv, { skipKubeContextCheck: env.TESTING })
  },
}

export default module
