/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { diff } from 'deep-diff'
import { cloneDeep, get, isEqual, set, unset } from 'lodash'
import { compare, valid } from 'semver'
import { Argv } from 'yargs'
import { $ } from 'zx'
import { prepareEnvironment } from '../common/cli'
import { OtomiDebugger, terminal } from '../common/debug'
import { hfValues } from '../common/hf'
import { getFilename, loadYaml, rootDir } from '../common/utils'
import { writeValues } from '../common/values'
import { BasicArguments, setParsedArgs } from '../common/yargs'
import { askYesNo } from '../common/zx-enhance'

const cmdName = getFilename(__filename)
const debug: OtomiDebugger = terminal(cmdName)

interface Change {
  version: string
  deletions?: Array<string>
  locations?: Array<{
    [oldLocation: string]: string
  }>
  mutations?: Array<{
    [preMutation: string]: string
  }>
}

export type Changes = Array<Change>

export const moveGivenJsonPath = (yaml: Record<string, unknown> | undefined, lhs: string, rhs: string): void => {
  const moveValue = get(yaml, lhs, 'err!')
  if (yaml && unset(yaml, lhs)) set(yaml, rhs, moveValue)
}

export const inlineGucci = async (): Promise<string> => {
  const execTmpl = await $`echo '{{ print "bla" }}' | gucci`
  return execTmpl.stdout.trim()
}

// save work https://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop

export function filterChanges(currentVersion: string, changes: Changes): Changes {
  if (!valid(currentVersion))
    throw new Error(`Please set otomi.version to a valid SemVer, e.g. 1.2.3 (received ${currentVersion})`)
  return changes.filter((c) => compare(c.version, currentVersion) >= 1).sort((a, b) => compare(a.version, b.version))
}

export const migrate = async (values: Record<string, unknown> | undefined, changes: Changes): Promise<void> => {
  for (const c of changes) {
    c.deletions?.forEach((del) => unset(values, del))
    c.locations?.forEach((loc) => moveGivenJsonPath(values, Object.keys(loc)[0], Object.values(loc)[0]))

    if (c.mutations && values)
      for await (const mut of c.mutations) {
        const prevValue = get(values, Object.keys(mut)[0])
        let proc
        try {
          proc = await inlineGucci()
        } catch (err) {
          throw new Error(err)
        } finally {
          set(values, Object.keys(mut)[0], proc)
        }
      }
  }
}

// Differences are reported as one or more change records. Change records have the following structure:

// kind - indicates the kind of change; will be one of the following:
// N - indicates a newly added property/element
// D - indicates a property/element was deleted
// E - indicates a property/element was edited
// A - indicates a change occurred within an array
// path - the property path (from the left-hand-side root)
// lhs - the value on the left-hand-side of the comparison (undefined if kind === 'N')
// rhs - the value on the right-hand-side of the comparison (undefined if kind === 'D')
// index - when kind === 'A', indicates the array index where the change occurred
// item - when kind === 'A', contains a nested change record indicating the change that occurred at the array index
export const module = {
  command: cmdName,
  hidden: true,
  describe: 'Migrate values',
  builder: (parser: Argv): Argv => parser,

  handler: async (argv: BasicArguments): Promise<void> => {
    setParsedArgs(argv)
    await prepareEnvironment({ skipKubeContextCheck: true })

    const prevValues = await hfValues({ filesOnly: true })
    const currentVersion = prevValues?.otomi?.version
    let changes: Changes = loadYaml(`${rootDir}/values-changes.yaml`)?.changes
    if (changes) changes = filterChanges(currentVersion, changes)
    const processedValues = cloneDeep(prevValues)
    await migrate(processedValues, changes)

    if (!isEqual(prevValues, processedValues)) {
      debug.info(`${JSON.stringify(diff(prevValues, processedValues), null, 2)}`)
      if (processedValues && (await askYesNo(`Acknowledge migration:`))) {
        await writeValues(processedValues)
      }
    } else debug.info('No changes detected, skipping')
  },
}
