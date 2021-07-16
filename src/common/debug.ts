import Debug from 'debug'
import { Writable, WritableOptions } from 'stream'
import { LOG_LEVEL, LOG_LEVELS } from './no-deps'

const SET_STATIC_COLORS = process.env.STATIC_COLORS ?? false

const commonDebug: Debug.Debugger = Debug('otomi')
commonDebug.enabled = true
export class DebugStream extends Writable {
  output: Debug.Debugger

  constructor(output: Debug.Debugger, opts?: WritableOptions) {
    super(opts)
    this.output = output
  }

  // eslint-disable-next-line no-underscore-dangle,@typescript-eslint/explicit-module-boundary-types
  _write(chunk: any, encoding: any, callback: (error?: Error | null) => void): void {
    const data = chunk.toString().trim()
    if (data.length > 0) this.output(data)
    callback()
  }
}
export type OtomiStreamDebugger = {
  log: DebugStream
  trace: DebugStream
  debug: DebugStream
  verbose: DebugStream
  warn: DebugStream
  error: DebugStream
}
export type OtomiDebugger = {
  enabled: boolean
  base: Debug.Debugger
  log: Debug.Debugger
  trace: Debug.Debugger
  debug: Debug.Debugger
  verbose: Debug.Debugger
  warn: Debug.Debugger
  error: Debug.Debugger
  stream: OtomiStreamDebugger
  exit: (exitCode: number, ...args: any[]) => void
}

const xtermColors = {
  red: [52, 124, 9, 202, 211],
  orange: [58, 130, 202, 208, 214],
  green: [2, 28, 34, 46, 78, 119],
}
const getColor = (namespace: string, color: number[]): string => {
  const colons = (namespace.match(/:/g) || ['']).length - 1
  return color[Math.max(0, Math.min(colons, color.length - 1))].toString()
}
/*
 * Must be function to be able to export overrides.
 */
/* eslint-disable no-redeclare */
export function terminal(namespace: string): OtomiDebugger
export function terminal(namespace: string, terminalEnabled?: boolean): OtomiDebugger {
  const newDebug = (baseNamespace: string, enabled = true): Debug.Debugger => {
    const newDebugObj: Debug.Debugger = commonDebug.extend(baseNamespace)
    newDebugObj.enabled = enabled
    return newDebugObj
  }
  const base = newDebug(`${namespace}`, terminalEnabled)
  const log = newDebug(`${namespace}:log`, terminalEnabled)
  const trace = newDebug(`${namespace}:trace`, LOG_LEVEL() >= LOG_LEVELS.TRACE && terminalEnabled)
  const debug = newDebug(`${namespace}:debug`, LOG_LEVEL() >= LOG_LEVELS.DEBUG && terminalEnabled)
  const verbose = newDebug(`${namespace}:verbose`, LOG_LEVEL() >= LOG_LEVELS.VERBOSE && terminalEnabled)
  const warn = newDebug(`${namespace}:warn`, LOG_LEVEL() >= LOG_LEVELS.WARN && terminalEnabled)
  const error = newDebug(`${namespace}:error`, LOG_LEVEL() >= LOG_LEVELS.ERROR && terminalEnabled)
  const exit = (exitCode: number, ...args: any[]) => {
    const exitDebug = newDebug(`${namespace}:crit`, terminalEnabled)
    if (SET_STATIC_COLORS) exitDebug.color = getColor(base.namespace, xtermColors.red)
    args.map((arg) => exitDebug('', arg))
    process.exit(exitCode)
  }
  if (SET_STATIC_COLORS) error.color = getColor(base.namespace, xtermColors.red)
  if (SET_STATIC_COLORS) warn.color = getColor(base.namespace, xtermColors.orange)
  if (SET_STATIC_COLORS) verbose.color = getColor(base.namespace, xtermColors.green)

  const newDebugger: OtomiDebugger = {
    enabled: terminalEnabled ?? true,
    base,
    log,
    trace,
    debug,
    verbose,
    warn,
    error,
    exit,
    stream: {
      log: new DebugStream(log),
      trace: new DebugStream(trace),
      debug: new DebugStream(debug),
      verbose: new DebugStream(verbose),
      warn: new DebugStream(warn),
      error: new DebugStream(error),
    },
  }
  return newDebugger
}
/* eslint-enable no-redeclare */
