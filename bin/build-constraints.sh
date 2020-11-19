#!/usr/bin/env bash
set -eu

runFromHook=${1:-"false"}
[[ $runFromHook == "true" ]] && cd ..

. ./bin/common.sh

outputPath="/tmp/otomi/constraints"
function build() {
  echo "Building constraints artifacts from policies."
  local policiesPath="./policies"
  rm -f "$outputPath/*"
  konstraint create $policiesPath -o $outputPath
}

function decorate() {
  echo "Decorating template/constraints files with properties."
  local parseConstraintsExpression='.constraints as $constraints |  $constraints | keys[] | {(.): $constraints[.]}'
  for constraint in $(hf_values | yq r -j - 'charts.gatekeeper' | jq --raw-output -S -c "$parseConstraintsExpression"); do
    local key=$(echo $constraint | jq --raw-output '. | keys[0]')
    # decorate constraints
    local constraintsFile=$(ls $outputPath/constraint_* | grep -i "$key.yaml")
    local parameters=$(echo $constraint | jq --raw-output -c "{"spec":{"parameters": {"${key}"} }}")
    local constraints=$(yq r -P -j $constraintsFile | jq --raw-output -c '.')
    jq -n --argjson constraints $constraints --argjson parameters $parameters '$constraints * $parameters | .' | yq r -P - >$constraintsFile
    # decorate constraint templates
    local mapPropertiesExpr='. as $properties | {"spec":{"crd":{"spec":{"validation": {"openAPIV3Schema": $properties }}}}} | .'
    local policyPropertiesPath="properties.charts.properties.gatekeeper.properties.constraints.properties[${key}]"
    local properties=$(yq -j r values-schema.yaml $policyPropertiesPath | jq -c --raw-output "$mapPropertiesExpr")
    local ctemplatesFile=$(ls $outputPath/template_* | grep -i "$key.yaml")
    local template=$(yq r -P -j $ctemplatesFile | jq --raw-output -c '.')
    jq -n --argjson template "$template" --argjson properties "$properties" '$template * $properties | .' | yq r -P - >$ctemplatesFile
  done

}

build && decorate
echo "Done"
