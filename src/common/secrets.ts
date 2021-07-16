import { existsSync } from 'fs'
import { terminal } from './debug'
import { ENV } from './no-deps'
import { source } from './zx-enhance'

/**
 * Evaluate secrets, first check if .sops.yaml exists, then source the secrets path - which should exist
 */
export const evaluateSecrets = async (): Promise<void> => {
  const debug = terminal('evaluateSecrets')
  if (!existsSync(`${ENV.DIR}/.sops.yaml`)) {
    debug.log(`Info: The 'secrets.*.yaml files' are not decrypted, because ${ENV.DIR}/.sops.yaml file is not present`)
  }
  const secretPath = `${ENV.DIR}/.secrets`
  try {
    await source(secretPath)
  } catch (error) {
    debug.error('%s\n', `Unable to find the '${secretPath}' file.`, `Continuing without local secrets`)
  }
}

export default evaluateSecrets
