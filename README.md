<h1 align="center">
  <img src="https://otomi.io/img/otomi-logo.svg" width="224px"/><br/>
  Self-hosted Application Platform for Kubernetes
</h1>

<h3 align="center">Announcement 👇👇
<br></br>
Otomi has been acquired by <a href="https://www.linode.com/otomi/">Akamai</a>. We believe that with Akamai’s support and resources, we can create an even more powerful Kubernetes application platform. More details will follow later this year.
<br></br>
</h3>

<p align="center">
  <a href="https://github.com/redkubes/otomi-core/releases/"><img alt="Releases" src="https://img.shields.io/github/release-date/redkubes/otomi-core?label=latest%20release" /></a>
  <a href="https://img.shields.io/github//redkubes/otomi-core/actions/workflows/main.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/redkubes/otomi-core/main.yml" /></a>
  <a href="https://img.shields.io/github/last-commit/redkubes/otomi-core"><img alt="Last commit" src="https://img.shields.io/github/last-commit/redkubes/otomi-core" /></a>
  <a href="https://img.shields.io/crates/l/ap"><img alt="License" src="https://img.shields.io/crates/l/ap" /></a>
  <a href="https://img.shields.io/badge/contributions-welcome-orange.svg"><img alt="Contributions" src="https://img.shields.io/badge/contributions-welcome-orange.svg" /></a>
  <a href="http://otomi.io/"><img src="https://img.shields.io/website-up-down-green-red/http/shields.io.svg" alt="Website otomi.io"></a>
  <a href="https://join.slack.com/t/otomi/shared_invite/zt-1axa4vima-E~LHN36nbLR~ay5r5pGq9A"><img src="https://img.shields.io/badge/slack--channel-blue?logo=slack"></a>
</p>

<p align="center"><img src="https://github.com/redkubes/otomi-core/blob/main/docs/img/otomi-console.png/?raw=true" width="100%" align="center" alt="Otomi integrated applications"></p>

<h4 align="center">
Otomi turns any Kubernetes cluster into an Application Platform to provide paved roads from code to production
</h4>

## Getting started

### Helm

To install Otomi, make sure to have a K8s cluster running with at least:

- Version `1.27`, `1.28` or `1.29`
- A node pool with at least **8 vCPU** and **16GB+ RAM** (more resources might be required based on the activated capabilities)
- Calico CNI installed (or any other CNI that supports K8s network policies)
- A default storage class configured
- When using the `custom` provider, make sure the K8s LoadBalancer Service created by `Otomi` can obtain an external IP (using a cloud load balancer or MetalLB)

> **_NOTE:_** Install Otomi with DNS to unlock it's full potential. Check [otomi.io](https://otomi.io) for more info.

Add the Helm repository:

```bash
helm repo add otomi https://otomi.io/otomi-core
helm repo update
```

and then install the Helm chart:

```bash
helm install otomi otomi/otomi \
--set cluster.name=$CLUSTERNAME \
--set cluster.provider=$PROVIDER # use 'azure', 'aws', 'google', 'digitalocean', 'ovh', 'vultr', 'scaleway', 'civo', 'linode', or 'custom' for any other cloud or onprem infrastructure
```

When the installer job is completed, follow the [activation steps](https://otomi.io/docs/get-started/activation).

## Platform architecture

Otomi consists out of the following components:

### Self-service portal and Cloud Shell

The `otomi-console` self-service portal offers a seamless user experience for DevSecOps teams and platform administrators. Platform administrators can use Otomi Console to enable and configure platform capabilities and onboard development teams. DevOps teams can use Otomi Console to build images, deploy and expose Workloads, configure CNAMEs, configure network policies and manage secrets. Otomi Console also provides context aware access to platform capabilities like code repositories, registries, logs, metrics, traces, dashboards, etc. Next to the web based self-service, both teams and admins can start a Cloud Shell and run CLI commands.

### Platform Control plane

All changes made through the Console are validated by the platform control plane (`otomi-api`) and then committed as code in Git. This will automatically trigger the platform to synchronize the desired state to the Kubernetes state of the platform based on GitOps.

### Pre-filled Catalog

A Catalog with reusable templates to create workloads. The Catalog is pre-filled with a set of templates maintained in the `otomi/charts` repo. You can also add your own charts and offer them to the teams on the platform.

### Automation

The automation (a set of Kubernetes operators) is used to synchronize the desired state to the state of applications like Keycloak, Harbor and Gitea.

### Capabilities

Otomi offers a set of integrated Kubernetes applications (using upstream open source projects) for all the required platform capabilities. Core applications are always installed, optional applications can be activated on-demand. When an application is activated, the application will be installed based on a configuration profile that contains defaults, best-practices and platform integrations. Default configuration can be adjusted using the Console.

**Core Applications (that are always installed):**

- [Istio](https://github.com/istio/istio): The service mesh framework with end-to-end transit encryption
- [Argo CD](https://github.com/argoproj/argo-cd): Declarative Continuous Deployment
- [Keycloak](https://github.com/keycloak/keycloak): Identity and access management for modern applications and services
- [Cert Manager](https://github.com/cert-manager/cert-manager) - Bring your own wildcard certificate or request one from Let's Encrypt
- [Nginx Ingress Controller](https://github.com/kubernetes/ingress-nginx): Ingress controller for Kubernetes
- [External DNS](https://github.com/kubernetes-sigs/external-dns): Synchronize exposed ingresses with DNS providers
- [Tekton Pipeline](https://github.com/tektoncd/pipeline): K8s-style resources for declaring CI/CD pipelines
- [Tekton Triggers](https://github.com/tektoncd/triggers): Trigger pipelines from event payloads
- [Tekton dashboard](https://github.com/tektoncd/dashboard): Web-based UI for Tekton Pipelines and Tekton Triggers
- [Gitea](https://github.com/go-gitea/gitea): Self-hosted Git service
- [Cloudnative-pg](https://github.com/cloudnative-pg/cloudnative-pg): Open source operator designed to manage PostgreSQL workloads
- [Paketo build packs](https://github.com/paketo-buildpacks): Cloud Native Buildpack implementations for popular programming
- [Kaniko](https://github.com/GoogleContainerTools/kaniko): Build container images from a Dockerfile

**Optional Applications (that you can activate to compose your ideal platform):**

- [Velero](https://github.com/vmware-tanzu/velero): Back up and restore your Kubernetes cluster resources and persistent volumes
- [Knative](https://github.com/knative/serving): Deploy and manage serverless workloads
- [Drone](https://github.com/harness/drone): Continuous integration platform built on Docker
- [Prometheus](https://github.com/prometheus/prometheus): Collecting container application metrics
- [Grafana](https://github.com/grafana/grafana): Visualize metrics, logs, and traces from multiple sources
- [Grafana Loki](https://github.com/grafana/loki): Collecting container application logs
- [Harbor](https://github.com/goharbor/harbor): Container image registry with role-based access control, image scanning, and image signing
- [OPA/Gatekeeper](https://github.com/open-policy-agent/gatekeeper): Policy-based control for cloud-native environments
- [Jaeger](https://github.com/jaegertracing/jaeger): End-to-end distributed tracing and monitor for complex distributed systems
- [Kiali](https://github.com/kiali/kiali): Observe Istio service mesh relations and connections
- [Minio](https://github.com/minio/minio): High performance Object Storage compatible with Amazon S3 cloud storage service
- [Trivy](https://github.com/aquasecurity/trivy-operator): Kubernetes-native security toolkit
- [Falco](https://github.com/falcosecurity/falco): Cloud Native Runtime Security
- [Grafana Tempo](https://github.com/grafana/tempo): High-scale distributed tracing backend
- [OpenTelemetry](https://github.com/open-telemetry/opentelemetry-operator): Instrument, generate, collect, and export telemetry data to help you analyze your software’s performance and behavior

### Supported providers

Otomi can be installed on any Kubernetes cluster. At this time, the following providers are supported:

- `aws` for [AWS Elastic Kubernetes Service](https://aws.amazon.com/eks/)
- `azure` for [Azure Kubernetes Service](https://azure.microsoft.com/en-us/products/kubernetes-service)
- `google` for [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine?hl=en)
- `linode` for [Linode Kubernetes Engine](https://www.linode.com/products/kubernetes/)
- `ovh` for [OVH Cloud](https://www.ovhcloud.com/en/public-cloud/kubernetes/)
- `vultr` for [Vultr Kubernetes Engine](https://www.vultr.com/kubernetes/)
- `scaleway` for [Scaleway Kapsule](https://www.scaleway.com/en/kubernetes-kapsule/)
- `civo` for [Civo Cloud K3S](https://www.civo.com/)
- `custom` for any other cloud/infrastructure

## Otomi Projects

Otomi open source consists out of the following projects:

- Otomi Core (this project): The heart of Otomi
- [Otomi Tasks](https://github.com/redkubes/otomi-tasks): Autonomous jobs orchestrated by Otomi Core
- [Otomi Clients](https://github.com/redkubes/otomi-clients): Factory to build and publish openapi clients used in by otomi-tasks
- [Otomi Charts](https://github.com/linode/apl-charts): Quickstart Helm templates offered in the Catalog

## Documentation

Check out the [dev docs index](./docs/README.md) for developer documentation or go to [otomi.io](https://otomi.io) for more detailed documentation.

## Contribution

If you wish to contribute please read our [Contributor Code of Conduct](https://otomi.io/community/code-of-conduct) and [Contribution Guidelines](https://otomi.io/community/get-involved).

If you want to say **thank you** or/and support the active development of Otomi:

- [Star](https://github.com/redkubes/otomi-core) the Otomi project on Github
- Feel free to write articles about the project on [dev.to](https://dev.to/), [medium](https://medium.com/) or on your personal blog and share your experiences

This project exists thanks to all the people who have contributed

<a href="https://github.com/redkubes/otomi-core/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=redkubes/otomi-core" />
</a>

## License

Otomi is licensed under the [Apache 2.0 License](https://github.com/redkubes/otomi-core/blob/main/LICENSE).
