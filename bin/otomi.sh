#/usr/bin/env bash
#####################################################################################
##
## NOTE:
## This is a command line tool to operate on otomi-stack.
## All commands and executed in docker container.
## Keep this file as simple as possible:
## - do not depend on any external files.
## - do not use any non standard tooling.
## - only Docker is needed to run otomi-stack image
## If you need to use any extra binaries then most probably you want to run as a part of otomi-stack image.
##
#####################################################################################
set -e
command=$1

# VERBOSE - export this varibale to run this script in verbose mode
VERBOSE=0
# MOUNT_TMP_DIR - export this varaibale to mount yout /tmp directory
MOUNT_TMP_DIR=0

# set_kube_context - a flag to indicate to use kube context and to refresh kube access token before running command in docker
set_kube_context=1
# A path to directory with values directory
env_dir=$PWD

mount_stack_dir=0
stack_dir='/home/app/stack'
otomi_image=''
docker_terminal_params=''
helm_config=''


function set_helm_config {
  helm_config="$HOME/.config/helm"
  uname -a | grep -i darwin >/dev/null && helm_config="$HOME/Library/Preferences/helm"
  return 0
}

function show_usage {
  echo "The $0 usage:
    aws - run CLI AWS
    az - run CLI for Azure
    bash - run interactive bash
    deploy - execute otomi-stack deploy script
    decrypt - decrypt values to env/*.dec files
    encrypt - encrypt values encrypt all env/*.dec files
    eksctl - run CLI for Amazon EKS
    exec - execute custom command
    gcloud - run CLI for Google Cloud
    helm - run helm
    helmfile - run helmfile with selected environment <CLOUD>-<CLUSTER>
    helmfile-raw - run helmfile without any additional parameters
    helmfile-values - show merged values 
    helmfile-template - run helmfile template
    helmfile-template-quiet - run helmfile template (only print yaml documents)
    help - print this help
    install-git-hooks - set pre-commit and post-merge git hooks
    install-drone-pipelines - create drone configuration file at env/<CLOUD>/.drone.<CLUSTER>.yml file
    kubectl - run kubectl
  "
}

function set_k8s_context {
  local env_sh_path="${env_dir}/env/${CLOUD}/${CLUSTER}.sh"
  [ ! -f $env_sh_path ] && echo "Error: The file '${env_sh_path}' does not exist" && exit 1
  source $env_sh_path
  [[ -z "$K8S_CONTEXT" ]] && echo "Error: The K8S_CONTEXT env is not defined in $env_sh_path" && exit 1
  return 0
}

function use_k8s_context {
  kubectl config use-context $K8S_CONTEXT > /dev/null
  return 0
}

function set_env_ini {
  local init_path=$env_dir/env.ini
  [ ! -f $init_path ] && echo "Error: The file '${init_path}' does not exist" && exit 1
  source $init_path
  local version
  eval "version=\$${CLUSTER}Version"
  [[ -z "$version" ]] && echo "Error: Unable to evaluate '${CLUSTER}Version' variable from $init_path" && exit 1
  [[ -z "$customer" ]] && echo "Error: Unable to evaluate 'customer' variable from $init_path" && exit 1

  otomi_image="eu.gcr.io/otomi-cloud/otomi-stack:${version}"
  return 0
}

validate_required_env() {
  [[ -z "$CLOUD" ]] && echo "Error: The CLOUD environment variable is not set" && exit 2
  [[ -z "$CLUSTER" ]] && echo "Error: The CLUSTER environment variable is not set" && exit 2
  [[ -z "$GCLOUD_SERVICE_KEY" ]] && echo "Error: The GCLOUD_SERVICE_KEY environment variable is not set" && exit 2
  return 0
}

function drun() {
  local command=$@
  local tmp_volume=''
  local stack_volume=''
  
  # execute any kubectl command to refresh access token
  if [ $set_kube_context -eq 1 ]; then
    set_k8s_context
    use_k8s_context
    kubectl version >/dev/null
  fi

  if [ $MOUNT_TMP_DIR -eq 1 ]; then
    tmp_volume=" -v /tmp:/tmp"
  fi

  if [ $mount_stack_dir -eq 1 ]; then
    stack_volume="-v ${stack_dir}:${stack_dir}"
  fi

  if [ $VERBOSE -eq 1 ]; then
    echo "Command: $command"
    verbose_env
  fi

  docker run $docker_terminal_params --rm \
    $tmp_volume \
    -v ${HOME}/.kube/config:/home/app/.kube/config \
    -v ${helm_config}:/home/app/.config/helm \
    -v ${HOME}/.config/gcloud:/home/app/.config/gcloud \
    -v ${HOME}/.aws:/home/app/.aws \
    -v ${HOME}/.azure:/home/app/.azure \
    -v ${env_dir}:${stack_dir}/env \
    $stack_volume \
    -e CUSTOMER="$customer" \
    -e CLOUD="$CLOUD" \
    -e GCLOUD_SERVICE_KEY="$GCLOUD_SERVICE_KEY" \
    -e CLUSTER="$CLUSTER" \
    -e K8S_CONTEXT="$K8S_CONTEXT" \
    -w $stack_dir \
    $otomi_image \
    $command
}

function execute {
  while :
  do 
    case $command in
    helm)
      drun helm "${@:2}"
      break
      ;;
    helmfile)
      drun helmfile -e ${CLOUD}-$CLUSTER "${@:2}" --skip-deps
      break
      ;;
    helmfile-raw)
      drun helmfile "${@:2}"
      break
      ;;
    helmfile-values)
      drun helmfile -f helmfile.tpl/helmfile-dump.yaml build
      break
      ;;
    helmfile-template)
      drun helmfile -e ${CLOUD}-$CLUSTER "${@:2}" template --skip-deps
      break
      ;;
    helmfile-template-quiet)
      drun helmfile -e ${CLOUD}-$CLUSTER --quiet "${@:2}" template --skip-deps | grep --color=auto --exclude-dir=.cvs --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn -vi skipping | grep --color=auto --exclude-dir=.cvs --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn -vi "helmfile-"
      break
      ;;
    aws)
      set_kube_context=0
      drun aws "${@:2}"
      break
      ;;
    az)
      set_kube_context=0
      drun az "${@:2}"
      break
      ;;
    eksctl)
      set_kube_context=0
      drun eksctl "${@:2}"
      break
      ;; 
    gcloud)
      set_kube_context=0
      drun gcloud "${@:2}"
      break
      ;;
    deploy)
      drun bin/deploy.sh
      break
      ;;
    encrypt)
      drun bin/crypt.sh enc
      break
      ;;
    decrypt)
      drun bin/crypt.sh dec
      break
      ;;
    install-git-hooks)
      set_kube_context=0
      drun bin/install-git-hooks.sh
      break
      ;;
    install-drone-pipelines)
      set_kube_context=0
      drun bin/gen-drone.sh
      break
      ;;
    bash)
      docker_terminal_params='-it'
      drun bash
      break
      ;;
    help)
      show_usage
      break
      ;;
    exec)
      drun "${@:2}"
      break
      ;;
    kubectl)
      drun kubectl "${@:2}"
      break
      ;;
    *)
      show_usage
      echo "Error: Unknown command: $@"
      exit 1
      ;;
    esac
  done
}


function verbose_env {
  echo "env_dir=$env_dir"
  echo "stack_dir=$stack_dir"
  echo "helm_config=$helm_config"
  echo "otomi_image=$otomi_image"
  echo "set_kube_context=$set_kube_context"
  echo "K8S_CONTEXT=$K8S_CONTEXT"
}

function set_env_and_stack_dir {
  local cwd=$(basename "$PWD")

  if [[ "$cwd" == 'otomi-stack' ]]; then
    [[ -z "$ENV_DIR" ]] && echo "Error<$0>: The ENV_DIR environment variable is not set" && exit 2
    stack_dir=$PWD
    env_dir=$ENV_DIR
    mount_stack_dir=1
  else
    [[ ! -z "$ENV_DIR" ]] && echo "Error<$0>: The ENV_DIR envirnment shall not be set" && exit 2
  fi
  return 0
}

[[ -z "$command" ]] && echo "Error: Missing command argument" && show_usage && exit 2

validate_required_env
set_env_and_stack_dir
set_env_ini
set_helm_config
execute $@
