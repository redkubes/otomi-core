import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'fs'
import { copy } from 'fs-extra'
import { copyFile } from 'fs/promises'
import { Argv } from 'yargs'
import { $ } from 'zx'
import { OtomiDebugger, terminal } from '../common/debug'
import { BasicArguments, ENV, loadYaml } from '../common/no-deps'
import { cleanupHandler, otomi } from '../common/setup'
import { genSops } from './gen-sops'

const fileName = 'bootstrap'
let debug: OtomiDebugger

export type Arguments = BasicArguments

/* eslint-disable no-useless-return */
const cleanup = (argv: Arguments): void => {
  if (argv['skip-cleanup']) return
}
/* eslint-enable no-useless-return */

const setup = (argv: Arguments): void => {
  if (argv._[0] === fileName) cleanupHandler(() => cleanup(argv))
  debug = terminal(fileName)
}

const rollBack = (): void => {
  const dirContent = readdirSync(ENV.DIR)
  dirContent.map((item) => rmSync(item, { recursive: true }))
}

const generateLooseSchema = (currDir: string) => {
  const schemaPath = '.vscode/values-schema.yaml'
  const targetPath = `${ENV.DIR}/${schemaPath}`
  const sourcePath = `${currDir}/values-schema.yaml`

  const valuesSchema = loadYaml(sourcePath)
  const trimmedVS = JSON.stringify(valuesSchema, (k, v) => (k === 'required' ? undefined : v), 2)
  writeFileSync(targetPath, trimmedVS)
  if (currDir !== '/home/app/stack' && !existsSync(`${currDir}/${schemaPath}`))
    writeFileSync(`${currDir}/.values/values-schema.yaml`, trimmedVS)
  debug.verbose(`Stored YAML schema at: ${targetPath}`)
}

export const bootstrap = async (argv: Arguments): Promise<void> => {
  const args = { ...argv }
  setup(args)

  const currDir = ENV.PWD

  const secretsFile = `${ENV.DIR}/.secrets`
  const hasOtomi = existsSync(`${ENV.DIR}/bin/otomi`)

  const binPath = `${ENV.DIR}/bin`
  mkdirSync(binPath, { recursive: true })
  const otomiImage = `otomi/core:${otomi.imageTag()}`
  debug.verbose(`Intalling artifacts from ${otomiImage}`)

  await Promise.allSettled([
    copyFile(`${currDir}/bin/aliases`, `${binPath}/aliases`),
    copyFile(`${currDir}/binzx/otomi`, `${binPath}/otomi`),
  ])
  debug.verbose('Copied bin files')
  debug.verbose(currDir)
  try {
    mkdirSync(`${ENV.DIR}/.vscode`, { recursive: true })
    await copy(`${currDir}/.values/.vscode`, `${ENV.DIR}/.vscode`, { overwrite: false, recursive: true })
    debug.verbose('Copied vscode folder')
    generateLooseSchema(currDir)
    debug.verbose('Generated loose schema')
  } catch (error) {
    debug.error(error)
    debug.exit(1, `Could not copy from ${currDir}/.values/.vscode`)
  }

  await Promise.allSettled(
    ['.gitattributes', '.secrets.sample']
      .filter((val) => !existsSync(`${ENV.DIR}/${val.replace(/\.sample$/g, '')}`))
      .map(async (val) => copyFile(`${currDir}/.values/${val}`, `${ENV.DIR}/${val}`)),
  )

  await Promise.allSettled(
    ['.gitignore', '.prettierrc.yml', 'README.md'].map(async (val) =>
      copyFile(`${currDir}/.values/${val}`, `${ENV.DIR}/${val}`),
    ),
  )
  if (!existsSync(`${ENV.DIR}/env`)) {
    debug.log(`Copying basic values`)
    await copy(`${currDir}/.values/env`, ENV.DIR, { overwrite: false, recursive: true })
  }
  await $`git init ${ENV.DIR}`
  copyFileSync(`${currDir}/bin/hooks/pre-commit`, `${ENV.DIR}/.git/hooks/pre-commit`)

  try {
    await genSops({ ...argv, dryRun: false }, { skipAll: true })
  } catch (error) {
    debug.error(error.message)
  }
  if (process.env.GCLOUD_SERVICE_KEY?.length) {
    writeFileSync(`${ENV.DIR}/gcp-key.json`, JSON.stringify(JSON.parse(process.env.GCLOUD_SERVICE_KEY), null, 2))
  }

  const secretsFileEnv = `${ENV.DIR}/env/secrets.settings.yaml`
  if (existsSync(secretsFile)) {
    const secretsContent = loadYaml(secretsFileEnv)
    if (secretsContent?.otomi?.pullSecret?.length) {
      debug.log('Copying Otomi Console Setup')
      mkdirSync(`${ENV.DIR}/docker-compose`, { recursive: true })
      await copy(`${currDir}/docker-compose`, `${ENV.DIR}/docker-compose`, { overwrite: true, recursive: true })
      await Promise.allSettled(
        ['core.yaml', 'docker-compose.yml'].map((val) => copyFile(`${currDir}/${val}`, `${ENV.DIR}/${val}`)),
      )
    }
  }
  if (!hasOtomi) {
    debug.log('You can now use the otomi CLI')
    debug.log('Start by sourcing aliases:')
    debug.log('. bin/aliases')
  }
  debug.log(`Done Bootstrapping`)
}

export const module = {
  command: fileName,
  describe: "Bootstrap values repo with artifacts corresponding to the cluster's stack version",
  builder: (parser: Argv): Argv => parser,
  handler: async (argv: Arguments): Promise<void> => {
    ENV.PARSED_ARGS = argv
    try {
      await bootstrap(argv)
    } catch (error) {
      debug.error('Error occurred, rolling back')
      rollBack()
      debug.exit(1, error)
    }
  },
}

export default module
