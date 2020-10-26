#!/usr/bin/env bash
set -eu
set -o pipefail

. bin/common.sh
. bin/colors.sh

values=$(hf_values)
receiver=$(echo "$values" | yq r - alerts.receiver)
customer_name=$(customer_name)
tpl=$PWD/tpl/.drone.tpl.$receiver.yml
otomi_image_tag=$(otomi_image_tag)

if [ "$receiver" == "slack" ]; then
  key="url"
else
  key="lowPrio"
fi
webhook=$(echo "$values" | yq r - "alerts.$receiver.$key")
clouds=($(yq r -j $clustersFile clouds | jq -r '.|keys[]'))

function template_drone_config() {

  local targetPath=$1
  local templatePath=$2
  local cloud=$3
  local cluster=$4
  local otomi_image_tag=$5
  printf "${COLOR_LIGHT_PURPLE}Creating $targetPath ${COLOR_NC}\n"

  cat $templatePath | sed -e "s/__CLOUD/${cloud}/g" -e "s/__CLUSTER/${cluster}/g" \
    -e "s/__IMAGE_TAG/${otomi_image_tag}/g" -e "s|__WEBHOOK|${webhook}|g" \
    -e "s/__CUSTOMER/${customer_name}/g" \
    >$targetPath
}

for cloud in "${clouds[@]}"; do
  clusters=($(yq r -j $clustersFile clouds.${cloud}.clusters | jq -r '.|keys[]'))
  for cluster in "${clusters[@]}"; do
    targetPath="$ENV_DIR/env/clouds/${cloud}/${cluster}/.drone.yml"
    otomiVersion="$(yq r $clustersFile clouds.${cloud}.clusters.${cluster}.otomiVersion)"
    template_drone_config $targetPath $tpl $cloud $cluster $otomiVersion
  done
done
