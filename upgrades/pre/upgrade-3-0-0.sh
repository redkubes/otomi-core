#!/bin/bash

set -eu

if kubectl get -n gitea secret | grep gitea-postgresql; then
  kubectl annotate -n gitea secret/gitea-postgresql helm.sh/resource-policy='keep' deprecated=true
  kubectl annotate -n gitea sts/gitea-postgresql helm.sh/resource-policy='keep' deprecated=true
  kubectl annotate -n gitea svc/gitea-postgresql helm.sh/resource-policy='keep' deprecated=true
fi
