import { Argv } from 'yargs'
import { prepareEnvironment } from '../common/cli'
import { terminal } from '../common/debug'
import { hfValues } from '../common/hf'
import { getFilename } from '../common/utils'
import { HelmArguments, helmOptions, setParsedArgs } from '../common/yargs'
import { checkPolicies } from './check-policies'
import { lint } from './lint'
import { validateTemplates } from './validate-templates'
import { validateValues } from './validate-values'

const cmdName = getFilename(__filename)

const d = terminal('test')

const test = async (): Promise<void> => {
  d.log('Running tests against cluster state...')
  await validateValues()
  await lint()
  await validateTemplates()
  const values = await hfValues()
  if (!values!.charts['gatekeeper-operator']!.disableValidatingWebhook) await checkPolicies()
  d.log('Tests OK!')
}

export const module = {
  command: cmdName,
  describe: 'Run tests against the target cluster',
  builder: (parser: Argv): Argv => helmOptions(parser),

  handler: async (argv: HelmArguments): Promise<void> => {
    setParsedArgs(argv)
    await prepareEnvironment({ skipKubeContextCheck: true })
    await test()
  },
}
