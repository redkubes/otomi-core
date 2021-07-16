import Ajv, { DefinedError, ValidateFunction } from 'ajv'
import { Argv } from 'yargs'
import { chalk } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { Arguments, helmOptions } from '../common/helm-opts'
import { hfValues } from '../common/hf'
import { ENV, loadYaml } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'

const fileName = 'validate-values'
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

export const validateValues = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  debug.verbose('Values validation STARTED')

  if (argv.l || argv.label) {
    const labelOpts = [...new Set([...(argv.l ?? []), ...(argv.label ?? [])])]
    debug.exit(1, `Cannot pass option '${labelOpts}'`)
  }

  debug.verbose('Getting values')
  const hfVal = await hfValues()

  try {
    debug.verbose('Loading values-schema.yaml')
    const valuesSchema = loadYaml('./values-schema.yaml')
    debug.verbose('Initializing Ajv')
    const ajv = new Ajv({ allErrors: true, strict: false, strictTypes: false, verbose: true })
    debug.verbose('Compiling Ajv validation')
    let validate: ValidateFunction<unknown>
    try {
      validate = ajv.compile(valuesSchema)
    } catch (error) {
      debug.exit(1, `Schema is invalid: ${chalk.italic(error.message)}`)
      return
    }
    debug.verbose(`Validating values`)
    const val = validate(hfVal)
    if (val) {
      debug.verbose('Values validation SUCCESSFUL')
    } else {
      validate.errors?.map((error: DefinedError) =>
        debug.error('%O', {
          keyword: error.keyword,
          dataPath: error.instancePath,
          schemaPath: error.schemaPath,
          params: error.params,
          message: error.message,
        }),
      )
      debug.exit(1, 'Values validation FAILED')
    }
  } catch (error) {
    debug.exit(1, error.message)
  }
}

export const module = {
  command: fileName,
  describe: 'Validate values for each cluster against JSON schema (takes target options)',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    await validateValues(argv, { skipKubeContextCheck: true })
  },
}

export default module
