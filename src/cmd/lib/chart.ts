import $RefParser from '@apidevtools/json-schema-ref-parser'
import { existsSync } from 'fs'
import { writeFile } from 'fs/promises'
import yaml from 'js-yaml'
import { merge, omit, pick } from 'lodash-es'
import { env } from '../../common/envalid'
import { loadYaml, terminal } from '../../common/utils'
import { extractSecrets } from './gen-secrets'

const debug = terminal('chart')
let hasSops = false

export const mergeFileValues = async (
  targetPath: string,
  newValues: Record<string, unknown>,
  overwrite = true,
): Promise<void> => {
  debug.debug(`targetPath: ${targetPath}, values: ${JSON.stringify(newValues)}`)
  if (!existsSync(targetPath)) {
    // If the targetPath doesn't exist, just create it and write the valueObject in it.
    // It doesn't matter if it is secret or not. and always write in its yaml file
    return writeFile(targetPath, yaml.dump(newValues ?? {}))
  }
  const suffix = targetPath.includes('/secrets.') && hasSops ? '.dec' : ''

  const values = loadYaml(`${targetPath}${suffix}`, { noError: true }) ?? {}
  if (!overwrite) merge(newValues, values)
  merge(values, newValues)
  return writeFile(`${targetPath}${suffix}`, yaml.dump(values))
}

export const getChartValues = (): any | undefined => {
  return env.VALUES_INPUT ? loadYaml(env.VALUES_INPUT) : undefined
}

export const mergeValues = async (values: any, overwrite = true): Promise<void> => {
  hasSops = existsSync(`${env.ENV_DIR}/.sops.yaml`)

  // creating secret files
  const schema = loadYaml('values-schema.yaml')
  const derefSchema = await $RefParser.dereference(schema)
  const cleanSchema = omit(derefSchema, ['definitions', 'properties.teamConfig'])
  const secretsJsonPath = extractSecrets(cleanSchema)
  debug.debug('secretsJsonPath: ', secretsJsonPath)
  const secrets = pick(values, secretsJsonPath)
  // removing secrets
  const plainValues = omit(values, secretsJsonPath) as any
  const fieldsToOmit = ['cluster', 'policies', 'teamConfig', 'charts']
  const secretSettings = omit(secrets, fieldsToOmit)
  const settings = omit(plainValues, fieldsToOmit)

  const promises: Promise<void>[] = []

  if (settings) promises.push(mergeFileValues(`${env.ENV_DIR}/env/settings.yaml`, settings, overwrite))
  if (secretSettings)
    promises.push(mergeFileValues(`${env.ENV_DIR}/env/secrets.settings.yaml`, secretSettings, overwrite))
  // creating non secret files
  if (plainValues.cluster)
    promises.push(mergeFileValues(`${env.ENV_DIR}/env/cluster.yaml`, { cluster: plainValues.cluster }, overwrite))
  if (plainValues.policies)
    promises.push(mergeFileValues(`${env.ENV_DIR}/env/policies.yaml`, { policies: plainValues.policies }, overwrite))

  const plainChartPromises = Object.keys(plainValues.charts || {}).map((chart) => {
    const valueObject = {
      charts: {
        [chart]: plainValues.charts[chart],
      },
    }
    return mergeFileValues(`${env.ENV_DIR}/env/charts/${chart}.yaml`, valueObject, overwrite)
  })
  const secretChartPromises = Object.keys(secrets.charts || {}).map((chart) => {
    const valueObject = {
      charts: {
        [chart]: values.charts[chart],
      },
    }
    return mergeFileValues(`${env.ENV_DIR}/env/charts/secrets.${chart}.yaml`, valueObject, overwrite)
  })

  await Promise.all([...promises, ...secretChartPromises, ...plainChartPromises])

  debug.log('Chart values merged with the bootstrapped values.')
}
