import { readFileSync, rmSync } from 'fs'
import { mkdir, writeFile } from 'fs/promises'
import { loadAll } from 'js-yaml'
import { cleanupHandler, prepareEnvironment } from 'src/common/cli'
import { terminal } from 'src/common/debug'
import { hfTemplate } from 'src/common/hf'
import { getFilename, readdirRecurse, rootDir } from 'src/common/utils'
import { getK8sVersion } from 'src/common/values'
import { BasicArguments, HelmArguments, getParsedArgs, helmOptions, setParsedArgs } from 'src/common/yargs'
import tar from 'tar'
import { Argv } from 'yargs'
import { $, cd, chalk, nothrow } from 'zx'

const cmdName = getFilename(__filename)

const schemaOutputPath = '/tmp/otomi/kubernetes-json-schema'
const outputPath = '/tmp/otomi/generated-crd-schemas'
const k8sResourcesPath = '/tmp/otomi/generated-manifests'

let k8sVersion: string
let vk8sVersion: string

const cleanup = (argv: BasicArguments): void => {
  if (argv.skipCleanup) return
  rmSync(schemaOutputPath, { recursive: true, force: true })
  rmSync(outputPath, { recursive: true, force: true })
  rmSync(k8sResourcesPath, { recursive: true, force: true })
}

const setup = async (argv: HelmArguments): Promise<void> => {
  cleanupHandler(() => cleanup(argv))

  k8sVersion = getK8sVersion(argv)
  vk8sVersion = `v${k8sVersion}`

  let prep: Promise<any>[] = []
  prep.push(mkdir(`${schemaOutputPath}/${vk8sVersion}-standalone`, { recursive: true }))
  prep.push(mkdir(outputPath, { recursive: true }))
  prep.push(mkdir(k8sResourcesPath, { recursive: true }))
  await Promise.allSettled(prep)

  prep = []

  prep.push(
    tar.x({
      file: `schemas/${vk8sVersion}-standalone.tar.gz`,
      C: `${schemaOutputPath}/`,
    }),
  )

  prep.push(
    tar.x({
      file: `schemas/generated-crd-schemas.tar.gz`,
      C: `${schemaOutputPath}/${vk8sVersion}-standalone`,
    }),
  )

  await Promise.allSettled(prep)
}

type crdSchema = {
  filename: string
  schema: {
    description: string
    properties: string
    required: string[]
    title: string
    type: string
    $schema: string
    'x-kubernetes-group-version-kind.group': string
    'x-kubernetes-group-version-kind.kind': string
    'x-kubernetes-group-version-kind.version': string
  }
}

const processCrd = (path: string): crdSchema[] => {
  const d = terminal(`cmd:${cmdName}:processCrd`)
  d.debug('Processing CRD file: ', path)

  const documents: any[] = loadAll(readFileSync(path, 'utf-8')).filter(
    (singleDoc: any) => singleDoc?.kind === 'CustomResourceDefinition',
  )

  const documentResult = documents.flatMap((document: any) => {
    const versions = document.spec.versions ?? [{ name: document.spec.version }]
    const versionSchema = versions.flatMap((version: any) => {
      const vers = version.name
      const schema = version.schema ?? document?.spec?.validation
      return {
        filename: `${(document.spec.names.kind as string).toLowerCase()}-${
          document.spec.group.split('.')[0]
        }-${vers}.json`,
        schema: {
          description: schema?.openAPIV3Schema?.description ?? '',
          properties: schema?.openAPIV3Schema?.properties,
          required: schema?.openAPIV3Schema?.required ?? [],
          title: document.metadata.name,
          type: 'object',
          $schema: 'http://json-schema.org/draft/2019-09/schema#',
          'x-kubernetes-group-version-kind.group': document.spec.group,
          'x-kubernetes-group-version-kind.kind': document.spec.names.kind,
          'x-kubernetes-group-version-kind.version': vers,
        },
      }
    })
    return versionSchema
  })
  return documentResult
}

const processCrdWrapper = async (argv: BasicArguments) => {
  const d = terminal(`cmd:${cmdName}:processCrdWrapper`)
  d.log(`Generating k8s ${k8sVersion} manifests`)
  await hfTemplate(argv, `${k8sResourcesPath}/${vk8sVersion}`)

  d.log('Processing CRD files...')
  cd(rootDir)
  const chartsFiles = await readdirRecurse('charts')
  const crdFiles = chartsFiles.filter((val: string) => val.match(/(?<!\/templates)\/crds\/.*\.yaml/g))
  const results = await Promise.all(crdFiles.flatMap((crdFile: string): crdSchema[] => processCrd(crdFile)))

  const prep: Promise<any>[] = []

  prep.push(writeFile(`${outputPath}/all.json`, JSON.stringify(results)))

  prep.push(
    ...results.map(async (val: any) =>
      writeFile(`${schemaOutputPath}/${vk8sVersion}-standalone/${val.filename}`, JSON.stringify(val.schema)),
    ),
  )
  await Promise.all(prep)
}

export const validateTemplates = async (): Promise<void> => {
  const d = terminal(`cmd:${cmdName}:validateTemplates`)
  const argv: HelmArguments = getParsedArgs()
  await setup(argv)
  await processCrdWrapper(argv)
  const constraintKinds = [
    'PspAllowedRepos',
    'BannedImageTags',
    'ContainerLimits',
    'PspAllowedUsers',
    'PspHostFilesystem',
    'PspHostNetworkingPorts',
    'PspPrivileged',
    'PspApparmor',
    'PspCapabilities',
    'PspForbiddenSysctls',
    'PspHostSecurity',
    'PspSeccomp',
    'PspSelinux',
  ]
  // TODO: revisit these excluded resources and see it they exist now (from original sh script)
  const skipKinds = ['CustomResourceDefinition', ...constraintKinds]
  const skipFilenames = ['crd', 'constraint', 'knative-operator', 'buildpack', 'docker', 'git-clone', 'kaniko']

  d.log('Validating resources')
  const verbose = argv.verbose ? ['-verbose'] : []
  d.info(`Schema Output Path: ${schemaOutputPath}`)
  d.info(`Skip kinds: ${skipKinds.join(', ')}`)
  d.info(`Skip Filenames: ${skipFilenames.join(', ')}`)
  d.info(`K8S Resource Path: ${k8sResourcesPath}`)
  d.info(`Schema location: file://${schemaOutputPath}`)
  const kubevalOutput = await nothrow(
    $`kubeconform ${verbose} -skip ${skipKinds.join(',')} -ignore-filename-pattern ${skipFilenames.join(
      '|',
    )} -schema-location ${schemaOutputPath}/${vk8sVersion}-standalone/{{.ResourceKind}}{{.KindSuffix}}.json ${k8sResourcesPath}`,
  )

  let passCount = 0
  let warnCount = 0
  let errCount = 0
  let prev = ''
  ;`${kubevalOutput.stdout}\n${kubevalOutput.stderr}`.split('\n').forEach((x) => {
    if (x === '') return
    const [left, right] = x.split(' - ')
    const k = left ? left.trim() : ''
    const v = right ? right.trim() : ''
    switch (k) {
      case 'PASS':
        passCount += 1
        break
      case 'WARN':
        warnCount += 1
        d.warn(`${chalk.yellowBright('WARN')}: %s`, v)
        break
      case 'ERR':
        errCount += 1
        d.error(`${chalk.redBright('INFO')}: %s`, prev)
        d.error(`${chalk.redBright('ERR')}: %s`, v)
        break
      default:
        break
    }
    prev = x
  })
  d.info(`${chalk.greenBright('TOTAL PASS')}: %s`, `${passCount} files`)
  d.info(`${chalk.yellowBright('TOTAL WARN')}: %s`, `${warnCount} files`)
  d.info(`${chalk.redBright('TOTAL ERR')}: %s`, `${errCount} files`)

  if (kubevalOutput.exitCode !== 0) {
    throw new Error(`Template validation FAILED: ${kubevalOutput.exitCode}`)
  } else d.log('Template validation SUCCESS')
}

export const module = {
  command: cmdName,
  describe: 'Validate generated manifests against supported k8s versions/CRDs and best practices',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: BasicArguments): Promise<void> => {
    setParsedArgs(argv)
    await prepareEnvironment({ skipKubeContextCheck: true })
    await validateTemplates()
  },
}
