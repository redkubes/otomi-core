import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { cleanupHandler, prepareEnvironment } from 'src/common/cli'
import { logLevelString, terminal } from 'src/common/debug'
import { hf } from 'src/common/hf'
import { getFilename } from 'src/common/utils'
import { HelmArguments, getParsedArgs, helmOptions, setParsedArgs } from 'src/common/yargs'
import { Argv, CommandModule } from 'yargs'

const cmdName = getFilename(__filename)
const dir = '/tmp/otomi'
const appsDir = '/tmp/otomi/apps'
const valuesDir = '/tmp/otomi/values'
const templateFile = `${dir}deploy-template.yaml`

const cleanup = (argv: HelmArguments): void => {
  // if (argv.skipCleanup) return
  // rmdirSync(dir, { recursive: true })
}

const setup = (): void => {
  const argv: HelmArguments = getParsedArgs()
  cleanupHandler(() => cleanup(argv))
  mkdirSync(dir, { recursive: true })
  mkdirSync(appsDir, { recursive: true })
  mkdirSync(valuesDir, { recursive: true })
}

interface HelmRelese {
  name: string
  namespace: string
  enabled: boolean
  installed: boolean
  labels: string
  chart: string
  version: string
}

const getArgocdAppManifest = (release: HelmRelese, values) => {
  return {
    apiVersion: 'argoproj.io/v1alpha1',
    kind: 'Application',
    metadata: {
      name: `${release.namespace}-${release.name}`,
      namespace: 'argocd',
    },
    spec: {
      project: 'default',
      source: {
        path: release.chart,
        repoURL: 'https://github.com/redkubes/otomi-core.git',
        targetRevision: release.version,
        helm: {
          releaseName: release.name,
          values: JSON.stringify(values),
        },
      },
      destination: {
        server: 'https://kubernetes.default.svc',
        namespace: release.namespace,
      },
    },
  }
}

const apply = async (): Promise<void> => {
  const d = terminal(`cmd:${cmdName}:apply`)
  const argv: HelmArguments = getParsedArgs()
  d.info(`Parsing helm releases defined in helmfile.d/`)

  const res = await hf({
    fileOpts: argv.file,
    labelOpts: argv.label,
    logLevel: logLevelString(),
    args: ['--output=json', 'list'],
  })

  d.info(`Writing values for helm releases defined in helmfile.d/`)

  //  # helmfile write-values -l name=team-ns-admin --output-file-template='values/{{.Release.Namespace}}/{{.Release.Name}}.yaml'
  await hf({
    fileOpts: argv.file,
    labelOpts: argv.label,
    logLevel: logLevelString(),
    args: ['write-values', `--output-file-template='${valuesDir}/{{.Release.Namespace}}-{{.Release.Name}}.yaml`],
  })

  // Generate JSON object with all helmfile releases defined in helmfile.d
  const releses: [] = JSON.parse(res.stdout.toString())
  releses.forEach((release: HelmRelese) => {
    const appName = `${release.namespace}-${release.name}`
    d.info(`Generating Argocd Application at ${appName}`)
    const applicationPath = `${appsDir}/${appName}.yaml`
    const valuesPath = `${valuesDir}/${appName}.yaml`
    d.info(`Loading values file from ${valuesPath}`)
    const values = readFileSync(valuesPath)
    const manifest = getArgocdAppManifest(release, values)
    d.info(`Saving Argocd Application at ${applicationPath}`)
    writeFileSync(applicationPath, JSON.stringify(manifest))
  })
}

export const module: CommandModule = {
  command: cmdName,
  describe: 'Apply all, or supplied, k8s resources',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: HelmArguments): Promise<void> => {
    setParsedArgs(argv)
    setup()
    await prepareEnvironment({ skipKubeContextCheck: true })
    await apply()
  },
}
