#!/usr/bin/env bash
set -e
. bin/colors.sh
. bin/aliases
shopt -s expand_aliases

# Environment vars
ENV_DIR=${ENV_DIR:-$PWD}
[ "$ENV_DIR" = '/home/app/stack' ] && ENV_DIR='/home/app/stack/env'
[ -d $ENV_DIR/env/env ] && ENV_DIR=$ENV_DIR/env
if [ "$NODE_ENV" == "test" ]; then
  CI=1
  ENV_DIR="$PWD/tests/fixtures"
fi
[ -n "$VERBOSE" ] && echo "ENV_DIR: $ENV_DIR"

LOG_LEVEL='--log-level warn'

# Common vars
readonly otomi_settings="$ENV_DIR/env/settings.yaml"
readonly otomi_tools_image="otomi/core:latest"
[ $(uname -s) == 'Linux' ] && readonly LINUX_WORKAROUND='--user=root:root'

# Mutliple files vars
readonly helmfile_output_hide="(^\W+$|skipping|basePath=)"
readonly replace_paths_pattern="s@../env@${ENV_DIR}@g"

has_docker='false'
if docker --version &>/dev/null; then
  has_docker='true'
  [ -n "$VERBOSE" ] && echo "has_docker: $has_docker"
fi

function err() {
  echo "[$(date +'%Y-%m-%dT %T.%3N')] ERROR: $*" >&2
  return 0
}

#####
# Use OPTIONS/LONGOPTS(LONGOPTIONS) to set additional parameters.
# Resources:
# - https://github.com/google/styleguide/blob/gh-pages/shellguide.md#s4.2-function-comments
# - https://stackoverflow.com/a/29754866
#####
# skip parsing args for some commands
caller=${1#./}
if [ "$caller" == 'bin/otomi' ] || [[ ! "x bash bats" == *"$1"* ]]; then
  ! getopt --test >/dev/null
  if [[ ${PIPESTATUS[0]} -ne 4 ]]; then
    err '`getopt --test` failed in this environment.'
    exit 1
  fi

  OPTIONS=dtvsp:f:l:
  LONGOPTS=debug,trace,verbose,skip-cleanup,profile:,file:,label:
  ! PARSED=$(getopt --options=$OPTIONS --longoptions=$LONGOPTS --name "$0" -- "$@")
  if [[ ${PIPESTATUS[0]} -ne 0 ]]; then
    exit 1
  fi
  eval set -- "$PARSED"
  while true; do
    case "$1" in
      -d | --debug)
        DEBUG=1
        LOG_LEVEL='--log-level debug'
        shift 1
        ;;
      -t | --trace)
        TRACE=1
        PS4='[\D{%F %T}] $BASH_SOURCE:$LINENO:'
        set -x
        shift 1
        ;;
      -v | --verbose)
        VERBOSE=1
        shift 1
        ;;
      -s | --skip-cleanup)
        SKIP_CLEANUP='--skip-cleanup'
        shift 1
        ;;
      -p | --profile)
        PROFILE=$2
        shift 2
        ;;
      -f | --file)
        FILE_OPT="$FILE_OPT -f $2"
        shift 2
        ;;
      -l | --label)
        LABEL_OPT="$LABEL_OPT -l $2"
        shift 2
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
fi

function _rind() {
  local cmd="$1"
  shift
  if [ $has_docker = 'true' ] && [ "${IN_DOCKER,,}" == "true" ]; then
    docker run --rm \
      $LINUX_WORKAROUND \
      -v $ENV_DIR:$ENV_DIR \
      -e ENV_DIR=$ENV_DIR \
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

function yqr() {
  local all_values=$(hf_values)
  local ret=$(echo "$all_values" | yq "$@" -)
  [ -z "$ret" ] && return 1
  echo $ret
}

function jq() {
  _rind "${FUNCNAME[0]}" "$@"
  return $?
}

function get_k8s_version() {
  yqr "cluster.k8sVersion"
}

function otomi_image_tag() {
  local otomi_version=$OTOMI_VERSION
  [ -z "$otomi_version" ] && [ -f $otomi_settings ] && otomi_version=$(yq '.otomi.version' $otomi_settings)
  [ -z "$otomi_version" ] && otomi_version=$(cat $PWD/package.json | jq -r .version)
  [ -z "$otomi_version" ] && otomi_version='main'
  echo $otomi_version
}

function customer_name() {
  [ -f $otomi_settings ] && yq 'customer.name' $otomi_settings && return 0
  [ -n "$CI" ] && return 0
  return 1
}

function rotate() {
  cd $ENV_DIR/env >/dev/null
  find . -type f -name 'secrets.*.yaml' -exec bash -c "sops --input-type=yaml --output-type yaml -r {} > {}" \;
  cd - >/dev/null
}

function pushd() {
  command pushd "$@" >/dev/null
}

function popd() {
  command popd "$@" >/dev/null
}

function crypt() {
  if [ ! -f "$ENV_DIR/.sops.yaml" ]; then
    [ -n "$VERBOSE" ] && echo "No .sops.yaml found so skipping crypt action"
    return 0
  fi
  if [ -n "$GCLOUD_SERVICE_KEY" ]; then
    GOOGLE_APPLICATION_CREDENTIALS="/tmp/key.json"
    echo $GCLOUD_SERVICE_KEY >$GOOGLE_APPLICATION_CREDENTIALS
    export GOOGLE_APPLICATION_CREDENTIALS=$GOOGLE_APPLICATION_CREDENTIALS
  fi
  command=${1:-'dec'}
  [ "$*" != "" ] && shift
  files="$*"
  local out='/dev/stdout'
  [ -z "$VERBOSE" ] && out='/dev/null'
  [ -z "$files" ] && files=$(find $ENV_DIR/env -type f -name 'secrets.*.yaml')
  pushd $ENV_DIR
  for file in $files; do
    if [ "$command" = 'enc' ]; then
      # somehow sops does not treat encryption with the same grace as decryption, and disregards timestamps
      # so we check those and only encrypt when there is a change found in the .dec file
      sec_diff=0
      if [ -f $file.dec ]; then
        [ -n "$VERBOSE" ] && echo "Found decrypted $file.dec. Calculating diff..."
        sec_diff=$(expr $(stat -c %Y $file.dec) - $(stat -c %Y $file))
        [ -n "$VERBOSE" ] && echo "Found timestamp diff in seconds: $sec_diff"
      fi
      if [ ! -f $file.dec ] || [ $sec_diff -gt 1 ]; then
        helm secrets enc $file >$out
        ts=$(stat -c %Y $file)
        chek_ts=$(expr $ts + 1)
        touch -d @$chek_ts $file.dec
        [ -n "$VERBOSE" ] && echo "Set timestamp of decrypted file to that of source file: $chek_ts"
      else
        [ -n "$VERBOSE" ] && echo "Skipping encryption for $file as it is not changed."
      fi
    else
      if helm secrets dec $file >$out; then
        # we correct timestamp of decrypted file to match source file,
        # in order to detect changes for conditional encryption
        [ -n "$VERBOSE" ] && echo "Setting timestamp of decrypted file to that of source file."
        ts=$(stat -c %Y $file)
        chek_ts=$(expr $ts + 1)
        touch -d @$chek_ts $file.dec
        [ -n "$VERBOSE" ] && echo "Set timestamp of decrypted file to that of source file: $chek_ts"
      fi
    fi
  done
  popd
  unset GOOGLE_APPLICATION_CREDENTIALS
}

function hf() {
  # [ -n "$KUBE_VERSION_OVERRIDE" ] && args="--set kubeVersionOverride=${KUBE_VERSION_OVERRIDE}"
  helmfile $FILE_OPT $LABEL_OPT $LOG_LEVEL "$@" $args
}

function hf_values() {
  hf -f helmfile.tpl/helmfile-dump.yaml build |
    grep -Ev $helmfile_output_hide |
    sed -e $replace_paths_pattern |
    yq '.renderedvalues' -
}

function hf_template() {
  QUIET=1
  if [ -n "$1" ]; then
    local out_dir="$1"
    [ -z "$FILE_OPT" ] && [ -z "$LABEL_OPT" ] && hf -f helmfile.tpl/helmfile-init.yaml template --skip-deps --output-dir="$out_dir" $SKIP_CLEANUP >/dev/null
    hf template --skip-deps --output-dir="$out_dir" $SKIP_CLEANUP >/dev/null
  else
    [ -z "$FILE_OPT" ] && [ -z "$LABEL_OPT" ] && hf -f helmfile.tpl/helmfile-init.yaml template --skip-deps $SKIP_CLEANUP
    hf template --skip-deps $SKIP_CLEANUP
  fi
}

function helm_adopt() {
  release=$1
  kind=$2
  name=$3
  namespace=$4
  [ "$namespace" != '' ] && use_ns='-n $namespace'
  kubectl $use_ns annotate --overwrite $kind $name meta.helm.sh/release-name=$release
  kubectl $use_ns annotate --overwrite $kind $name meta.helm.sh/release-namespace=$namespace
  kubectl $use_ns label --overwrite $kind $name app.kubernetes.io/managed-by=Helm

}
