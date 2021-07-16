import { Argv } from 'yargs'
import { $ } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { Arguments as HelmArgs, helmOptions } from '../common/helm-opts'
import { hfValues } from '../common/hf'
import { capitalize, ENV } from '../common/no-deps'
import { cleanupHandler, otomi, PrepareEnvironmentOptions } from '../common/setup'
import { Arguments as DroneArgs, genDrone } from './gen-drone'
import { validateValues } from './validate-values'

const fileName = 'commit'
let debug: OtomiDebugger

interface Arguments extends HelmArgs, DroneArgs {}

/* eslint-disable no-useless-return */
const cleanup = (argv: Arguments): void => {
  if (argv['skip-cleanup']) return
}
/* eslint-enable no-useless-return */

const setup = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  if (argv._[0] === fileName) cleanupHandler(() => cleanup(argv))
  debug = terminal(fileName)

  if (options) await otomi.prepareEnvironment(options)
  otomi.closeIfInCore(fileName)
}

export const preCommit = async (argv: DroneArgs): Promise<void> => {
  const pcDebug = terminal('Pre Commit')
  pcDebug.verbose('Check for cluster diffs')
  const settingsDiff = (await $`git -C ${ENV.DIR} diff env/settings.yaml`).stdout.trim()
  const secretDiff = (await $`git -C ${ENV.DIR} diff env/secrets.settings.yaml`).stdout.trim()

  const versionChanges = settingsDiff.includes('+    version:')
  const secretChanges = secretDiff.includes('+        url: https://hooks.slack.com/')
  if (versionChanges || secretChanges) await genDrone(argv)
}

export const commit = async (argv: Arguments, options?: PrepareEnvironmentOptions): Promise<void> => {
  await setup(argv, options)
  debug.verbose('Pulling latest values')
  await $`git -C ${ENV.DIR} pull`
  await validateValues(argv)

  debug.verbose('Preparing values')
  const vals = await hfValues()
  const customerName = vals.customer?.name ?? 'otomi'
  const clusterDomain = vals.cluster.domainSuffix ?? vals.cluster.apiName
  await $`git -C ${ENV.DIR} config --local user.name || git -C ${ENV.DIR} config --local user.name ${capitalize(
    customerName,
  )}`
  await $`git -C ${ENV.DIR} config --local user.email || git -C ${ENV.DIR} config --local user.email ${customerName}@${clusterDomain}`

  preCommit(argv)
  debug.verbose('Do commit')
  await $`git -C ${ENV.DIR} add . && git -C ${ENV.DIR} commit -m 'Manual commit' --no-verify`
}

export const module = {
  command: fileName,
  // As discussed: https://otomi.slack.com/archives/C011D78FP47/p1623843840012900
  describe: 'Execute wrapper for generate pipelines -> git commit changed files',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    await commit(argv, { skipKubeContextCheck: true })
  },
}

export default module
