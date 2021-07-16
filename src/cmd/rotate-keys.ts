import { Argv } from 'yargs'
import { rotate } from '../common/crypt'
import { OtomiDebugger, terminal } from '../common/debug'
import { BasicArguments } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'

const fileName = 'rotate-keys'
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

export const rotateKeys = async (argv: BasicArguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  debug.verbose('Starting key rotation')
  await rotate()
  debug.verbose('Key rotation is done')
}

export const module = {
  command: fileName,
  describe: '',
  builder: (parser: Argv): Argv => parser,

  handler: async (argv: BasicArguments): Promise<void> => {
    await rotateKeys(argv, { skipDecrypt: true, skipKubeContextCheck: true })
  },
}

export default module
