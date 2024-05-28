#!/usr/bin/env bash

# run from root

# this script will create a tar.gz with missing crds, for consumption by kubeval (validate-templates)
cd schemas/ || exit

export FILENAME_FORMAT='{kind}-{group}-{version}'

input_folder="input-crds"
gen_folder="generated-crd-schemas"

mkdir $gen_folder >/dev/null
#rm -rf ./$gen_folder/*
mkdir $input_folder >/dev/null
rm -rf $input_folder/*

# match all the crds of charts that didn't ship crds (some operators don't), and pull them
# (expects kube context to have a cluster that has them all)
# for pkg in "argoproj" "external-secrets" "operators.coreos" "cert-manager" "istio" "jaeger" "kiali" "knative" "cnpg"; do
for pkg in "pipeline" "pipelinerun" "task" "taskrun" ; do
  pkg_file="$input_folder/$pkg.yaml"
  echo '' >$pkg_file
  for crd in $(kubectl get crd | grep $pkg | awk '{print $1}'); do kubectl get crd $crd -o yaml | yq 'del(.metadata, .status)' - >>$pkg_file && printf "\n---\n" >>$pkg_file; done
  pushd $gen_folder || exit
  ../crd2jsonschema.py ../input-crds/$pkg.yaml
  popd || exit
done

cd $gen_folder && tar -zcvf ../$gen_folder.tar.gz .
rm -rf $input_folder $gen_folder
