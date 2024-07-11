# How to use the new otomi cli

```sh
# In the apl-core directory
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
|  ✅   | apply                                                        |
|  ✅   | bash                                                         |
|  🟥   | bats // Do we even need BATS? If we have JS? Probably not... |
|  ✅   | bootstrap                                                    |
|  ✅   | checkPolicies                                                |
|  ✅   | commit                                                       |
|  🟥   | console as otomiConsole                                      |
|  ✅   | decrypt                                                      |
|  ✅   | destroy                                                      |
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

| Done? | Command                         |
| :---: | ------------------------------- |
|  🟨   | bin/aliases                     |
|  ⬜   | bin/build-constraints.sh        |
|  ⬜   | bin/job-presync.sh              |
|       |                                 |
|  ⬜   | bin/hooks/pre-commit            |
|  --   | ------------------------------- |
|  ⬜   | bin/upgrades/adopt-by-helm.sh   |
|  ⬜   | bin/upgrades/v0.10.sh           |

## General tasks

| Done? | Task                        |
| :---: | --------------------------- |
|  ⬜   | Use a git package for node? |
