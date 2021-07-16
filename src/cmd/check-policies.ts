import { rmSync } from 'fs'
import { Argv } from 'yargs'
import { $, nothrow } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { Arguments, helmOptions } from '../common/helm-opts'
import { hfTemplate } from '../common/hf'
import { ENV, loadYaml, LOG_LEVEL, LOG_LEVELS } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'

const fileName = 'check-policies'
const policiesFile = `${ENV.DIR}/env/policies.yaml`
const settingsFile = `${ENV.DIR}/env/settings.yaml`
const outDir = '/tmp/otomi/conftest'
let debug: OtomiDebugger

const cleanup = (argv: Arguments): void => {
  if (argv['skip-cleanup']) return
  rmSync(outDir, { force: true, recursive: true })
}

const setup = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  if (argv._[0] === fileName) cleanupHandler(() => cleanup(argv))
  debug = terminal(fileName)
  if (options) await otomi.prepareEnvironment(options)
}

export const checkPolicies = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  debug.verbose('Policy checking STARTED')

  const settings = loadYaml(settingsFile)
  if (settings?.otomi?.addons?.conftest && !settings?.otomi?.addons?.conftest.enabled) {
    debug.log('Skipping')
    return
  }
  debug.verbose('Generating k8s manifest for cluster')
  const template = await hfTemplate(argv, outDir)
  debug.debug(template)

  const extraArgs: string[] = []
  if (LOG_LEVEL() === LOG_LEVELS.TRACE) extraArgs.push('--trace')
  if (ENV.isCI) extraArgs.push('--no-color')

  debug.verbose('Checking manifest against policies')
  const confTestOutput = (
    await nothrow(
      $`conftest test ${extraArgs} --fail-on-warn --all-namespaces -d ${policiesFile} -p policies ${outDir}`,
    )
  ).stdout
  const cleanConftest: string = confTestOutput
    .replace(/^.*no policies found.*[\r\n]/gm, '')
    .replace(/^.*TRAC.*[\r\n]/gm, '')
    .replace(/^.*PASS.*[\r\n]/gm, '')
  if (cleanConftest.indexOf('FAIL') > -1) {
    debug.exit(1, cleanConftest)
  }
}

export const module = {
  command: fileName,
  describe: 'Check if generated manifests adhere to defined OPA policies',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    await checkPolicies(argv, { skipKubeContextCheck: true })
  },
}

export default module
