#!/bin/bash

set -eu

if kubectl get crd | grep -q operators.coreos.com; then
  kubectl delete apiservices.apiregistration.k8s.io v1.packages.operators.coreos.com
  kubectl delete -f charts/operator-lifecycle-manager/crds
  kubectl delete clusterrolebindings olm-operator-binding-olm
  kubectl delete clusterrole aggregate-olm-view
  kubectl delete namespaces olm
  kubectl delete namespaces operators
else
  echo "No OLM operators found. Skipping."
fi

if [[ $(helm status -n argocd argocd-operator-cr 2>/dev/null) ]]; then
  helm uninstall argocd-operator-cr -n argocd
  helm uninstall argocd-operator-artifacts -n argocd
  kubectl label --overwrite customresourcedefinitions.apiextensions.k8s.io "applications.argoproj.io" app.kubernetes.io/managed-by=Helm
  kubectl annotate customresourcedefinitions.apiextensions.k8s.io "applications.argoproj.io" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label --overwrite customresourcedefinitions.apiextensions.k8s.io "applicationsets.argoproj.io" app.kubernetes.io/managed-by=Helm
  kubectl annotate customresourcedefinitions.apiextensions.k8s.io "applicationsets.argoproj.io" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label --overwrite customresourcedefinitions.apiextensions.k8s.io "appprojects.argoproj.io" app.kubernetes.io/managed-by=Helm
  kubectl annotate customresourcedefinitions.apiextensions.k8s.io "appprojects.argoproj.io" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite serviceaccounts "argocd-applicationset-controller" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd serviceaccounts "argocd-applicationset-controller" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite configmaps "argocd-cm" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd configmaps "argocd-cm" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite configmaps "argocd-gpg-keys-cm" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd configmaps "argocd-gpg-keys-cm" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite configmaps "argocd-rbac-cm" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd configmaps "argocd-rbac-cm" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite configmaps "argocd-ssh-known-hosts-cm" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd configmaps "argocd-ssh-known-hosts-cm" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite configmaps "argocd-tls-certs-cm" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd configmaps "argocd-tls-certs-cm" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite roles "argocd-applicationset-controller" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd roles "argocd-applicationset-controller" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite rolebindings "argocd-applicationset-controller" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd --overwrite rolebindings "argocd-applicationset-controller" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite services "argocd-applicationset-controller" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd services "argocd-applicationset-controller" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite services "argocd-repo-server" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd services "argocd-repo-server" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite services "argocd-server" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd services "argocd-server" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite services "argocd-redis" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd services "argocd-redis" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite deployments "argocd-applicationset-controller" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd deployments "argocd-applicationset-controller" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite deployments "argocd-repo-server" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd deployments "argocd-repo-server" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite deployments "argocd-server" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd deployments "argocd-server" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite deployments "argocd-redis" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd deployments "argocd-redis" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
  kubectl label -n argocd --overwrite statefulsets "argocd-application-controller" app.kubernetes.io/managed-by=Helm
  kubectl annotate -n argocd statefulsets "argocd-application-controller" meta.helm.sh/release-name=argocd meta.helm.sh/release-namespace=argocd
else
  echo "The argocd-operator-cr helm release not found. Skipping."
fi
