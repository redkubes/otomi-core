/**
 * Note that running this script requires "--experimental-specifier-resolution=node" due to this being an ESM module
 * https://nodejs.org/api/esm.html#esm_mandatory_file_extensions
 * https://nodejs.org/api/esm.html#esm_customizing_esm_specifier_resolution_algorithm
 * Run as:
 *  node --experimental-specifier-resolution=node ./dist/otomi.js -- <args>
 */

import { lstatSync, readdirSync } from 'fs'
import { CommandModule } from 'yargs'
import { bootstrap, commands, defaultCommand } from './cmd'
import { terminal } from './common/debug'
import { asBool, ENV, LOG_LEVELS, parser } from './common/no-deps'
import { otomi } from './common/setup'

const debug = terminal('global')
const terminalScale = 0.75
if (!asBool(process.env.OTOMI_IN_DOCKER)) debug.exit(1, 'Please run this script using the `otomi` entry script')

const envDirContent = readdirSync(ENV.DIR)
if (envDirContent.length > 0) {
  try {
    let errorMessage = ''
    if (!lstatSync(`${ENV.DIR}/env`).isDirectory()) errorMessage += `\n${ENV.DIR}/env is not a directory`
    if (!lstatSync(`${ENV.DIR}/env/charts`).isDirectory()) errorMessage += `\n${ENV.DIR}/env/charts is not a directory`
    if (!lstatSync(`${ENV.DIR}/env/cluster.yaml`).isFile())
      errorMessage += `\n${ENV.DIR}/env/cluster.yaml is not a file`
    if (!lstatSync(`${ENV.DIR}/env/settings.yaml`).isFile())
      errorMessage += `\n${ENV.DIR}/env/settings.yaml is not a file`
    if (errorMessage.trim().length > 0) {
      debug.exit(1, `It seems like '${ENV.DIR}' is not a valid values repo.${errorMessage}`)
    }
  } catch (error) {
    debug.exit(1, `It seems like '${ENV.DIR}' is not a valid values repo.\n${error.message}`)
  }
}

try {
  parser.scriptName(otomi.scriptName)
  if (envDirContent.length === 0) {
    parser.command({ ...bootstrap, command: [bootstrap.command, '$0'] })
  } else {
    commands.map((cmd: CommandModule) =>
      parser.command(cmd !== defaultCommand ? cmd : { ...cmd, command: [cmd.command as string, '$0'] }),
    )
  }
  parser
    .option({
      'log-level': {
        choices: Object.entries(LOG_LEVELS)
          .filter((val) => Number.isNaN(Number(val[0])))
          .map((val) => val[0]),
        default: LOG_LEVELS[LOG_LEVELS.WARN],
      },
      'skip-cleanup': {
        alias: 's',
        boolean: true,
        default: false,
      },
      'set-context': {
        alias: 'c',
        boolean: true,
        default: false,
      },
      verbose: {
        alias: 'v',
        count: true,
        coerce: (val: number) =>
          Math.min(
            val,
            Object.keys(LOG_LEVELS)
              .filter((logLevelVal) => !Number.isNaN(Number(logLevelVal)))
              .map(Number)
              .reduce((prev, curr) => Math.max(prev, curr)),
          ),
      },
      'no-interactive': {
        alias: 'ni',
        boolean: true,
        default: false,
      },
      trace: {
        boolean: true,
        default: false,
        hidden: true,
      },
      dev: {
        boolean: true,
        default: false,
        hidden: true,
      },
      inDocker: {
        boolean: true,
        default: false,
        hidden: true,
      },
    })
    .wrap(Math.min(parser.terminalWidth() * terminalScale, 256 * terminalScale))
    .fail((e) => {
      throw e
    })
    .env('OTOMI')
    .help('help')
    .alias('h', 'help')
    .demandCommand()
  // .completion()
  ENV.PARSED_ARGS = await parser.parseAsync()
} catch (error) {
  parser.showHelp()
  let errData = error.message
  if (asBool(process.env.OTOMI_DEV)) {
    errData = error
  }
  debug.exit(1, errData)
}
