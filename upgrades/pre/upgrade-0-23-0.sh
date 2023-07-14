#!/bin/bash

set -eu

if [[ $(helm status -n istio-system oauth2-proxy 2>/dev/null) ]]; then
  helm uninstall -n istio-system oauth2-proxy
else
  echo "The old oauth2-proxy release does not exists. Skipping"
fi

if [[ $(helm status -n istio-system oauth2-proxy-redis 2>/dev/null) ]]; then
  helm uninstall -n istio-system oauth2-proxy-redis
else
  echo "The old oauth2-proxy-redis release does not exists. Skipping"
fi

if [[ $(kubectl get deployment -n cert-manager cert-manager -o jsonpath='{.metadata.labels.app\.kubernetes\.io/version}') == "v1.10.0" ]]; then
  kubectl delete -n cert-manager deployment cert-manager-cainjector cert-manager-webhook cert-manager
else
  echo "The old cert-manager release does not exists. Skipping"
fi