# How to use the new otomi cli

```sh
# In the otomi-core directory
export DOCKER_TAG=binzx
docker build --target prod -t otomi/core:binzx .
./binzx/otomi <commands here>
```

# How to develop the new otomi cli

```sh
# Run the above mentioned commands
# Don't forget the following:
npm install --save-dev
npm run compile:watch &

./binzx/otomi <commands here>
```

# TODO:

## Commands

| Done? | Command                                                      |
| :---: | ------------------------------------------------------------ |
|  ❓   | apply                                                        |
|  ✅   | bash                                                         |
|  🟥   | bats // Do we even need BATS? If we have JS? Probably not... |
|  ✅   | bootstrap                                                    |
|  ✅   | checkPolicies                                                |
|  ✅   | commit                                                       |
|  🟥   | console as otomiConsole                                      |
|  ✅   | decrypt                                                      |
|  ❓   | destroy                                                      |
|  ✅   | diff                                                         |
|  ✅   | encrypt                                                      |
|  ✅   | genDrone                                                     |
|  ✅   | hf                                                           |
|  ✅   | lint                                                         |
|  ✅   | pull                                                         |
|  ✅   | regCred                                                      |
|  ✅   | rotateKeys                                                   |
|  ✅   | scoreTemplates                                               |
|  ✅   | sync                                                         |
|  ✅   | template                                                     |
|  ✅   | test                                                         |
|  ✅   | validateTemplates                                            |
|  ✅   | validateValues                                               |
|  ✅   | values                                                       |
|  ✅   | x                                                            |

23/0/0/2 Done/Started/To-Do/Won't Do
`apply` & `destroy` needs to be tested in live environment, not 100% sure it will work

## Shell scripts

| Done? | Command                            |
| :---: | ---------------------------------- |
|  🟨   | bin/aliases                        |
|  ✅   | bin/bootstrap.sh                   |
|  ⬜   | bin/build-constraints.sh           |
|  ⬜   | bin/check-console.sh               |
|  ✅   | bin/check-policies.sh              |
|  ⬜   | bin/ci-test.sh                     |
|  🟥   | bin/colors.sh #Using chalk package |
|  ⬜   | bin/common-modules.sh              |
|  ✅   | bin/common.sh                      |
|  ⬜   | bin/create-pull-keys.sh            |
|  ✅   | bin/crypt.sh                       |
|  ✅   | bin/deploy.sh                      |
|  ✅   | bin/destroy.sh                     |
|  ✅   | bin/gen-demo-mtls-cert-secret.sh   |
|  ✅   | bin/gen-drone.sh                   |
|  ⬜   | bin/gen-ssh-key.sh                 |
|  🟥   | bin/get-team-kubeconf.sh           |
|  ✅   | bin/gitea-push.sh                  |
|  ⬜   | bin/job-presync.sh                 |
|  ✅   | bin/otomi                          |
|  ✅   | bin/pre-commit.sh                  |
|  ✅   | bin/regcred.sh                     |
|  ⬜   | bin/serve-handler.sh               |
|  ⬜   | bin/server.sh                      |
|  ⬜   | bin/skeleton-chart.sh              |
|  ⬜   | bin/test.sh                        |
|  ✅   | bin/validate-templates.sh          |
|  ✅   | bin/validate-values                |
|       |                                    |
|  ⬜   | bin/hooks/pre-commit               |
|  --   | -------------------------------    |
|  🟥   | bin/tests/ # These are BATS tests  |
|  --   | -------------------------------    |
|  ⬜   | bin/upgrades/adopt-by-helm.sh      |
|  ⬜   | bin/upgrades/v0.10.sh              |

## General tasks

| Done? | Task                        |
| :---: | --------------------------- |
|  ✅   | Implement cleanup functions |
|  ✅   | Upgrade node to non-LTS     |
|  ⬜   | Use a git package for node? |
|  ✅   | Validate against linters    |
