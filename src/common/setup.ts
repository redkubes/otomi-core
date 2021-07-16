import { existsSync, readdirSync } from 'fs'
import { load } from 'js-yaml'
import { fileURLToPath } from 'url'
import { $, nothrow } from 'zx'
import { decrypt } from './crypt'
import { terminal } from './debug'
import { values } from './hf'
import { asBool, BasicArguments, ENV, parser } from './no-deps'
import { evaluateSecrets } from './secrets'
import { askYesNo, source } from './zx-enhance'

const dirname = fileURLToPath(import.meta.url)

let otomiImageTag: string
let otomiCustomerName: string
let otomiK8sVersion: string
const debug = {
  prepEnv: terminal('prepare environment'),
  kubeContext: terminal('Check Kube Context'),
  checkENVdir: terminal('Check ENV Dir'),
  closeInCore: terminal('Close in otomi-core'),
}
/**
 * Check whether the environment matches the configuration for the Kubernetes Context
 * @returns
 */
const checkKubeContext = async (): Promise<void> => {
  if (ENV.isCI) return
  debug.kubeContext.verbose('Validating kube context')

  const envPath = `${ENV.DIR}/env/.env`
  try {
    await source(envPath)
  } catch (error) {
    debug.kubeContext.exit(1, error)
  }

  if (!('K8S_CONTEXT' in process.env)) debug.kubeContext.exit(1, `K8S_CONTEXT is not defined in '${envPath}'`)
  debug.kubeContext.verbose(`Using kube context: ${process.env.K8S_CONTEXT}`)

  // TODO: Consider using the kubernetes-client: https://github.com/kubernetes-client/javascript
  const runningContext = (await nothrow($`kubectl config current-context`)).stdout.trim()
  if (process.env.K8S_CONTEXT !== runningContext) {
    let fixContext = false
    if (!(parser.argv as BasicArguments).setContext) {
      fixContext = await askYesNo(
        `Warning: Your current kubernetes context does not match cluster context: ${process.env.K8S_CONTEXT}. Would you like to switch kube context to cluster first?`,
        { defaultYes: true },
      )
    }
    if (fixContext || (parser.argv as BasicArguments).setContext) {
      await $`kubectl config use ${process.env.K8S_CONTEXT}`
    }
  }
}
/**
 * Check the ENV_DIR parameter and whether or not the folder is populated
 * @returns
 */
const checkENVdir = (): boolean => {
  if (dirname.includes('otomi-core') && !asBool(ENV.DIR)) {
    debug.checkENVdir.exit(1, 'The ENV_DIR environment variable is not set')
  }
  debug.checkENVdir.debug(ENV.DIR)
  return readdirSync(ENV.DIR).length > 0
}
/**
 * Find (recursively) the object mapped under the `id` within the `obj`
 * @param obj
 * @param id
 * @returns
 */
const getNestedObjectValue = (obj: any, id: string): any | undefined => {
  const getObject = (theObject: any, objectId: string): any => {
    let result = null
    if (Array.isArray(theObject)) {
      for (let i = 0; i < theObject.length; i++) {
        result = getObject(theObject[i], objectId)
        if (result) {
          break
        }
      }
    } else {
      /* eslint-disable no-restricted-syntax */
      for (const [key, value] of Object.entries(theObject)) {
        if (key === objectId) {
          return theObject
        }
        if (value instanceof Object || Array.isArray(value)) {
          result = getObject(value, objectId)
          if (result) {
            break
          }
        }
      }
    }
    /* eslint-enable no-restricted-syntax */

    return result
  }
  const myobj: any = getObject(obj, id)
  if (!myobj) return undefined
  return myobj[id]
}

export type PrepareEnvironmentOptions = {
  skipEnvDirCheck?: boolean
  skipEvaluateSecrets?: boolean
  skipKubeContextCheck?: boolean
  skipDecrypt?: boolean
  skipAll?: boolean
}

export const otomi = {
  scriptName: process.env.OTOMI_CALLER_COMMAND ?? 'otomi',
  /**
   * Find the cluster kubernetes version in the values
   * @returns String of the kubernetes version on the cluster
   */
  getK8sVersion: async (): Promise<string> => {
    if (otomiK8sVersion) return otomiK8sVersion
    otomiK8sVersion = getNestedObjectValue(await values(), 'cluster').k8sVersion
    return otomiK8sVersion
  },
  /**
   * Find what image tag is defined in configuration for otomi
   * @returns string
   */
  imageTag: (): string => {
    if (otomiImageTag) return otomiImageTag
    const file = `${ENV.DIR}/env/settings.yaml`
    if (!existsSync(file)) return process.env.OTOMI_TAG ?? 'master'
    const clusterFile = load(file) as any
    otomiImageTag = clusterFile.otomi?.version ?? 'master'
    return otomiImageTag
  },
  /**
   * Find the customer name that is defined in configuration for otomi
   * @returns string
   */
  customerName: (): string => {
    if (otomiCustomerName) return otomiCustomerName
    const file = `${ENV.DIR}/env/settings.yaml`
    const customerFile = load(file) as any
    otomiCustomerName = customerFile.customer?.name
    return otomiCustomerName
  },
  /**
   * Prepare environment when running an otomi command
   */
  prepareEnvironment: async (options?: PrepareEnvironmentOptions): Promise<void> => {
    if (options && options.skipAll) return
    debug.prepEnv.verbose('Checking environment')
    if (!options?.skipEnvDirCheck && checkENVdir()) {
      if (!ENV.isCI && !options?.skipEvaluateSecrets) await evaluateSecrets()
      if (!ENV.isCI && !options?.skipKubeContextCheck) await checkKubeContext()
      if (!ENV.isCI && !options?.skipDecrypt) await decrypt()
    }
  },
  /**
   * If ran within otomi-core, stop execution as it should not be ran within that folder.
   * @param command that is executed
   */
  closeIfInCore: (command: string): void => {
    if (dirname.includes('otomi-core') || ENV.DIR.includes('otomi-core'))
      debug.closeInCore.exit(1, `'otomi ${command}' should not be ran from otomi-core`)
  },
}

/**
 * Cleanup trap on exit - any handler function MUST be synchronous
 * @param handler cleanup function set per command
 */
export const cleanupHandler = (handler: () => any): void => {
  process.on('exit', (code) => {
    handler()
    process.exit(code)
  })
}
