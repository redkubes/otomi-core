#!/usr/bin/env bash
###
# Dev test with: otomi x SKIP_CLEANUP=1 bin/build-constraints.sh
###
set -e

run_from_hook=$1
[ -n "$run_from_hook" ] && cd ..

# . bin/common.sh
# . bin/common-modules.sh

readonly policies_path="./policies"
readonly policies_file="$ENV_DIR/env/policies.yaml"
readonly copy_path="/tmp/otomi/policies"
readonly constraints_path="$PWD/charts/gatekeeper-constraints/templates"
readonly compiled_schema_path="/tmp/otomi/compiled-schema.json"
readonly templates_path="$PWD/charts/gatekeeper-artifacts/templates"
readonly tmp_path=$(mktemp -u)
readonly script_message="Building constraints"

# hardcoded workaround for Disallowed data.X References
# disable after upstream OPA issue is resolved
# https://github.com/open-policy-agent/gatekeeper/issues/1046
function clear_disallowed_refs() {
  echo "Clearing disallowed refs"
  local core_file=lib/core.rego
  sed -e '/opa_upstream_bug_1046 /{N;N;N;N;N;N;d;}' $policies_path/$core_file >$copy_path/$core_file
}

# build yaml resources from policy files
function build() {
  echo "Building constraints artifacts from policies."
  mkdir -p $copy_path
  rm -rf tmp_path/* $copy_path/*
  echo "Copying policies temporarily to $copy_path"
  cp -rf $policies_path/* $copy_path/
  clear_disallowed_refs
  echo "Generating konstrait files to $constraints_path"
  konstraint create $copy_path -o $tmp_path
  json-dereference -s values-schema.yaml -o $compiled_schema_path
}

# function cleanup() {
#   rm -rf $copy_path $constraints_path $compiled_schema_path
# }

# decorate resources with parameters schema
function decorate() {
  echo "Decorating template/constraints files with properties."
  local map_constraints_expr='.policies as $constraints |  $constraints | keys[] | {(.): $constraints[.]}'
  for constraint in $(yq -o=json $policies_file | jq --raw-output -S -c "$map_constraints_expr"); do
    local key=$(echo $constraint | jq --raw-output '. | keys[0]')
    # NOTE:
    # Konstraint library is generating filenames from folder names using the dash symbol "-" as uppercase markup. Example:  file-name => FileName
    # Policy names can be defined using dashes, so we need to strip dashes from filenames expression
    local filename=$(sed s/-//g <<<$key)
    # decorate constraints with parameters
    local constraints_file=$(ls $tmp_path/constraint_* | grep -i "$filename.yaml")
    local parameters=$(echo $constraint | jq --raw-output -c "{\"spec\":{\"parameters\": {\"$key\"} }}")
    local constraints=$(yq -o=json $constraints_file | jq --raw-output -c '.')
    jq -n --argjson constraints $constraints --argjson parameters $parameters '$constraints * $parameters | .' | yq -o=yaml - >"$constraints_file"
    # decorate constraint templates with openAPI schema properties
    local map_properties_expr='. as $properties | {"spec":{"crd":{"spec":{"validation": {"openAPIV3Schema": $properties }}}}} | .'
    local policy_json_path="properties.policies.properties[${key}]"
    local properties=$(yq e 'del(..|.required?, .default?, .additionalProperties?)' -o=json -I=0 $compiled_schema_path | jq -c --raw-output "$map_properties_expr")
    local ctemplates_file=$(ls $tmp_path/template_* | grep -i "$filename.yaml")
    local template_file=${ctemplates_file/$tmp_path/$templates_path}
    local template=$(yq e -o=json -I=0 $ctemplates_file | jq --raw-output -c '.')
    jq -n --argjson template "$template" --argjson properties "$properties" '$template * $properties | .' | yq e -o=yaml - >"$template_file"
  done
}

build && decorate
mv $tmp_path/constraint_* $constraints_path
mv $tmp_path/template_* $templates_path
echo "Done"
