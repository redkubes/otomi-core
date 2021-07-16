import { Argv, CommandModule } from 'yargs'
import { $, nothrow } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { BasicArguments, parser } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'

const fileName = 'bash'
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

export const bash = async (argv: BasicArguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  if (argv._[0] === 'bash') parser.showHelp()
  else {
    const command = argv._.slice(1).join(' ')
    const output = await nothrow($`${command}`)
    output.stdout
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => debug.log(line))
    output.stderr
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => debug.error(line))
    process.exit(output.exitCode)
  }
}

export const module: CommandModule = {
  command: fileName,
  describe: 'Run interactive bash shell in otomi-core container',
  builder: (args: Argv): Argv => args,

  handler: async (argv: BasicArguments): Promise<void> => {
    await bash(argv, { skipKubeContextCheck: true, skipDecrypt: true })
  },
}

export default module
