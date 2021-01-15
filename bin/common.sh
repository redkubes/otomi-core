#!/usr/local/env bash
ENV_DIR=${ENV_DIR:-./env}

readonly otomiSettings="$ENV_DIR/env/settings.yaml"
readonly clustersFile="$ENV_DIR/env/clusters.yaml"
readonly helmfileOutputHide="(^\W+$|skipping|basePath=|Decrypting)"
readonly helmfileOutputHideTpl="(^[\W^-]+$|skipping|basePath=|Decrypting)"
readonly replacePathsPattern="s@../env@${ENV_DIR}@g"
readonly otomiToolsImage="otomi/tools:1.4.12"

has_docker=$( docker --version &>/dev/null && echo "1" || echo "0")
dind=0
cmd_image=''

function print_error() {
    echo "Error: " $@ >&2
}

function _shadow() {
  local cmd="$1"
  shift
  local args="$@"
  if [[ $has_docker -eq 1 && ("${IN_DOCKER}" != "1" || $dind -eq 1) ]]; then
    docker run --rm \
      -v ${ENV_DIR}:${ENV_DIR} \
      -e CLOUD="$CLOUD" \
      -e IN_DOCKER="1" \
      -e CLUSTER="$CLUSTER" \
      ${otomiToolsImage} ${cmd} ${args}
  elif command -v ${cmd} &>/dev/null; then
    command ${cmd} ${args}
  else
    print_error "Docker is not available and ${cmd} is not installed locally"
    exit 1
  fi
}

function yq() {
  local yq_args="$@"
  _shadow yq "${yq_args}"
}

function jq() {
  local jq_args="$@"
  _shadow jq "${jq_args}"
}

function get_k8s_version() {
  yq r $clustersFile "clouds.$CLOUD.clusters.$CLUSTER.k8sVersion"
}

function otomi_image_tag() {
  local otomiVersion=$([ -n "${CLOUD+x}${CLUSTER+x}" ] && yq r $clustersFile "clouds.$CLOUD.clusters.$CLUSTER.otomiVersion")
  [[ -n $otomiVersion ]] && echo $otomiVersion || echo 'latest'
}

function customer_name() {
  yq r $otomiSettings "customer.name"
}

function check_sops_file() {
  [[ ! -f "$ENV_DIR/.sops.yaml" ]] && (
    print_error "The $ENV_DIR/.sops.yaml does not exists"
    exit 1
  )
  return 0
}

function hf() {
  helmfile --quiet -e $CLOUD-$CLUSTER $@
}

function hf_values() {
  [ "${VERBOSE-'false'}" = 'false' ] && quiet='--quiet'
  helmfile ${quiet-} -e "$CLOUD-$CLUSTER" -f helmfile.tpl/helmfile-dump.yaml build | grep -Ev $helmfileOutputHide | sed -e $replacePathsPattern |
    yq read -P - 'releases[0].values[0]'
}

function prepare_crypt() {
  [[ -z "$GCLOUD_SERVICE_KEY" ]] && print_error "The GCLOUD_SERVICE_KEY environment variable is not set" && exit 2
  GOOGLE_APPLICATION_CREDENTIALS="/tmp/key.json"
  echo $GCLOUD_SERVICE_KEY >$GOOGLE_APPLICATION_CREDENTIALS
  export GOOGLE_APPLICATION_CREDENTIALS
}

function for_each_cluster() {
  # Perform a command from argument for each cluster
  executable=$1
  [[ -z "$executable" ]] && print_error "The positional argument is not set"
  local clustersPath="$ENV_DIR/env/clusters.yaml"
  clouds=$(yq r -j $clustersPath clouds | jq -rc '.|keys[]')
  for cloud in $clouds; do
    clusters=($(yq r -j $clustersPath clouds.${cloud}.clusters | jq -rc '. | keys[]'))
    for cluster in "${clusters[@]}"; do
      CLOUD=$cloud CLUSTER=$cluster $executable
    done
  done
}

