#!/usr/bin/env bash
. bin/common.sh
set -e

# source env
ENV_DIR=${ENV_DIR:-./env}

skip_demo_files=$1
[ -f $ENV_DIR/bin/otomi ] && has_otomi=true

# install CLI
otomi_path="${ENV_DIR}/bin/"
mkdir -p $otomi_path &>/dev/null
img="eu.gcr.io/otomi-cloud/otomi-stack:$(otomi_image_tag)"
echo "Installing artifacts from $img"
cp $PWD/bin/aliases $otomi_path
cp $PWD/bin/otomi $otomi_path
cp -r $PWD/.values/.vscode $ENV_DIR/
# convert schema to loose json:
grep -v 'required:' $PWD/values-schema.yaml | yaml2json | jq -M '.' >$ENV_DIR/.vscode/values-schema.json
exit
for f in '.gitattributes' '.sops.yaml'; do
  [ ! -f $ENV_DIR/$f ] && cp $PWD/.values/$f $ENV_DIR/
done
for f in '.gitignore' '.prettierrc.yml' 'README.md'; do
  cp $PWD/.values/$f $ENV_DIR/
done
if [ "$skip_demo_files" != "1" ]; then
  echo "Installing demo files"
  cp -r $PWD/.demo/env $ENV_DIR/env
fi
if [ ! $has_otomi ]; then
  echo "You can now use otomi CLI"
  echo "Start by sourcing aliases:"
  echo ". bin/aliases"
fi
