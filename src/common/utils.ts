/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
import $RefParser, { JSONSchema } from '@apidevtools/json-schema-ref-parser'
import cleanDeep, { CleanOptions } from 'clean-deep'
import { existsSync, pathExists, readFileSync } from 'fs-extra'
import { readFile, readdir } from 'fs/promises'
import walk from 'ignore-walk'
import { dump, load } from 'js-yaml'
import { omit } from 'lodash'
import { resolve } from 'path'
import { $, ProcessOutput } from 'zx'
import { env } from './envalid'

const packagePath = process.cwd()

// we keep the rootDir for zx, but have to fix it for drone, which starts in /home/app/stack/env (to accommodate write perms):
export const rootDir = process.cwd() === '/home/app/stack/env' ? '/home/app/stack' : process.cwd()
export const pkg = JSON.parse(readFileSync(`${rootDir}/package.json`, 'utf8'))
export const getFilename = (path: string): string => path.split('/').pop()?.split('.')[0] as string

export const asArray = (args: string | string[]): string[] => {
  return Array.isArray(args) ? args : [args]
}

export const removeBlankAttributes = (obj: Record<string, any>): Record<string, any> => {
  const options: CleanOptions = {
    emptyArrays: true,
    emptyObjects: true,
    emptyStrings: true,
    nullValues: false,
    undefinedValues: true,
  }
  return cleanDeep(obj, options)
}

export const readdirRecurse = async (dir: string, opts?: { skipHidden: boolean }): Promise<string[]> => {
  const dirs = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    dirs.map(async (dirOrFile) => {
      const res = resolve(dir, dirOrFile.name)
      if (opts?.skipHidden && dirOrFile.name.startsWith('.')) return []
      return dirOrFile.isDirectory() ? readdirRecurse(res) : res
    }),
  )
  return files.flat()
}

export const getEnvFiles = (): Promise<string[]> => {
  return walk({
    path: env.ENV_DIR,
    ignoreFiles: ['.gitignore'],
    follow: true,
  })
}

export const loadYaml = async (
  path: string,
  opts?: { noError: boolean },
): Promise<Promise<Record<string, any> | undefined>> => {
  if (!(await pathExists(path))) {
    if (opts?.noError) return undefined
    throw new Error(`${path} does not exist`)
  }
  const file = await readFile(path, 'utf-8')
  return load(file) as Record<string, any>
}

export const flattenObject = (obj: Record<string, any>, path = ''): { [key: string]: string } => {
  return Object.entries(obj)
    .flatMap(([key, value]) => {
      const subPath = path.length ? `${path}.${key}` : key
      if (typeof value === 'object' && !Array.isArray(value) && value !== null)
        return flattenObject(value as Record<string, any>, subPath)
      return { [subPath]: value }
    })
    .reduce((acc, base) => {
      return { ...acc, ...base }
    }, {})
}
export interface GucciOptions {
  asObject?: boolean
}

export const gucci = async (
  tmpl: string | unknown,
  ctx: { [key: string]: any },
  asString = false,
): Promise<string | unknown> => {
  const kv = flattenObject(ctx)
  const gucciArgs = Object.entries(kv).map(([k, v]) => {
    // Cannot template if key contains regex characters, so skip
    if (stringContainsSome(k, ...'^()[]$'.split(''))) return ''
    const val = typeof v === 'object' ? JSON.stringify(v) : v
    return `-s ${k}='${val ?? ''}'`
  })

  const quoteBackup = $.quote
  $.quote = (v) => v
  try {
    let processOutput: ProcessOutput
    const templateContent: string = typeof tmpl === 'string' ? tmpl : dump(tmpl, { lineWidth: -1 })
    // Cannot be a path if it wasn't a string
    if (typeof tmpl === 'string' && (await pathExists(templateContent))) {
      processOutput = await $`gucci -o missingkey=zero ${gucciArgs} ${templateContent}`
    } else {
      // input string is a go template content
      processOutput = await $`echo "${templateContent.replaceAll('"', '\\"')}" | gucci -o missingkey=zero ${gucciArgs}`
    }
    const ret = processOutput.stdout.trim()
    if (asString) {
      return ret
    }
    // translate the output from yaml to js, and return it, whatever shape
    return load(ret)
  } finally {
    $.quote = quoteBackup
  }
}

export const extract = (
  schema: Record<string, any>,
  leaf: string,
  mapValue = (val: any) => val,
): Record<string, any> => {
  const schemaKeywords = ['properties', 'anyOf', 'allOf', 'oneOf', 'default', 'x-secret', 'x-acl']
  return Object.keys(schema)
    .map((key) => {
      const childObj: JSONSchema = schema[key]
      if (key === leaf) return schemaKeywords.includes(key) ? mapValue(childObj) : { [key]: mapValue(childObj) }
      if (typeof childObj !== 'object') return {}
      const obj: JSONSchema = extract(childObj, leaf, mapValue)
      if ('extractedValue' in obj) return { [key]: obj.extractedValue }
      // eslint-disable-next-line no-nested-ternary
      return schemaKeywords.includes(key) || !Object.keys(obj).length || !Number.isNaN(Number(key))
        ? obj === '{}'
          ? undefined
          : obj
        : { [key]: obj }
    })
    .reduce((accumulator, extractedValue) => {
      return typeof extractedValue !== 'object'
        ? { ...accumulator, extractedValue }
        : { ...accumulator, ...extractedValue }
    }, {})
}

let valuesSchema: Record<string, any>
export const getValuesSchema = async (): Promise<Record<string, any>> => {
  if (valuesSchema) return valuesSchema
  const schema = await loadYaml(`${rootDir}/values-schema.yaml`)
  const derefSchema = await $RefParser.dereference(schema as $RefParser.JSONSchema)
  valuesSchema = omit(derefSchema, ['definitions'])

  return valuesSchema
}

export const stringContainsSome = (str: string, ...args: string[]): boolean => {
  if (!str) return false
  return args.some((arg) => str.includes(arg))
}

const isCoreCheck = (): boolean => {
  if (packagePath === '/home/app/stack' || !existsSync(`${packagePath}/package.json`)) return false
  return pkg.name === 'apl-core'
}

export const isCore: boolean = isCoreCheck()

export const providerMap = (provider: string): string => {
  const map = {
    aws: 'eks',
    azure: 'aks',
    google: 'gke',
  }
  return map[provider] ?? provider
}

/**
 * Compare semver version strings, returning -1, 0, or 1.
 * If the semver string a is greater than b, return 1. If the semver string b is greater than a, return -1. If a equals b, return 0
 */
export const semverCompare = (a, b) => {
  const pa = a.split('.')
  const pb = b.split('.')
  for (let i = 0; i < 3; i++) {
    const na = Number(pa[i])
    const nb = Number(pb[i])
    if (na > nb) return 1
    if (nb > na) return -1
    if (!Number.isNaN(na) && Number.isNaN(nb)) return 1
    if (Number.isNaN(na) && !Number.isNaN(nb)) return -1
  }
  return 0
}
