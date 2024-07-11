import { prepareEnvironment } from 'src/common/cli'
import { terminal } from 'src/common/debug'
import { getFilename } from 'src/common/utils'
import { BasicArguments, getParsedArgs, parser, setParsedArgs } from 'src/common/yargs'
import { Argv, CommandModule } from 'yargs'
import { $, nothrow } from 'zx'

const cmdName = getFilename(__filename)

const bash = async (): Promise<void> => {
  const d = terminal(`cmd:${cmdName}bash`)
  const argv: BasicArguments = getParsedArgs()
  console.log(argv)
  if (argv._[0] === 'bash') parser.showHelp()
  else {
    const command = argv._.slice(1).join(' ')
    const output = await nothrow($`${command}`)
    output.stdout
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => d.log(line))
    output.stderr
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => d.error(line))
    process.exit(output.exitCode)
  }
}

export const module: CommandModule = {
  command: cmdName,
  describe: 'Run interactive bash shell in apl-core container',
  builder: (args: Argv): Argv => args,

  handler: async (argv: BasicArguments): Promise<void> => {
    setParsedArgs(argv)
    await prepareEnvironment({ skipKubeContextCheck: true, skipDecrypt: true })
    await bash()
  },
}
