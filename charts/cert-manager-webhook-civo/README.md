# cert-manager-webhook-civo

![Version: 0.4.0](https://img.shields.io/badge/Version-0.4.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 0.4.0](https://img.shields.io/badge/AppVersion-0.4.0-informational?style=flat-square)

A webhook to use CIVO DNS as a DNS issuer for cert-manager

## Installation

### cert-manager

Follow the [instructions](https://cert-manager.io/docs/installation/) using the cert-manager documentation to install it within your cluster.

### Webhook

```bash
helm repo add okteto https://charts.okteto.com
helm repo update
helm install --namespace cert-manager cert-manager-webhook-civo okteto/cert-manager-webhook-civo
```

## Uninstalling

To uninstall the webhook run

```bash
helm uninstall --namespace cert-manager cert-manager-webhook-civo
```

## Usage

### Credentials
In order to access the CIVO API, the webhook needs an [API token](https://www.civo.com/account/security).

```
kubectl create secret generic civo-secret --from-literal=api-key=<YOUR_CIVO_TOKEN>
```

### Create Issuer

Create a `ClusterIssuer` or `Issuer` resource as following:

#### Cluster-wide Issuer
```
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
spec:
  acme:
    # The ACME server URL
    server: https://acme-staging-v02.api.letsencrypt.org/directory
   
    # Email address used for ACME registration
    email: mail@example.com # REPLACE THIS WITH YOUR EMAIL
   
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: letsencrypt-staging

    solvers:
    - dns01:
        webhook:
          solverName: "civo"
          groupName: civo.webhook.okteto.com
          config:
            secretName: civo-secret
```

By default, the CIVO API token used will be obtained from the secret in the same namespace as the webhook.

#### Per Namespace API Tokens

If you would prefer to use separate API tokens for each namespace (e.g. in a multi-tenant environment):

```
apiVersion: cert-manager.io/v1
kind: Issuer
metadata:
  name: letsencrypt-staging
  namespace: default
spec:
  acme:
    # The ACME server URL
    server: https://acme-staging-v02.api.letsencrypt.org/directory
   
    # Email address used for ACME registration
    email: mail@example.com # REPLACE THIS WITH YOUR EMAIL
   
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: letsencrypt-staging

    solvers:
    - dns01:
        webhook:
          solverName: "civo"
          groupName: civo.webhook.okteto.com
          config:
            secretName: civo-secret
```

By default, the webhook doesn't have permissions to read secrets on all namespaces. To enable this, you'll need to provide your own service account.

### Create a certificate

Create your certificate resource as follows:

```
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: example-cert
  namespace: cert-manager
spec:
  commonName: example.com
  dnsNames:
  - example.com # REPLACE THIS WITH YOUR DOMAIN
  issuerRef:
   name: letsencrypt-staging
   kind: ClusterIssuer
  secretName: example-cert
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| affinity | object | `{}` | Node affinity for pod assignment |
| certManager.namespace | string | `"cert-manager"` | cert-manager's namespace |
| certManager.serviceAccountName | string | `"cert-manager"` | cert-manager's serviceAccountName |
| fullnameOverride | string | `""` | Override the full name of the created resources |
| groupName | string | `"civo.webhook.okteto.com"` | groupName for the webhook, issuers and clusterIssuers must match this |
| image.pullPolicy | string | `"IfNotPresent"` | Image pull policy |
| image.repository | string | `"okteto/civo-webhook"` | Image repository |
| image.tag | string | `"0.4.0"` |  |
| nameOverride | string | `""` | Override the name of the created resources |
| nodeSelector | object | `{}` | Node labels for pod assignment |
| podSecurityContext | object | `{}` | Optional pod context. The yaml block should adhere to the [PodSecurityContext spec](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#securitycontext-v1-core) |
| region | string | `"NYC1"` | region on CIVO |
| replicaCount | int | `1` | Number of webhook replicas |
| resources | object | `{}` | CPU/memory resource requests/limits |
| securityContext | object | `{}` | Optional security context. The yaml block should adhere to the [SecurityContext spec](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#podsecuritycontext-v1-core) |
| service.port | int | `443` | port for the webhook API server |
| service.type | string | `"ClusterIP"` | service type for the webhook API server |
| serviceAccount.create | bool | `true` | If true, create a new service account |
| serviceAccount.name | string | `nil` | Service account to be used. If not set and serviceAccount.create is true, a name is generated using the fullname template |
| tolerations | list | `[]` | Node tolerations for pod assignment |

# Contributing

This chart is maintained at https://github.com/okteto/cert-manager-webhook-civo.