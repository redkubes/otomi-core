import { Argv } from 'yargs'
import { OtomiDebugger, terminal } from '../common/debug'
import { Arguments, helmOptions } from '../common/helm-opts'
import { hfStream } from '../common/hf'
import { ENV, LOG_LEVEL_STRING } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'
import { ProcessOutputTrimmed } from '../common/zx-enhance'
import { decrypt } from './decrypt'

const fileName = 'diff'
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

export const diff = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<ProcessOutputTrimmed> => {
  await setup(argv, options)
  await decrypt(argv)
  debug.verbose('Start Diff')
  const res = await hfStream(
    {
      fileOpts: argv.file,
      labelOpts: argv.label,
      logLevel: LOG_LEVEL_STRING(),
      args: ['diff', '--skip-deps'],
    },
    { trim: true, streams: { stdout: debug.stream.log } },
  )
  return new ProcessOutputTrimmed(res)
}

export const module = {
  command: fileName,
  describe: 'Diff k8s resources',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    await diff(argv, { skipDecrypt: true })
  },
}

export default module
