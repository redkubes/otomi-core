import { writeFileSync } from 'fs-extra'
import { prepareEnvironment } from 'src/common/cli'
import { terminal } from 'src/common/debug'
import { env } from 'src/common/envalid'
import { hfValues } from 'src/common/hf'
import { getFilename } from 'src/common/utils'
import { BasicArguments, getParsedArgs, setParsedArgs } from 'src/common/yargs'
import { stringify } from 'yaml'
import { Argv } from 'yargs'

const cmdName = getFilename(__filename)

interface Arguments extends BasicArguments {
  filesOnly?: boolean
  excludeSecrets?: boolean
}

const values = async (): Promise<void> => {
  const d = terminal(`cmd:${cmdName}:values`)
  d.info('Get values')
  const argv: Arguments = getParsedArgs()
  const hfVal = await hfValues({ filesOnly: argv.filesOnly, excludeSecrets: argv.excludeSecrets })
  d.info('Print values')
  writeFileSync(`${env.ENV_DIR}/rendered-values.yaml`, stringify(hfVal))
  // console.log(stringify(hfVal))
}

export const module = {
  command: cmdName,
  describe:
    'Show helmfile values for target cluster (--files-only: only values stored on disk, --exclude-secrets: omit secrets)',
  builder: (parser: Argv): Argv =>
    parser.options({
      filesOnly: {
        boolean: true,
        default: false,
      },
      excludeSecrets: {
        boolean: true,
        default: false,
      },
      outputFile: {
        default: undefined,
      },
    }),

  handler: async (argv: Arguments): Promise<void> => {
    setParsedArgs(argv)
    await prepareEnvironment({ skipKubeContextCheck: true })
    await values()
  },
}
