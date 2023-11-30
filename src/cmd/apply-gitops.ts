import { mkdirSync, rmdirSync, writeFileSync } from 'fs'
import { prepareDomainSuffix } from 'src/common/bootstrap'
import { cleanupHandler, prepareEnvironment } from 'src/common/cli'
import { logLevelString, terminal } from 'src/common/debug'
import { hf } from 'src/common/hf'
import { getFilename } from 'src/common/utils'
import { HelmArguments, getParsedArgs, helmOptions, setParsedArgs } from 'src/common/yargs'
import { ProcessOutputTrimmed } from 'src/common/zx-enhance'
import { Argv, CommandModule } from 'yargs'
import { $ } from 'zx'
import { commit, printWelcomeMessage } from './commit'

const cmdName = getFilename(__filename)
const dir = '/tmp/otomi/'
const templateFile = `${dir}deploy-template.yaml`

const cleanup = (argv: HelmArguments): void => {
  if (argv.skipCleanup) return
  rmdirSync(dir, { recursive: true })
}

const setup = (): void => {
  const argv: HelmArguments = getParsedArgs()
  cleanupHandler(() => cleanup(argv))
  mkdirSync(dir, { recursive: true })
}

const applyGitops = async (): Promise<void> => {
  const d = terminal(`cmd:${cmdName}:applyGitops`)
  const argv: HelmArguments = getParsedArgs()
  d.info('Start apply init')
  await $`kubectl apply -f charts/kube-prometheus-stack/crds --server-side`
  await $`kubectl apply -f charts/tekton-triggers/crds/crds.yaml --server-side`

  const output: ProcessOutputTrimmed = await hf(
    { fileOpts: 'helmfile.tpl/helmfile-init.yaml', args: 'template' },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )
  if (output.exitCode > 0) {
    throw new Error(output.stderr)
  } else if (output.stderr.length > 0) {
    d.error(output.stderr)
  }
  const templateOutput = output.stdout
  writeFileSync(templateFile, templateOutput)
  await $`kubectl apply -f ${templateFile}`
  d.info('Deploying apps that are essential for gitops')
  await hf(
    {
      labelOpts: [...(argv.label || []), 'stage=prep'],
      fileOpts: 'helmfile.d/helmfile-00.init.yaml',
      logLevel: logLevelString(),
      args: ['apply'],
    },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )
  await prepareDomainSuffix()
  await hf(
    {
      fileOpts: 'helmfile.d/helmfile-00.init.yaml',
      logLevel: logLevelString(),
      args: ['apply'],
    },
    { streams: { stdout: d.stream.log, stderr: d.stream.error } },
  )

  await commit()
  await printWelcomeMessage()
  d.info('Otomi bootstrapped. From here Tekton pipeline is listening to changes in the otomi/values repo in gitea')
}

export const module: CommandModule = {
  command: cmdName,
  describe: 'Apply all, or supplied, k8s resources',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: HelmArguments): Promise<void> => {
    setParsedArgs(argv)
    setup()
    await prepareEnvironment({ skipKubeContextCheck: true })
    await applyGitops()
  },
}
