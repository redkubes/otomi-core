import { Argv } from 'yargs'
import { prepareEnvironment } from '../common/cli'
import { OtomiDebugger, terminal } from '../common/debug'
import { getFilename } from '../common/utils'
import { BasicArguments, setParsedArgs } from '../common/yargs-opts'
/**
 * This file is a scripting playground to test basic code
 * it's basically the same as EXAMPLE.ts
 * but loaded into the application to run.
 */

const cmdName = getFilename(__filename)
const debug: OtomiDebugger = terminal(cmdName)

const playground = async (): Promise<void> => {
  debug.log(cmdName)

  await Promise.resolve()
}

export const module = {
  command: `${cmdName} [opts...]`,
  hidden: true,
  describe: undefined,
  builder: (parser: Argv): Argv => parser,

  handler: async (argv: BasicArguments): Promise<void> => {
    setParsedArgs(argv)
    await prepareEnvironment({ skipAllPreChecks: true })
    await playground()
  },
}
