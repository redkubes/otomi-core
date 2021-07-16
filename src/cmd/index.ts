import { CommandModule } from 'yargs'
import applyModule from './apply'
import bashModule from './bash'
import bootstrapModule from './bootstrap'
import checkPoliciesModule from './check-policies'
import commitModule from './commit'
import decryptModule from './decrypt'
import destroyModule from './destroy'
import diffModule from './diff'
import encryptModule from './encrypt'
import genDroneModule from './gen-drone'
import genSopsModule from './gen-sops'
import hfModule from './hf'
import lintModule from './lint'
import playgroundModule from './playground'
import pullModule from './pull'
import regCredModule from './regcred'
import rotateKeysModule from './rotate-keys'
import scoreTemplatesModule from './score-templates'
import serverModule from './server'
import statusModule from './status'
import syncModule from './sync'
import templateModule from './template'
import testModule from './test'
import validateTemplatesModule from './validate-templates'
import validateValuesModule from './validate-values'
import valuesModule from './values'
import xModule from './x'

export { default as apply } from './apply'
export { default as bash } from './bash'
export { default as bootstrap } from './bootstrap'
export { default as checkPolicies } from './check-policies'
export { default as commit } from './commit'
export { default as decrypt } from './decrypt'
export { default as destroy } from './destroy'
export { default as diff } from './diff'
export { default as encrypt } from './encrypt'
export { default as genDrone } from './gen-drone'
export { default as genSops } from './gen-sops'
export { default as hf } from './hf'
export { default as lint } from './lint'
export { default as pull } from './pull'
export { default as regCred } from './regcred'
export { default as rotateKeys } from './rotate-keys'
export { default as scoreTemplates } from './score-templates'
export { default as server } from './server'
export { default as status } from './status'
export { default as sync } from './sync'
export { default as template } from './template'
export { default as test } from './test'
export { default as validateTemplates } from './validate-templates'
export { default as validateValues } from './validate-values'
export { default as values } from './values'
export { default as x } from './x'

export const commands: CommandModule[] = [
  applyModule,
  bashModule,
  bootstrapModule,
  checkPoliciesModule,
  commitModule,
  decryptModule,
  destroyModule,
  diffModule,
  encryptModule,
  genDroneModule,
  genSopsModule,
  hfModule,
  lintModule,
  playgroundModule,
  pullModule,
  regCredModule,
  rotateKeysModule,
  scoreTemplatesModule,
  serverModule,
  statusModule,
  syncModule,
  templateModule,
  testModule,
  validateTemplatesModule,
  validateValuesModule,
  valuesModule,
  xModule,
]
export const defaultCommand: CommandModule | null = null // bootstrapModule
