import { Argv } from 'yargs'
import { $ } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { BasicArguments, ENV } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'

type Arguments = BasicArguments

const fileName = 'status'
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

// TODO: Rename function name to filename
export const status = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)

  // do {
  // eslint-disable-next-line no-await-in-loop
  const output = await $`helm list -A -a`
  // process.stdout.write('\u001b[3J\u001b[1J')
  // console.clear()
  console.log(output.stdout)
  // eslint-disable-next-line no-constant-condition
  // } while (true)
}

export const module = {
  command: fileName,
  describe: '',
  builder: (parser: Argv): Argv => parser,

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    await status(argv, {})
  },
}

export default module
