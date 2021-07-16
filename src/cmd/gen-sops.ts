import { readFileSync, writeFileSync } from 'fs'
import { Argv } from 'yargs'
import { chalk } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { hfValues } from '../common/hf'
import { BasicArguments, ENV } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'

export interface Arguments extends BasicArguments {
  dryRun: boolean
}

const fileName = 'gen-sops'
let debug: OtomiDebugger

const providerMap = {
  aws: 'kms',
  azure: 'azure_keyvault',
  google: 'gcp_kms',
  vault: 'hc_vault_transit_uri',
}

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

export const genSops = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  const currDir = ENV.PWD
  const hfVals = await hfValues()
  const provider = hfVals?.kms?.sops?.provider
  if (!provider) throw new Error('No sops information given. Assuming no sops enc/decryption needed.')

  const targetPath = `${ENV.DIR}/.sops.yaml`
  const templatePath = `${currDir}/tpl/.sops.yaml`
  const kmsProvider = providerMap[provider]
  const kmsKeys = hfVals.kms.sops[provider].key

  debug.log(`Creating ${chalk.italic(targetPath)}`)

  let templateContent: string = readFileSync(templatePath, 'utf-8')
  templateContent = templateContent.replaceAll('__PROVIDER', kmsProvider).replaceAll('__KEYS', kmsKeys)

  if (process.env.DRY_RUN || argv.dryRun) {
    debug.log(templateContent)
  } else {
    writeFileSync(targetPath, templateContent)
  }

  if (provider === 'google') {
    if (process.env.GCLOUD_SERVICE_KEY) {
      debug.log('Creating gcp-key.json for vscode.')
      writeFileSync(`${ENV.DIR}/gcp-key.json`, JSON.stringify(JSON.parse(process.env.GCLOUD_SERVICE_KEY), null, 2))
    } else {
      debug.log('`GCLOUD_SERVICE_KEY` environment variable is not set, cannot create gcp-key.json.')
    }
  }
}

export const module = {
  command: fileName,
  describe: '',
  builder: (parser: Argv): Argv =>
    parser.options({
      'dry-run': {
        alias: ['d'],
        describe: "Dry Run, don't write to file, but to STDOUT",
        group: 'otomi gen-sops options',
        boolean: true,
        default: false,
      },
    }),

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    try {
      await genSops(argv, {})
    } catch (error) {
      debug.exit(0, error.message)
    }
  },
}

export default module
