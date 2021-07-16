import { Argv } from 'yargs'
import { decrypt as decryptFunc } from '../common/crypt'
import { OtomiDebugger, terminal } from '../common/debug'
import { BasicArguments, ENV } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'

interface Arguments extends BasicArguments {
  files?: string[]
}
const fileName = 'decrypt'
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

export const decrypt = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  debug.verbose('Starting decryption')
  await decryptFunc(...(argv.files ?? []))
  debug.verbose('Decryption is done')
}

export const module = {
  command: `${fileName} [files..]`,
  describe:
    'Decrypts file(s) given as arguments (relative to env folder), or all env/*.secrets.yaml to env/*.secrets.yaml.dec files',
  builder: (parser: Argv): Argv => parser,

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    await decrypt(argv, { skipDecrypt: true, skipKubeContextCheck: true })
  },
}

export default module
