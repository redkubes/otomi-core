import { bootstrapGit, setIdentity } from 'src/common/bootstrap'
import { prepareEnvironment } from 'src/common/cli'
import { encrypt } from 'src/common/crypt'
import { terminal } from 'src/common/debug'
import { env, isCi } from 'src/common/envalid'
import { hfValues } from 'src/common/hf'
import { waitTillAvailable } from 'src/common/k8s'
import { getFilename } from 'src/common/utils'
import { getRepo } from 'src/common/values'
import { HelmArguments, getParsedArgs, setParsedArgs } from 'src/common/yargs'
import { Argv } from 'yargs'
import { $, cd } from 'zx'
import { Arguments as DroneArgs, genDrone } from './gen-drone'
import { validateValues } from './validate-values'

const cmdName = getFilename(__filename)

interface Arguments extends HelmArguments, DroneArgs {
  m?: string
  message?: string
}

const commitAndPush = async (values: Record<string, any>, branch: string): Promise<void> => {
  const d = terminal(`cmd:${cmdName}:commitAndPush`)
  d.info('Committing values')
  const argv = getParsedArgs()
  const message = isCi ? 'updated values [ci skip]' : argv.message || 'otomi commit'
  cd(env.ENV_DIR)
  try {
    await $`git add -A`
    await $`git commit -m ${message} --no-verify`
  } catch (e) {
    d.log('Could not commit. Did you make any changes?')
    return
  }
  if (values._derived?.untrustedCA) process.env.GIT_SSL_NO_VERIFY = '1'
  d.log('git config:')
  await $`cat .git/config`
  await $`git push -u origin ${branch}`
  d.log('Successfully pushed the updated values')
}

export const commit = async (): Promise<void> => {
  const d = terminal(`cmd:${cmdName}:commit`)
  await validateValues()
  d.info('Preparing values')
  const values = (await hfValues()) as Record<string, any>
  // we call this here again, as we might not have completed (happens upon first install):
  await bootstrapGit(values)
  const { username, password, remote, branch } = getRepo(values)
  // lets wait until the remote is ready
  if (values?.apps!.gitea!.enabled ?? true) {
    await waitTillAvailable(remote, {
      status: 200,
      skipSsl: values._derived?.untrustedCA,
      username,
      password,
    })
  }
  // continue
  await genDrone()
  await encrypt()
  await commitAndPush(values, branch)
}

export const cloneOtomiChartsInGitea = async (): Promise<void> => {
  const d = terminal(`cmd:${cmdName}:gitea-otomi-charts`)
  d.info('Cloning otomi-charts in Gitea')
  const values = (await hfValues()) as Record<string, any>
  const { email, username, password } = getRepo(values)
  const workDir = '/tmp/otomi-charts'
  const otomiChartsUrl = env.OTOMI_CHARTS_URL
  const giteaChartsUrl = `https://${username}:${password}@gitea.${values.cluster.domainSuffix}/otomi/charts.git`
  try {
    await $`mkdir ${workDir}`
    await $`git clone --depth 1 ${otomiChartsUrl} ${workDir}`
    cd(workDir)
    await $`rm -rf .git`
    await $`git init`
    await setIdentity(username, password, email)
    await $`git checkout -b main`
    await $`git add .`
    await $`git commit -m "first commit"`
    await $`git remote add origin ${giteaChartsUrl}`
    await $`git config http.sslVerify false`
    await $`git push -u origin main`
  } catch (error) {
    d.info('CloneOtomiChartsInGitea Error:', error)
  }
  d.info('Cloned otomi-charts in Gitea')
}

export const printWelcomeMessage = async (): Promise<void> => {
  const d = terminal(`cmd:${cmdName}:commit`)
  const values = (await hfValues()) as Record<string, any>
  const credentials = values.apps.keycloak
  const message = `
    ########################################################################################################################################
    #
    #  To start using Otomi, go to https://otomi.${values.cluster.domainSuffix} and sign in to the web console
    #  with username "${credentials.adminUsername}" and password "${credentials.adminPassword}".
    #
    ########################################################################################################################################`
  d.info(message)
}

export const module = {
  command: cmdName,
  describe: 'Wrapper that validates values, generates the Drone pipeline and then commits and pushes changed files',
  builder: (parser: Argv): Argv =>
    parser.options({
      message: {
        alias: ['m'],
        type: 'string',
        hidden: true,
        describe: 'Commit message',
      },
    }),
  handler: async (argv: Arguments): Promise<void> => {
    setParsedArgs(argv)
    await prepareEnvironment({ skipKubeContextCheck: true })
    await commit()
  },
}
