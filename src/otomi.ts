#!/usr/bin/env node --nolazy -r ts-node/register -r tsconfig-paths/register

import { existsSync, symlinkSync, unlinkSync } from 'fs'
import { commands, defaultCommand } from 'src/cmd'
import { scriptName } from 'src/common/cli'
import { terminal } from 'src/common/debug'
import { env } from 'src/common/envalid'
import { basicOptions, parser } from 'src/common/yargs'
import { CommandModule } from 'yargs'

console.profile('otomi')
const d = terminal('global')
const terminalScale = 0.75

const startup = async (): Promise<void> => {
  const link = `${process.cwd()}/env`
  let IN_DOCKER: string
  if (
    (env.IN_DOCKER && env.IN_DOCKER.toString() === 'true') ||
    (env.IN_DOCKER && env.IN_DOCKER.toString() === 'false')
  ) {
    IN_DOCKER = env.IN_DOCKER.toString()
  } else {
    IN_DOCKER = 'false'
  }
  if (!env.ENV_DIR) process.env.ENV_DIR = `${process.cwd()}/env`
  if (IN_DOCKER === 'true' && env.OTOMI_DEV && env.ENV_DIR) {
    if (existsSync(link)) unlinkSync(link)
    symlinkSync(env.ENV_DIR, link)
  }
  try {
    parser.scriptName(scriptName)
    commands.map((cmd: CommandModule) =>
      parser.command(cmd !== defaultCommand ? cmd : { ...cmd, command: [cmd.command as string, '$0'] }),
    )
    parser
      .option(basicOptions)
      .wrap(Math.min(parser.terminalWidth() * terminalScale, 256 * terminalScale))
      .fail((e) => {
        throw e
      })
      .env('OTOMI')
      .help('help')
      .alias('h', 'help')
      .strictCommands()
      .demandCommand()
      .completion('completion', false)
    await parser.parseAsync()
  } catch (error) {
    d.error(error)
    if (
      `${error}`.includes('Unknown command') ||
      `${error}`.includes('Not enough non-option arguments: got 0') ||
      `${error}`.includes('No arguments were passed')
    )
      parser.showHelp()
    process.exit(1)
  } finally {
    if (IN_DOCKER === 'true' && env.OTOMI_DEV && env.ENV_DIR) unlinkSync(`${process.cwd()}/env`)
    console.profileEnd('otomi')
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  await startup()
})()
