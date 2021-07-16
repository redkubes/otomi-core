import { load } from 'js-yaml'
import { Transform } from 'stream'
import { $, ProcessOutput, ProcessPromise } from 'zx'
import { Arguments } from './helm-opts'
import { asArray, asBool, ENV, LOG_LEVELS } from './no-deps'
import { ProcessOutputTrimmed, Streams } from './zx-enhance'

let value: any
const trimHFOutput = (output: string): string => output.replace(/(^\W+$|skipping|basePath=)/gm, '')
const replaceHFPaths = (output: string): string => output.replaceAll('../env', ENV.DIR)

export type HFParams = {
  fileOpts?: string | string[] | null
  labelOpts?: string | string[] | null
  logLevel?: string | null
  args: string | string[]
}
const hfCore = (args: HFParams): ProcessPromise<ProcessOutput> => {
  const paramsCopy: HFParams = { ...args }
  paramsCopy.fileOpts = asArray(paramsCopy.fileOpts ?? [])
  paramsCopy.labelOpts = asArray(paramsCopy.labelOpts ?? [])
  paramsCopy.logLevel ??= 'warn'

  // Only ERROR, WARN, INFO or DEBUG are allowed, map other to closest neighbor
  switch (LOG_LEVELS[paramsCopy.logLevel.toUpperCase()]) {
    case LOG_LEVELS.FATAL:
      paramsCopy.logLevel = 'error'
      break
    case LOG_LEVELS.VERBOSE:
      paramsCopy.logLevel = 'info'
      break
    case LOG_LEVELS.TRACE:
      paramsCopy.logLevel = 'debug'
      break
    default:
      break
  }

  paramsCopy.args = asArray(paramsCopy.args).filter(Boolean)
  if (!paramsCopy.args || paramsCopy.args.length === 0) {
    throw new Error('No arguments were passed')
  }

  if (asBool(process.env.KUBE_VERSION_OVERRIDE)) {
    paramsCopy.args.push(`--set kubeVersionOverride=${process.env.KUBE_VERSION_OVERRIDE}`)
  }

  const labels = paramsCopy.labelOpts?.map((item: string) => `-l=${item}`)
  const files = paramsCopy.fileOpts?.map((item: string) => `-f=${item}`)

  const stringArray = [...(labels ?? []), ...(files ?? [])]

  stringArray.push(`--log-level=${paramsCopy.logLevel.toLowerCase()}`)
  const proc = $`helmfile ${stringArray} ${paramsCopy.args}`
  return proc
}

const hfTrimmed = (args: HFParams): ProcessPromise<ProcessOutput> => {
  const transform = new Transform({
    transform(chunk, encoding, next) {
      const transformation = trimHFOutput(chunk.toString()).trim()
      if (transformation && transformation.length > 0) this.push(transformation)
      next()
    },
  })
  const proc: ProcessPromise<ProcessOutput> = hfCore(args)
  proc.stdout.pipe(transform)
  return proc
}

export type HFOptions = {
  trim?: boolean
  streams?: Streams
}

export const hfStream = (args: HFParams, opts?: HFOptions): ProcessPromise<ProcessOutput> => {
  const proc = opts?.trim ? hfTrimmed(args) : hfCore(args)
  if (opts?.streams?.stdout) proc.stdout.pipe(opts.streams.stdout)
  if (opts?.streams?.stderr) proc.stderr.pipe(opts.streams.stderr)
  return proc
}
export const hf = async (args: HFParams, opts?: HFOptions): Promise<ProcessOutputTrimmed> => {
  return new ProcessOutputTrimmed(await hfStream(args, opts))
}

export type ValuesOptions = {
  replacePath?: boolean
  asString?: boolean
}
export const values = async (opts?: ValuesOptions): Promise<any | string> => {
  if (value) return value
  const output = await hf({ fileOpts: './helmfile.tpl/helmfile-dump.yaml', args: 'build' }, { trim: true })
  let result = output.stdout
  if (opts?.replacePath) result = replaceHFPaths(result)
  if (opts?.asString) return result
  value = load(result) as any
  return value
}

export const hfValues = async (): Promise<any> => {
  // TODO: replacePath not executed when values is already cached
  /*
    await values() //no replacePath
    await values({ replacePath: true}) // still no replacePath
  */
  return (await values({ replacePath: true })).renderedvalues
}

export const hfTemplate = async (argv: Arguments, outDir?: string, streams?: Streams): Promise<string> => {
  process.env.QUIET = '1'
  const args = ['template', '--skip-deps']
  if (outDir) args.push(`--output-dir=${outDir}`)
  if (argv['skip-cleanup']) args.push('--skip-cleanup')
  let template = ''
  const params: HFParams = { args }
  if (!argv.f && !argv.l) {
    template += await hf({ ...params, fileOpts: 'helmfile.tpl/helmfile-init.yaml' }, { streams })
    template += '\n'
  }
  template += await hf(params, { streams })
  return template
}
