import { config } from 'dotenv'
import { bool, cleanEnv, json, str } from 'envalid'
import { existsSync } from 'fs'

const cleanSpec = {
  CI: bool({ default: false }),
  DEPLOYMENT_NAMESPACE: str({ default: 'default' }),
  ENV_DIR: str({ default: `${process.cwd()}/env` }),
  GCLOUD_SERVICE_KEY: json({ default: undefined }),
  IN_DOCKER: bool({ default: false }),
  KUBE_VERSION_OVERRIDE: str({ default: undefined }),
  NODE_TLS_REJECT_UNAUTHORIZED: bool({ default: true }),
  OTOMI_DEV: bool({ default: false }),
  OTOMI_IN_TERMINAL: bool({ default: true }),
  STATIC_COLORS: bool({ default: false }),
  TEAM_IDS: json({ desc: 'A list of team ids in JSON format' }),
  TESTING: bool({ default: false }),
  TRACE: bool({ default: false }),
  VALUES_INPUT: str({ desc: 'The chart values.yaml file', default: undefined }),
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const cleanEnvironment = () => {
  let pEnv: any = process.env
  // load local .env if we have it, for devs
  let path = `${process.cwd()}/.env`
  if (existsSync(path)) {
    const result = config({ path })
    if (result.error) console.error(result.error)
    pEnv = { ...pEnv, ...result.parsed }
  }
  path = `${pEnv.ENV_DIR}/.secrets`
  if (pEnv.ENV_DIR && existsSync(path)) {
    const result = config({ path })
    if (result.error) console.error(result.error)
    pEnv = { ...pEnv, ...result.parsed }
  }
  return cleanEnv(pEnv, cleanSpec)
}

export const env = cleanEnvironment()

export const isChart = env.CI && !!env.VALUES_INPUT
export const isCli = !env.CI && !isChart
