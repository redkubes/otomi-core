#!/usr/bin/env bash
. bin/common.sh

run_crypt

# install some stuff that we never want to end up as charts
hf -f helmfile.tpl/helmfile-init.yaml template | kubectl apply -f -
# and prometheus-operator crds so charts can deploy ServiceMonitor
kubectl apply -f charts/prometheus-operator/crds

# helm charts after
hf apply --skip-deps -l stage!=post

# Post deploy tasks
bin/gitea-push.sh

hf apply --skip-deps -l stage=post
