#!/usr/bin/env bash
set -eu

ENV_DIR=${ENV_DIR:-./env}
. bin/common.sh

if [ -f "$ENV_DIR/.secrets" ]; then
  source $ENV_DIR/.secrets
else
  cp $PWD/.values/.secrets.sample $ENV_DIR/.secrets
fi

has_otomi='false'
[ -f $ENV_DIR/bin/otomi ] && has_otomi='true'

function generate_loose_schema() {
  local targetPath="$ENV_DIR/.vscode/values-schema.yaml"
  local sourcePath="$PWD/values-schema.yaml"
  yq d $sourcePath '**.required.' | yq d - 'properties.toolsVersion' | yq d - 'properties.cluster' >$targetPath
  # also put a copy in the .values folder for local hinting of .demo/env/*.yaml files:
  [ "$PWD" != "/home/app/stack" ] && cp $targetPath .values/
  echo "Stored JSON schema at: $targetPath"
}

# install CLI
bin_path="${ENV_DIR}/bin"
mkdir -p $bin_path &>/dev/null

# The very first time we use latest image
img='otomi/core:latest'
[ "$has_otomi" = 'true' ] && img="otomi/core:$(otomi_image_tag)"
echo "Installing artifacts from $img"
for f in 'aliases' 'common.sh' 'otomi' 'otocomplete.sh'; do
  cp $PWD/bin/$f $bin_path/
done
cp -r $PWD/.values/.vscode $ENV_DIR/

generate_loose_schema

for f in '.gitattributes' '.sops.yaml.sample' '.secrets.sample'; do
  [ ! -f $ENV_DIR/$f ] && cp $PWD/.values/$f $ENV_DIR/
done
for f in '.gitignore' '.prettierrc.yml' 'README.md'; do
  cp $PWD/.values/$f $ENV_DIR/
done
if [ -z "$(ls -A $ENV_DIR/env)" ]; then
  echo "No files found in env, installing demo files"
  cp -r $PWD/.demo/env $ENV_DIR/env
fi
cp -f $PWD/bin/hooks/pre-commit $ENV_DIR/.git/hooks/
[ "${GCLOUD_SERVICE_KEY-}" != "" ] && echo $GCLOUD_SERVICE_KEY | jq '.' >$ENV_DIR/gcp-key.json
secrets_file="$ENV_DIR/env/secrets.settings.yaml"
if [ -f "$secrets_file" ] && [ "$(cat $secrets_file | yq r - 'otomi.pullSecret')" != "" ]; then
  echo "Copying Otomi Console setup"
  cp -rf $PWD/docker-compose $ENV_DIR/
  cp -f $PWD/core.yaml $ENV_DIR/
  cp -f $PWD/docker-compose.yml $ENV_DIR/
  cp -f $PWD/otocomplete.yaml $ENV_DIR/
fi
if [ "$has_otomi" = "false" ]; then
  echo "You can now use otomi CLI"
  echo "Start by sourcing aliases:"
  echo ". bin/aliases"
fi
echo "Done!"
