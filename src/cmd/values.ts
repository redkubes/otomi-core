import { dump } from 'js-yaml'
import { Argv } from 'yargs'
import { prepareEnvironment } from '../common/cli'
import { OtomiDebugger, terminal } from '../common/debug'
import { hfValues } from '../common/hf'
import { getFilename } from '../common/utils'
import { BasicArguments, getParsedArgs, setParsedArgs } from '../common/yargs'

const cmdName = getFilename(__filename)
const debug: OtomiDebugger = terminal(cmdName)

export interface Arguments extends BasicArguments {
  filesOnly?: boolean
}

const values = async (): Promise<void> => {
  debug.info('Get values')
  const argv: Arguments = getParsedArgs()
  const hfVal = await hfValues({ filesOnly: argv.filesOnly })

  debug.info('Print values')
  console.log(dump(hfVal))
}

export const module = {
  command: cmdName,
  describe: 'Show helmfile values for target cluster (--files-only: only values stored on disk)',
  builder: (parser: Argv): Argv =>
    parser.options({
      filesOnly: {
        boolean: true,
        default: false,
      },
    }),

  handler: async (argv: Arguments): Promise<void> => {
    setParsedArgs(argv)
    await prepareEnvironment({ skipKubeContextCheck: true })
    await values()
  },
}
