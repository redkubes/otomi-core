#!/usr/bin/env bash

[ "$CI" = 'true' ] && set -e
set -uo pipefail

. bin/common.sh

readonly schema_output_path="/tmp/otomi/kubernetes-json-schema"
readonly output_path="/tmp/otomi/generated-crd-schemas"
readonly schemas_bundle_file="$output_path/all.json"
readonly k8s_resources_path="/tmp/otomi/generated-manifests"
readonly jq_file=$(mktemp -u)

exitcode=1
validationResult=0 # using $validationResult as final exit code result (assuming there is an error prior to finishing all policy chcking, the script should exit with an error)

cleanup() {
  validationResult=$((($validationResult + $exitcode)))
  [ $validationResult -eq 0 ] && echo "Template validation SUCCESS" || echo "Template validation FAILED"
  [ "${DEBUG-}" = '' ] && rm -rf $jq_file $k8s_resources_path $output_path $schema_output_path
  exit $validationResult
}
trap cleanup EXIT

run_setup() {
  exitcode=1
  local k8s_version="$1"
  rm -rf $k8s_resources_path $output_path $schema_output_path
  mkdir -p $k8s_resources_path $output_path $schema_output_path
  echo "" >$schemasBundleFile
  # use standalone schemas
  tar -xzf "schemas/$k8s_version-standalone.tar.gz" -C "$schema_output_path/"
  tar -xzf "schemas/generated-crd-schemas.tar.gz" -C "$schema_output_path/$k8s_version-standalone"

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

process_crd() {
  local document="$1"
  local filter_crd_expr='select(.kind=="CustomResourceDefinition")'
  {
    yq r -d'*' -j "$document" |
      jq -c "$filter_crd_expr" |
      jq -S -c --raw-output -f "$jq_file" >>"$schemas_bundle_file"
  } || {
    echo "ERROR Processing: $document"
    [ "$CI" = 'true' ] && exit 1
  }
}

validate_templates() {

  local k8s_version="v$(get_k8s_version)"
  local cluster_env=$(cluster_env)

  run_setup $k8s_version
  echo "Generating k8s $k8s_version manifests for cluster '$cluster_env'"
  hf_templates $k8s_resources_path

  echo "Processing CRD files"
  # generate canonical schemas
  local target_yaml_files="*.yaml"
  # schemas for otomi templates
  for file in $(find "$k8s_resources_path" -name "$target_yaml_files" -exec bash -c "ls {}" \;); do
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

  # validate_resources
  echo "Validating resources for cluster '$cluster_env'"
  local kubeval_schema_location="file://${schema_output_path}"
  local constraint_kinds="PspAllowedRepos,BannedImageTags,ContainerLimits,PspAllowedUsers,PspHostFilesystem,PspHostNetworkingPorts,PspPrivileged,PspApparmor,PspCapabilities,PspForbiddenSysctls,PspHostSecurity,PspSeccomp,PspSelinux"
  local skip_kinds="CustomResourceDefinition,$constraint_kinds"
  local skip_filenames="crd,knative-services,constraint"
  local tmp_out=$(mktemp -u)
  set +o pipefail
  kubeval --quiet --skip-kinds $skip_kinds --ignored-filename-patterns $skip_filenames \
    --force-color -d $k8s_resources_path --schema-location $kubeval_schema_location \
    --kubernetes-version $(echo $k8s_version | sed 's/v//') | tee $tmp_out | grep -Ev 'PASS\b'
  set -o pipefail
  [ "$(grep -e "ERR\b" $tmp_out)" != "" ] && exitcode=1 || exitcode=0
  validationResult=$((($validationResult + $exitcode)))
  rm $tmp_out
}

if [ "${1-}" != '' ]; then
  echo "Validating templates for cluster '$(cluster_env)'"
  validate_templates
  # re-enable next line after helm does not throw error any more: https://github.com/helm/helm/issues/8596
  # hf lint
else
  echo "Validating templates for all clusters"
  for_each_cluster validate_templates
  # re-enable next line after helm does not throw error any more: https://github.com/helm/helm/issues/8596
  # for_each_cluster hf lint
fi
