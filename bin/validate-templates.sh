#!/usr/bin/env bash

[ -n "$CI" ] && set -e
set -o pipefail

. bin/common-modules.sh
. bin/common.sh

readonly schema_output_path="/tmp/otomi/kubernetes-json-schema"
readonly output_path="/tmp/otomi/generated-crd-schemas"
readonly schemas_bundle_file="$output_path/all.json"
readonly k8s_resources_path="/tmp/otomi/generated-manifests"
readonly jq_file=$(mktemp -u)
readonly script_message="Templates validation"

function cleanup() {
  if [ -z "$DEBUG" ]; then
    [ -n "$VERBOSE" ] && echo "custom cleanup called"
    rm -rf $jq_file $k8s_resources_path $output_path $schema_output_path >/dev/null 2>&1
  fi
}

function setup() {
  local k8s_version=$1
  mkdir -p $k8s_resources_path $output_path $schema_output_path
  touch $schemas_bundle_file
  # use standalone schemas
  if [ ! -d "$schema_output_path/$k8s_version-standalone" ]; then
    tar -xzf "schemas/$k8s_version-standalone.tar.gz" -C "$schema_output_path/"
    tar -xzf "schemas/generated-crd-schemas.tar.gz" -C "$schema_output_path/$k8s_version-standalone"
  fi

  # loop over .spec.versions[] and generate one file for each version
  cat <<'EOF' >$jq_file
    . as $obj |
    if $obj.spec.versions then $obj.spec.versions[] else {name: $obj.spec.version} end |
    if .schema then {version: .name, schema: .schema} else {version: .name, schema: $obj.spec.validation} end |
    {
        filename: ( ($obj.spec.names.kind | ascii_downcase) +"-"+  ($obj.spec.group | split(".")[0]) +"-"+ ( .version  ) + ".json" ),
        schema: {
            properties: .schema.openAPIV3Schema.properties,
            description: (.schema.openAPIV3Schema.description // ""),
            required: (.schema.openAPIV3Schema.required // []),
            title: $obj.metadata.name,
            type: "object",
            "$schema": "http://json-schema.org/draft/2019-09/schema#",
            "x-kubernetes-group-version-kind.group": $obj.spec.group,
            "x-kubernetes-group-version-kind.kind": $obj.spec.names.kind,
            "x-kubernetes-group-version-kind.version": .version 
        }
    } 
EOF
}

function process_crd() {
  local document="$1"
  local filter_crd_expr='select(.kind=="CustomResourceDefinition")'
  {
    yq r -d'*' -j "$document" |
      jq -c "$filter_crd_expr" |
      jq -S -c --raw-output -f "$jq_file" >>"$schemas_bundle_file"
  } || {
    err "Processing: $document"
    [ -n "$CI" ] && exit 1
  }
}

function process_crd_wrapper() {
  local k8s_version=$1
  local cluster_env=$2
  setup $k8s_version
  echo "Generating k8s $k8s_version manifests for cluster '$cluster_env'"
  hf_templates_init "$k8s_resources_path/$k8s_version"

  echo "Processing CRD files"
  # generate canonical schemas
  local target_yaml_files="*.yaml"
  # schemas for otomi templates
  for file in $(find "$k8s_resources_path/$k8s_version" -name "$target_yaml_files" -exec bash -c "ls {}" \;); do
    process_crd $file
  done
  # schemas for chart crds
  for file in $(find charts/**/crds -name "$target_yaml_files" -exec bash -c "ls {}" \;); do
    process_crd $file
  done
  # create schema in canonical format for each extracted file
  for json in $(jq -s -r '.[] | .filename' $schemas_bundle_file); do
    jq "select(.filename==\"$json\")" $schemas_bundle_file | jq '.schema' >"$schema_output_path/$k8s_version-standalone/$json"
  done
}

###############################################################
# Calls 'kubeval' on generated templates by 'helmfile template'
# Globals:
#     label
#     all
###############################################################
function validate_templates() {
  local k8s_version="v${get_k8s_version:-1.18}"
  local cluster_env=${cluster_env:-$cluster}
  process_crd_wrapper $k8s_version $cluster_env

  # validate_resources
  local kubeval_schema_location="file://$schema_output_path"
  local constraint_kinds="PspAllowedRepos,BannedImageTags,ContainerLimits,PspAllowedUsers,PspHostFilesystem,PspHostNetworkingPorts,PspPrivileged,PspApparmor,PspCapabilities,PspForbiddenSysctls,PspHostSecurity,PspSeccomp,PspSelinux"
  # TODO: revisit these excluded resources and see it they exist now
  local skip_kinds="CustomResourceDefinition,AppRepository,$constraint_kinds"
  local skip_filenames="crd,knative-services,constraint"
  local tmp_out=$(mktemp -u)
  echo "Validating resources for cluster '$cluster_env'"
  set +o pipefail
  [ -n "$CI" ] && set +e
  kubeval --quiet --skip-kinds $skip_kinds --ignored-filename-patterns $skip_filenames \
    --force-color -d $k8s_resources_path --schema-location $kubeval_schema_location \
    --kubernetes-version $(echo $k8s_version | sed 's/v//') | tee $tmp_out | grep -Ev 'PASS\b'
  set -o pipefail
  [ -n "$CI" ] && set -e

  grep -e "ERR\b" $tmp_out && exitcode=1
  [ -n "$CI" ] && [ $exitcode -ne 0 ] && exit $exitcode
  return 0
}

function main() {
  parse_args "$@"
  [ -n "$all" ] && [ -n "$label" ] && err "cannot specify --all and --label simultaneously" && exit 1
  [ -n "$all" ] && [ -n "$cluster" ] && err "cannot specify --all and --cluster simultaneously" && exit 1
  if [ -n "$all" ]; then
    for_each_cluster validate_templates
    exit 0
  else
    validate_templates
  fi
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
  if [ $? -gt 0 ]; then
    exit 1
  fi
fi
