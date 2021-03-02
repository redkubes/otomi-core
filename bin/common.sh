#!/usr/local/env bash

# Environment vars
ENV_DIR=${ENV_DIR:-./env}
CLOUD=${CLOUD:-aws}
CLUSTER=${CLUSTER:-demo}

# Common vars
readonly otomi_settings="$ENV_DIR/env/settings.yaml"
readonly otomi_tools_image="otomi/tools:latest"

# Mutliple files vars
readonly clusters_file="$ENV_DIR/env/clusters.yaml"
readonly helmfile_output_hide="(^\W+$|skipping|basePath=|Decrypting)"
readonly helmfile_output_hide_tpl="(^[\W^-]+$|skipping|basePath=|Decrypting)"
readonly replace_paths_pattern="s@../env@${ENV_DIR}@g"

has_docker='false'
if docker --version &>/dev/null; then
  has_docker='true'
fi

# some exit handling for scripts to clean up
exitcode=0
script_message='common.sh'
last_function=-
last_arguments=-
function exit_handler() {
  local x=$?
  last_arguments="$BASH_COMMAND"
  last_function="${FUNCNAME[1]}"
  [ $x -ne 0 ] && exitcode=$x
  if [ $exitcode -eq 0 ]; then
    echo "$script_message SUCCEEDED"
  else
   err "$script_message FAILED"
  fi
  cleanup
  trap 'exit $exitcode' EXIT ERR
  exit $exitcode
}
trap exit_handler EXIT ERR
function cleanup() {
  return 0
}
function abort() {
  cleanup
  trap 'exit 0' EXIT
  exit 0
}
trap abort SIGINT

#####
# https://github.com/google/styleguide/blob/gh-pages/shellguide.md#stdout-vs-stderr
#####
function err() {
  local tab=$'\t'
  local divider="---------------------------"
  printf "%-50s %s\n" "$divider" "$divider ">&2
  printf "%-50s %s\n" \
    "- Time" "[$(date +'%Y-%m-%dT %T.%3N')]" \
    "- Faulty script" "${BASH_SOURCE[${#BASH_SOURCE[@]} - 1]}" \
    "- Last function" "$last_function" \
    "- Last arguments" "$last_arguments" \
    "- Script message (if any)" "$*" \
    >&2
}

function _rind() {
  local cmd="$1"
  shift
  if [[ $has_docker = 'true' && ${IN_DOCKER+0} -eq 0 ]]; then
    docker run --rm \
      -v ${ENV_DIR}:${ENV_DIR} \
      -e CLOUD="$CLOUD" \
      -e IN_DOCKER='1' \
      -e CLUSTER="$CLUSTER" \
      $otomi_tools_image $cmd "$@"
    return $?
  elif command -v $cmd &>/dev/null; then
    command $cmd "$@"
    return $?
  else
    err "Docker is not available and $cmd is not installed locally"
    exit 1
  fi
}

#####
# https://github.com/google/styleguide/blob/gh-pages/shellguide.md#quoting                                                               
#####
function yq() {
  _rind "${FUNCNAME[0]}" "$@"
  return $?
}

function jq() {
  _rind "${FUNCNAME[0]}" "$@"
  return $?
}

function get_k8s_version() {
  yq r $clusters_file "clouds.$CLOUD.clusters.$CLUSTER.k8sVersion"
}

function otomi_image_tag() {
  local otomiVersion=$([ -n "${CLOUD+x}${CLUSTER+x}" ] && yq r $clusters_file "clouds.$CLOUD.clusters.$CLUSTER.otomiVersion")
  [ -n "$otomiVersion" ] && echo $otomiVersion || echo 'latest'
}

function customer_name() {
  yq r $otomi_settings "customer.name"
}

function cluster_env() {
  printf "$CLOUD-$CLUSTER"
}

function hf() {
  helmfile --quiet -e $CLOUD-$CLUSTER "$@"
}

function hf_values() {
  [ -z "$VERBOSE" ] && quiet='--quiet'
  helmfile ${quiet-} -e "$CLOUD-$CLUSTER" -f helmfile.tpl/helmfile-dump.yaml build |
    grep -Ev $helmfile_output_hide |
    sed -e $replace_paths_pattern |
    yq read -P - 'releases[0].values[0]'
}

function prepare_crypt() {
  [ -z "$GCLOUD_SERVICE_KEY" ] && return 0
  GOOGLE_APPLICATION_CREDENTIALS="/tmp/key.json"
  echo $GCLOUD_SERVICE_KEY >$GOOGLE_APPLICATION_CREDENTIALS
  export GOOGLE_APPLICATION_CREDENTIALS
}

function for_each_cluster() {
  executable=$1
  [ -z "$executable" ] && err "The positional argument is not set"
  local clustersPath="$ENV_DIR/env/clusters.yaml"
  clouds=$(yq r -j $clustersPath clouds | jq -rc '.|keys[]')
  for cloud in $clouds; do
    clusters=($(yq r -j $clustersPath clouds.$cloud.clusters | jq -rc '. | keys[]'))
    for cluster in "${clusters[@]}"; do
      CLOUD=$cloud CLUSTER=$cluster $executable
    done
  done
}

function hf_templates_init() {
  local out_dir="$1"
  shift
  [[ $all ]] && hf -f helmfile.tpl/helmfile-init.yaml template --skip-deps --output-dir="$out_dir" >/dev/null 2>&1
  hf $(echo ${label:+"-l $label"} | xargs) template --skip-deps --output-dir="$out_dir" >/dev/null 2>&1
}

#####
# Use OPTIONS/LONGOPTS(LONGOPTIONS) to set additional parameters.                       
# Returns:                                                                              
#    all -> if passed, sets to 'y' and can be used globally in conditional statements  
#    label -> if passed (e.g. label init=true), sets to label (e.g. 'init=true') and   
#             can be used globally in conditional statements                           
# Resources:                                    
# - https://github.com/google/styleguide/blob/gh-pages/shellguide.md#s4.2-function-comments                                        
# - https://stackoverflow.com/a/29754866                                                
#####
function parse_args() {
  if [[ "$*" != "" ]]; then
    ! getopt --test >/dev/null
    if [[ ${PIPESTATUS[0]} -ne 4 ]]; then
      echo '`getopt --test` failed in this environment.'
      exit 1
    fi

    OPTIONS=Al:
    LONGOPTS=all,label:

    # - regarding ! and PIPESTATUS see above
    # - temporarily store output to be able to check for errors
    # - activate quoting/enhanced mode (e.g. by writing out “--options”)
    # - pass arguments only via   -- "$@"   to separate them correctly
    ! PARSED=$(getopt --options=$OPTIONS --longoptions=$LONGOPTS --name "$0" -- "$@")
    if [[ ${PIPESTATUS[0]} -ne 0 ]]; then
      exit 1
    fi
    eval set -- "$PARSED"
    while true; do
      case "$1" in
        -l | --label)
          label=$2
          shift 2
          ;;
        -A | --all)
          all=y
          shift
          ;;
        --)
          shift
          break
          ;;
        *)
          err "Programming error: expected '--' but got $1"
          exit 1
          ;;
      esac
    done
  else
    err "--all or --label not specified"
    exit 1
  fi
}
