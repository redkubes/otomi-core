# loki-distributed

![Version: 0.78.3](https://img.shields.io/badge/Version-0.78.3-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 2.9.4](https://img.shields.io/badge/AppVersion-2.9.4-informational?style=flat-square)

Helm chart for Grafana Loki in microservices mode

## Source Code

* <https://github.com/grafana/loki>
* <https://grafana.com/oss/loki/>
* <https://grafana.com/docs/loki/latest/>

## Chart Repo

Add the following repo to use the chart:

```console
helm repo add grafana https://grafana.github.io/helm-charts
```

## Upgrading

### Upgrading an existing Release to a new major version

Major version upgrades listed here indicate that there is an incompatible breaking change needing manual actions.

### From 0.74.x to 0.75.0
The Index Gateway and Query Scheduler now expose the memberlist port 7946. In order to join the
member list, you need to specify this in the `structuredConfig`:
```yaml
loki:
  structuredConfig:
    index_gateway:
      mode: ring
    query_scheduler:
      use_scheduler_ring: true
```

### From 0.68.x to 0.69.0
The in-memory `fifocache` has been renamed to more general `embedded_cache`, which currently doesn't have a `max_size_items` attribute.
```yaml
loki:
  config: |
    chunk_store_config:
      chunk_cache_config:
        embedded_cache:
          enabled: false
```

`compactor_address` has to be explicitly set in the `common` section of the config.
```yaml
loki:
  config: |
    common:
      compactor_address: {{ include "loki.compactorFullname" . }}:3100
```

### From 0.41.x to 0.42.0
All containers were previously named "loki". This version changes the container names to make the chart compatible with the loki-mixin. Now the container names correctly reflect the component (querier, distributor, ingester, ...). If you are using custom prometheus rules that use the container name you probably have to change them.

### From 0.34.x to 0.35.0
This version updates the `Ingress` API Version of the Loki Gateway component to `networking.k8s.io/v1` of course given that the cluster supports it. Here it's important to notice the change in the `values.yml` with regards to the ingress configuration section and its new structure.
```yaml
gateway:
  ingress:
    enabled: true
    # Newly added optional property
    ingressClassName: nginx
    hosts:
      - host: gateway.loki.example.com
        paths:
          # New data structure introduced
          - path: /
            # Newly added optional property
            pathType: Prefix
```

### From 0.30.x to 0.31.0
This version updates the `podManagementPolicy` of running the Loki components as `StatefulSet`'s to `Parallel` instead of the default `OrderedReady` in order to allow better scalability for Loki e.g. in case the pods weren't terminated gracefully. This change requires a manual action deleting the existing StatefulSets before upgrading with Helm.
```bash
# Delete the Ingesters StatefulSets
kubectl delete statefulset RELEASE_NAME-loki-distributed-ingester -n LOKI_NAMESPACE --cascade=orphan
# Delete the Queriers StatefulSets
kubectl delete statefulset RELEASE_NAME-loki-distributed-querier -n LOKI_NAMESPACE --cascade=orphan
```

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| compactor.affinity | string | Hard node and soft zone anti-affinity | Affinity for compactor pods. Passed through `tpl` and, thus, to be configured as string |
| compactor.appProtocol | object | `{"grpc":""}` | Set the optional grpc service protocol. Ex: "grpc", "http2" or "https" |
| compactor.command | string | `nil` | Command to execute instead of defined in Docker image |
| compactor.enabled | bool | `false` | Specifies whether compactor should be enabled |
| compactor.extraArgs | list | `[]` | Additional CLI args for the compactor |
| compactor.extraContainers | list | `[]` | Containers to add to the compactor pods |
| compactor.extraEnv | list | `[]` | Environment variables to add to the compactor pods |
| compactor.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the compactor pods |
| compactor.extraVolumeMounts | list | `[]` | Volume mounts to add to the compactor pods |
| compactor.extraVolumes | list | `[]` | Volumes to add to the compactor pods |
| compactor.hostAliases | list | `[]` | hostAliases to add |
| compactor.image.registry | string | `nil` | The Docker registry for the compactor image. Overrides `loki.image.registry` |
| compactor.image.repository | string | `nil` | Docker image repository for the compactor image. Overrides `loki.image.repository` |
| compactor.image.tag | string | `nil` | Docker image tag for the compactor image. Overrides `loki.image.tag` |
| compactor.initContainers | list | `[]` | Init containers to add to the compactor pods |
| compactor.kind | string | `"StatefulSet"` | Kind of deployment [StatefulSet/Deployment] |
| compactor.livenessProbe | object | `{}` | liveness probe settings for ingester pods. If empty use `loki.livenessProbe` |
| compactor.nodeSelector | object | `{}` | Node selector for compactor pods |
| compactor.persistence.annotations | object | `{}` | Annotations for compactor PVCs |
| compactor.persistence.claims | list | `[{"name":"data","size":"10Gi","storageClass":null}]` | List of the compactor PVCs @notationType -- list |
| compactor.persistence.enableStatefulSetAutoDeletePVC | bool | `false` | Enable StatefulSetAutoDeletePVC feature |
| compactor.persistence.enabled | bool | `false` | Enable creating PVCs for the compactor |
| compactor.persistence.size | string | `"10Gi"` | Size of persistent disk |
| compactor.persistence.storageClass | string | `nil` | Storage class to be used. If defined, storageClassName: <storageClass>. If set to "-", storageClassName: "", which disables dynamic provisioning. If empty or set to null, no storageClassName spec is set, choosing the default provisioner (gp2 on AWS, standard on GKE, AWS, and OpenStack). |
| compactor.persistence.whenDeleted | string | `"Retain"` |  |
| compactor.persistence.whenScaled | string | `"Retain"` |  |
| compactor.podAnnotations | object | `{}` | Annotations for compactor pods |
| compactor.podLabels | object | `{}` | Labels for compactor pods |
| compactor.priorityClassName | string | `nil` | The name of the PriorityClass for compactor pods |
| compactor.readinessProbe | object | `{}` | readiness probe settings for ingester pods. If empty, use `loki.readinessProbe` |
| compactor.replicas | int | `1` | Number of replicas for the compactor |
| compactor.resources | object | `{}` | Resource requests and limits for the compactor |
| compactor.serviceAccount.annotations | object | `{}` | Annotations for the compactor service account |
| compactor.serviceAccount.automountServiceAccountToken | bool | `true` | Set this toggle to false to opt out of automounting API credentials for the service account |
| compactor.serviceAccount.create | bool | `false` |  |
| compactor.serviceAccount.imagePullSecrets | list | `[]` | Image pull secrets for the compactor service account |
| compactor.serviceAccount.name | string | `nil` | The name of the ServiceAccount to use for the compactor. If not set and create is true, a name is generated by appending "-compactor" to the common ServiceAccount. |
| compactor.serviceLabels | object | `{}` | Labels for compactor service |
| compactor.terminationGracePeriodSeconds | int | `30` | Grace period to allow the compactor to shutdown before it is killed |
| compactor.tolerations | list | `[]` | Tolerations for compactor pods |
| distributor.affinity | string | Hard node and soft zone anti-affinity | Affinity for distributor pods. Passed through `tpl` and, thus, to be configured as string |
| distributor.appProtocol | object | `{"grpc":""}` | Adds the appProtocol field to the distributor service. This allows distributor to work with istio protocol selection. |
| distributor.appProtocol.grpc | string | `""` | Set the optional grpc service protocol. Ex: "grpc", "http2" or "https" |
| distributor.autoscaling.behavior.enabled | bool | `false` | Enable autoscaling behaviours |
| distributor.autoscaling.behavior.scaleDown | object | `{}` | define scale down policies, must conform to HPAScalingRules |
| distributor.autoscaling.behavior.scaleUp | object | `{}` | define scale up policies, must conform to HPAScalingRules |
| distributor.autoscaling.customMetrics | list | `[]` | Allows one to define custom metrics using the HPA/v2 schema (for example, Pods, Object or External metrics) |
| distributor.autoscaling.enabled | bool | `false` | Enable autoscaling for the distributor |
| distributor.autoscaling.maxReplicas | int | `3` | Maximum autoscaling replicas for the distributor |
| distributor.autoscaling.minReplicas | int | `1` | Minimum autoscaling replicas for the distributor |
| distributor.autoscaling.targetCPUUtilizationPercentage | int | `60` | Target CPU utilisation percentage for the distributor |
| distributor.autoscaling.targetMemoryUtilizationPercentage | string | `nil` | Target memory utilisation percentage for the distributor |
| distributor.command | string | `nil` | Command to execute instead of defined in Docker image |
| distributor.extraArgs | list | `[]` | Additional CLI args for the distributor |
| distributor.extraContainers | list | `[]` | Containers to add to the distributor pods |
| distributor.extraEnv | list | `[]` | Environment variables to add to the distributor pods |
| distributor.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the distributor pods |
| distributor.extraVolumeMounts | list | `[]` | Volume mounts to add to the distributor pods |
| distributor.extraVolumes | list | `[]` | Volumes to add to the distributor pods |
| distributor.hostAliases | list | `[]` | hostAliases to add |
| distributor.image.registry | string | `nil` | The Docker registry for the distributor image. Overrides `loki.image.registry` |
| distributor.image.repository | string | `nil` | Docker image repository for the distributor image. Overrides `loki.image.repository` |
| distributor.image.tag | string | `nil` | Docker image tag for the distributor image. Overrides `loki.image.tag` |
| distributor.maxSurge | int | `0` | Max Surge for distributor pods |
| distributor.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| distributor.nodeSelector | object | `{}` | Node selector for distributor pods |
| distributor.podAnnotations | object | `{}` | Annotations for distributor pods |
| distributor.podLabels | object | `{}` | Labels for distributor pods |
| distributor.priorityClassName | string | `nil` | The name of the PriorityClass for distributor pods |
| distributor.replicas | int | `1` | Number of replicas for the distributor |
| distributor.resources | object | `{}` | Resource requests and limits for the distributor |
| distributor.serviceLabels | object | `{}` | Labels for distributor service |
| distributor.terminationGracePeriodSeconds | int | `30` | Grace period to allow the distributor to shutdown before it is killed |
| distributor.tolerations | list | `[]` | Tolerations for distributor pods |
| fullnameOverride | string | `nil` | Overrides the chart's computed fullname |
| gateway.affinity | string | Hard node and soft zone anti-affinity | Affinity for gateway pods. Passed through `tpl` and, thus, to be configured as string |
| gateway.autoscaling.behavior.enabled | bool | `false` | Enable autoscaling behaviours |
| gateway.autoscaling.behavior.scaleDown | object | `{}` | define scale down policies, must conform to HPAScalingRules |
| gateway.autoscaling.behavior.scaleUp | object | `{}` | define scale up policies, must conform to HPAScalingRules |
| gateway.autoscaling.customMetrics | list | `[]` | Allows one to define custom metrics using the HPA/v2 schema (for example, Resource, Object or External metrics) |
| gateway.autoscaling.enabled | bool | `false` | Enable autoscaling for the gateway |
| gateway.autoscaling.maxReplicas | int | `3` | Maximum autoscaling replicas for the gateway |
| gateway.autoscaling.minReplicas | int | `1` | Minimum autoscaling replicas for the gateway |
| gateway.autoscaling.targetCPUUtilizationPercentage | int | `60` | Target CPU utilisation percentage for the gateway |
| gateway.autoscaling.targetMemoryUtilizationPercentage | string | `nil` | Target memory utilisation percentage for the gateway |
| gateway.basicAuth.enabled | bool | `false` | Enables basic authentication for the gateway |
| gateway.basicAuth.existingSecret | string | `nil` | Existing basic auth secret to use. Must contain '.htpasswd' |
| gateway.basicAuth.htpasswd | string | See values.yaml | Uses the specified username and password to compute a htpasswd using Sprig's `htpasswd` function. The value is templated using `tpl`. Override this to use a custom htpasswd, e.g. in case the default causes high CPU load. |
| gateway.basicAuth.password | string | `nil` | The basic auth password for the gateway |
| gateway.basicAuth.username | string | `nil` | The basic auth username for the gateway |
| gateway.containerSecurityContext | object | `{"allowPrivilegeEscalation":false,"capabilities":{"drop":["ALL"]},"readOnlyRootFilesystem":true}` | The SecurityContext for gateway containers |
| gateway.deploymentStrategy | object | `{"type":"RollingUpdate"}` | See `kubectl explain deployment.spec.strategy` for more, ref: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy |
| gateway.dnsConfig | object | `{}` | DNSConfig for gateway pods |
| gateway.enabled | bool | `true` | Specifies whether the gateway should be enabled |
| gateway.extraArgs | list | `[]` | Additional CLI args for the gateway |
| gateway.extraContainers | list | `[]` | Containers to add to the gateway pods |
| gateway.extraEnv | list | `[]` | Environment variables to add to the gateway pods |
| gateway.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the gateway pods |
| gateway.extraVolumeMounts | list | `[]` | Volume mounts to add to the gateway pods |
| gateway.extraVolumes | list | `[]` | Volumes to add to the gateway pods |
| gateway.hostAliases | list | `[]` | hostAliases to add |
| gateway.image.pullPolicy | string | `"IfNotPresent"` | The gateway image pull policy |
| gateway.image.registry | string | `"docker.io"` | The Docker registry for the gateway image |
| gateway.image.repository | string | `"nginxinc/nginx-unprivileged"` | The gateway image repository |
| gateway.image.tag | string | `"1.20.2-alpine"` | The gateway image tag |
| gateway.ingress.annotations | object | `{}` | Annotations for the gateway ingress |
| gateway.ingress.enabled | bool | `false` | Specifies whether an ingress for the gateway should be created |
| gateway.ingress.hosts | list | `[{"host":"gateway.loki.example.com","paths":[{"path":"/"}]}]` | Hosts configuration for the gateway ingress |
| gateway.ingress.ingressClassName | string | `""` | Ingress Class Name. MAY be required for Kubernetes versions >= 1.18 For example: `ingressClassName: nginx` |
| gateway.ingress.tls | list | `[]` | TLS configuration for the gateway ingress |
| gateway.livenessProbe.httpGet.path | string | `"/"` |  |
| gateway.livenessProbe.httpGet.port | string | `"http"` |  |
| gateway.livenessProbe.initialDelaySeconds | int | `30` |  |
| gateway.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| gateway.nginxConfig.file | string | See values.yaml | Config file contents for Nginx. Passed through the `tpl` function to allow templating |
| gateway.nginxConfig.httpSnippet | string | `""` | Allows appending custom configuration to the http block |
| gateway.nginxConfig.logFormat | string | See values.yaml | NGINX log format |
| gateway.nginxConfig.resolver | string | `""` | Allows overriding the DNS resolver address nginx will use. |
| gateway.nginxConfig.serverSnippet | string | `""` | Allows appending custom configuration to the server block |
| gateway.nodeSelector | object | `{}` | Node selector for gateway pods |
| gateway.podAnnotations | object | `{}` | Annotations for gateway pods |
| gateway.podLabels | object | `{}` | Labels for gateway pods |
| gateway.podSecurityContext | object | `{"fsGroup":101,"runAsGroup":101,"runAsNonRoot":true,"runAsUser":101}` | The SecurityContext for gateway containers |
| gateway.priorityClassName | string | `nil` | The name of the PriorityClass for gateway pods |
| gateway.readinessProbe.httpGet.path | string | `"/"` |  |
| gateway.readinessProbe.httpGet.port | string | `"http"` |  |
| gateway.readinessProbe.initialDelaySeconds | int | `15` |  |
| gateway.readinessProbe.timeoutSeconds | int | `1` |  |
| gateway.replicas | int | `1` | Number of replicas for the gateway |
| gateway.resources | object | `{}` | Resource requests and limits for the gateway |
| gateway.service.annotations | object | `{}` | Annotations for the gateway service |
| gateway.service.appProtocol | string | `nil` | Set appProtocol for the service |
| gateway.service.clusterIP | string | `nil` | ClusterIP of the gateway service |
| gateway.service.labels | object | `{}` | Labels for gateway service |
| gateway.service.loadBalancerIP | string | `nil` | Load balancer IPO address if service type is LoadBalancer |
| gateway.service.loadBalancerSourceRanges | list | `[]` | Load balancer allow traffic from CIDR list if service type is LoadBalancer |
| gateway.service.nodePort | string | `nil` | Node port if service type is NodePort |
| gateway.service.port | int | `80` | Port of the gateway service |
| gateway.service.type | string | `"ClusterIP"` | Type of the gateway service |
| gateway.terminationGracePeriodSeconds | int | `30` | Grace period to allow the gateway to shutdown before it is killed |
| gateway.tolerations | list | `[]` | Tolerations for gateway pods |
| gateway.verboseLogging | bool | `true` | Enable logging of 2xx and 3xx HTTP requests |
| global.clusterDomain | string | `"cluster.local"` | configures cluster domain ("cluster.local" by default) |
| global.dnsNamespace | string | `"kube-system"` | configures DNS service namespace |
| global.dnsService | string | `"kube-dns"` | configures DNS service name |
| global.image.registry | string | `nil` | Overrides the Docker registry globally for all images |
| global.priorityClassName | string | `nil` | Overrides the priorityClassName for all pods |
| hostAliases | list | `[]` | hostAliases to add |
| imagePullSecrets | list | `[]` | Image pull secrets for Docker images |
| indexGateway.affinity | string | Hard node and soft zone anti-affinity | Affinity for index-gateway pods. Passed through `tpl` and, thus, to be configured as string |
| indexGateway.appProtocol | object | `{"grpc":""}` | Set the optional grpc service protocol. Ex: "grpc", "http2" or "https" |
| indexGateway.enabled | bool | `false` | Specifies whether the index-gateway should be enabled |
| indexGateway.extraArgs | list | `[]` | Additional CLI args for the index-gateway |
| indexGateway.extraContainers | list | `[]` | Containers to add to the index-gateway pods |
| indexGateway.extraEnv | list | `[]` | Environment variables to add to the index-gateway pods |
| indexGateway.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the index-gateway pods |
| indexGateway.extraVolumeMounts | list | `[]` | Volume mounts to add to the index-gateway pods |
| indexGateway.extraVolumes | list | `[]` | Volumes to add to the index-gateway pods |
| indexGateway.hostAliases | list | `[]` | hostAliases to add |
| indexGateway.image.registry | string | `nil` | The Docker registry for the index-gateway image. Overrides `loki.image.registry` |
| indexGateway.image.repository | string | `nil` | Docker image repository for the index-gateway image. Overrides `loki.image.repository` |
| indexGateway.image.tag | string | `nil` | Docker image tag for the index-gateway image. Overrides `loki.image.tag` |
| indexGateway.initContainers | list | `[]` | Init containers to add to the index-gateway pods |
| indexGateway.joinMemberlist | bool | `true` | Whether the index gateway should join the memberlist hashring |
| indexGateway.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| indexGateway.nodeSelector | object | `{}` | Node selector for index-gateway pods |
| indexGateway.persistence.annotations | object | `{}` | Annotations for index gateway PVCs |
| indexGateway.persistence.enableStatefulSetAutoDeletePVC | bool | `false` | Enable StatefulSetAutoDeletePVC feature |
| indexGateway.persistence.enabled | bool | `false` | Enable creating PVCs which is required when using boltdb-shipper |
| indexGateway.persistence.inMemory | bool | `false` | Use emptyDir with ramdisk for storage. **Please note that all data in indexGateway will be lost on pod restart** |
| indexGateway.persistence.size | string | `"10Gi"` | Size of persistent or memory disk |
| indexGateway.persistence.storageClass | string | `nil` | Storage class to be used. If defined, storageClassName: <storageClass>. If set to "-", storageClassName: "", which disables dynamic provisioning. If empty or set to null, no storageClassName spec is set, choosing the default provisioner (gp2 on AWS, standard on GKE, AWS, and OpenStack). |
| indexGateway.persistence.whenDeleted | string | `"Retain"` |  |
| indexGateway.persistence.whenScaled | string | `"Retain"` |  |
| indexGateway.podAnnotations | object | `{}` | Annotations for index-gateway pods |
| indexGateway.podLabels | object | `{}` | Labels for index-gateway pods |
| indexGateway.priorityClassName | string | `nil` | The name of the PriorityClass for index-gateway pods |
| indexGateway.replicas | int | `1` | Number of replicas for the index-gateway |
| indexGateway.resources | object | `{}` | Resource requests and limits for the index-gateway |
| indexGateway.serviceLabels | object | `{}` | Labels for index-gateway service |
| indexGateway.terminationGracePeriodSeconds | int | `300` | Grace period to allow the index-gateway to shutdown before it is killed. |
| indexGateway.tolerations | list | `[]` | Tolerations for index-gateway pods |
| ingester.affinity | string | Hard node and soft zone anti-affinity | Affinity for ingester pods. Passed through `tpl` and, thus, to be configured as string |
| ingester.appProtocol | object | `{"grpc":""}` | Adds the appProtocol field to the ingester service. This allows ingester to work with istio protocol selection. |
| ingester.appProtocol.grpc | string | `""` | Set the optional grpc service protocol. Ex: "grpc", "http2" or "https" |
| ingester.autoscaling.behavior.enabled | bool | `false` | Enable autoscaling behaviours |
| ingester.autoscaling.behavior.scaleDown | object | `{}` | define scale down policies, must conform to HPAScalingRules |
| ingester.autoscaling.behavior.scaleUp | object | `{}` | define scale up policies, must conform to HPAScalingRules |
| ingester.autoscaling.customMetrics | list | `[]` | Allows one to define custom metrics using the HPA/v2 schema (for example, Pods, Object or External metrics) |
| ingester.autoscaling.enabled | bool | `false` | Enable autoscaling for the ingester |
| ingester.autoscaling.maxReplicas | int | `3` | Maximum autoscaling replicas for the ingester |
| ingester.autoscaling.minReplicas | int | `1` | Minimum autoscaling replicas for the ingester |
| ingester.autoscaling.targetCPUUtilizationPercentage | int | `60` | Target CPU utilisation percentage for the ingester |
| ingester.autoscaling.targetMemoryUtilizationPercentage | string | `nil` | Target memory utilisation percentage for the ingester |
| ingester.command | string | `nil` | Command to execute instead of defined in Docker image |
| ingester.extraArgs | list | `[]` | Additional CLI args for the ingester |
| ingester.extraContainers | list | `[]` | Containers to add to the ingester pods |
| ingester.extraEnv | list | `[]` | Environment variables to add to the ingester pods |
| ingester.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the ingester pods |
| ingester.extraVolumeMounts | list | `[]` | Volume mounts to add to the ingester pods |
| ingester.extraVolumes | list | `[]` | Volumes to add to the ingester pods |
| ingester.hostAliases | list | `[]` | hostAliases to add |
| ingester.image.registry | string | `nil` | The Docker registry for the ingester image. Overrides `loki.image.registry` |
| ingester.image.repository | string | `nil` | Docker image repository for the ingester image. Overrides `loki.image.repository` |
| ingester.image.tag | string | `nil` | Docker image tag for the ingester image. Overrides `loki.image.tag` |
| ingester.initContainers | list | `[]` | Init containers to add to the ingester pods |
| ingester.kind | string | `"StatefulSet"` | Kind of deployment [StatefulSet/Deployment] |
| ingester.lifecycle | object | `{}` | Lifecycle for the ingester container |
| ingester.livenessProbe | object | `{}` | liveness probe settings for ingester pods. If empty use `loki.livenessProbe` |
| ingester.maxSurge | int | `0` | Max Surge for ingester pods |
| ingester.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| ingester.nodeSelector | object | `{}` | Node selector for ingester pods |
| ingester.persistence.claims | list | `[{"name":"data","size":"10Gi","storageClass":null}]` | List of the ingester PVCs @notationType -- list |
| ingester.persistence.enableStatefulSetAutoDeletePVC | bool | `false` | Enable StatefulSetAutoDeletePVC feature |
| ingester.persistence.enabled | bool | `false` | Enable creating PVCs which is required when using boltdb-shipper |
| ingester.persistence.inMemory | bool | `false` | Use emptyDir with ramdisk for storage. **Please note that all data in ingester will be lost on pod restart** |
| ingester.persistence.whenDeleted | string | `"Retain"` |  |
| ingester.persistence.whenScaled | string | `"Retain"` |  |
| ingester.podAnnotations | object | `{}` | Annotations for ingester pods |
| ingester.podLabels | object | `{}` | Labels for ingester pods |
| ingester.priorityClassName | string | `nil` | The name of the PriorityClass for ingester pods |
| ingester.readinessProbe | object | `{}` | readiness probe settings for ingester pods. If empty, use `loki.readinessProbe` |
| ingester.replicas | int | `1` | Number of replicas for the ingester |
| ingester.resources | object | `{}` | Resource requests and limits for the ingester |
| ingester.serviceLabels | object | `{}` | Labels for ingestor service |
| ingester.terminationGracePeriodSeconds | int | `300` | Grace period to allow the ingester to shutdown before it is killed. Especially for the ingestor, this must be increased. It must be long enough so ingesters can be gracefully shutdown flushing/transferring all data and to successfully leave the member ring on shutdown. |
| ingester.tolerations | list | `[]` | Tolerations for ingester pods |
| ingester.topologySpreadConstraints | string | Defaults to allow skew no more then 1 node per AZ | topologySpread for ingester pods. Passed through `tpl` and, thus, to be configured as string |
| ingress.annotations | object | `{}` |  |
| ingress.enabled | bool | `false` |  |
| ingress.hosts[0] | string | `"loki.example.com"` |  |
| ingress.paths.distributor[0] | string | `"/api/prom/push"` |  |
| ingress.paths.distributor[1] | string | `"/loki/api/v1/push"` |  |
| ingress.paths.querier[0] | string | `"/api/prom/tail"` |  |
| ingress.paths.querier[1] | string | `"/loki/api/v1/tail"` |  |
| ingress.paths.query-frontend[0] | string | `"/loki/api"` |  |
| ingress.paths.ruler[0] | string | `"/api/prom/rules"` |  |
| ingress.paths.ruler[1] | string | `"/loki/api/v1/rules"` |  |
| ingress.paths.ruler[2] | string | `"/prometheus/api/v1/rules"` |  |
| ingress.paths.ruler[3] | string | `"/prometheus/api/v1/alerts"` |  |
| loki.annotations | object | `{}` | If set, these annotations are added to all of the Kubernetes controllers (Deployments, StatefulSets, etc) that this chart launches. Use this to implement something like the "Wave" controller or another controller that is monitoring top level deployment resources. |
| loki.appProtocol | string | `""` | Adds the appProtocol field to the memberlist service. This allows memberlist to work with istio protocol selection. Ex: "http" or "tcp" |
| loki.command | string | `nil` | Common command override for all pods (except gateway) |
| loki.config | string | See values.yaml | Config file contents for Loki |
| loki.configAsSecret | bool | `false` | Store the loki configuration as a secret. |
| loki.configSecretAnnotations | object | `{}` | Annotations for the secret with loki configuration. |
| loki.configSecretLabels | object | `{}` | Additional labels for the secret with loki configuration. |
| loki.containerSecurityContext | object | `{"allowPrivilegeEscalation":false,"capabilities":{"drop":["ALL"]},"readOnlyRootFilesystem":true}` | The SecurityContext for Loki containers |
| loki.existingSecretForConfig | string | `""` | Specify an existing secret containing loki configuration. If non-empty, overrides `loki.config` |
| loki.image.pullPolicy | string | `"IfNotPresent"` | Docker image pull policy |
| loki.image.registry | string | `"docker.io"` | The Docker registry |
| loki.image.repository | string | `"grafana/loki"` | Docker image repository |
| loki.image.tag | string | `nil` | Overrides the image tag whose default is the chart's appVersion |
| loki.livenessProbe.httpGet.path | string | `"/ready"` |  |
| loki.livenessProbe.httpGet.port | string | `"http"` |  |
| loki.livenessProbe.initialDelaySeconds | int | `300` |  |
| loki.podAnnotations | object | `{}` | Common annotations for all pods |
| loki.podLabels | object | `{}` | Common labels for all pods |
| loki.podSecurityContext | object | `{"fsGroup":10001,"runAsGroup":10001,"runAsNonRoot":true,"runAsUser":10001}` | The SecurityContext for Loki pods |
| loki.readinessProbe.httpGet.path | string | `"/ready"` |  |
| loki.readinessProbe.httpGet.port | string | `"http"` |  |
| loki.readinessProbe.initialDelaySeconds | int | `30` |  |
| loki.readinessProbe.timeoutSeconds | int | `1` |  |
| loki.revisionHistoryLimit | int | `10` | The number of old ReplicaSets to retain to allow rollback |
| loki.schemaConfig | object | `{"configs":[{"from":"2020-09-07","index":{"period":"24h","prefix":"loki_index_"},"object_store":"filesystem","schema":"v11","store":"boltdb-shipper"}]}` | Check https://grafana.com/docs/loki/latest/configuration/#schema_config for more info on how to configure schemas |
| loki.server.http_listen_port | int | `3100` | HTTP server listen port |
| loki.serviceAnnotations | object | `{}` | Common annotations for all loki services |
| loki.storageConfig | object | `{"boltdb_shipper":{"active_index_directory":"/var/loki/index","cache_location":"/var/loki/cache","cache_ttl":"168h","shared_store":"filesystem"},"filesystem":{"directory":"/var/loki/chunks"}}` | Check https://grafana.com/docs/loki/latest/configuration/#storage_config for more info on how to configure storages |
| loki.structuredConfig | object | `{}` | Structured loki configuration, takes precedence over `loki.config`, `loki.schemaConfig`, `loki.storageConfig` |
| memcached.appProtocol | string | `""` | Adds the appProtocol field to the memcached services. This allows memcached to work with istio protocol selection. Ex: "http" or "tcp" |
| memcached.containerSecurityContext | object | `{"allowPrivilegeEscalation":false,"capabilities":{"drop":["ALL"]},"readOnlyRootFilesystem":true}` | The SecurityContext for memcached containers |
| memcached.image.pullPolicy | string | `"IfNotPresent"` | Memcached Docker image pull policy |
| memcached.image.registry | string | `"docker.io"` | The Docker registry for the memcached |
| memcached.image.repository | string | `"memcached"` | Memcached Docker image repository |
| memcached.image.tag | string | `"1.6.21-alpine"` | Memcached Docker image tag |
| memcached.livenessProbe.initialDelaySeconds | int | `10` |  |
| memcached.livenessProbe.tcpSocket.port | string | `"http"` |  |
| memcached.podLabels | object | `{}` | Labels for memcached pods |
| memcached.podSecurityContext | object | `{"fsGroup":11211,"runAsGroup":11211,"runAsNonRoot":true,"runAsUser":11211}` | The SecurityContext for memcached pods |
| memcached.readinessProbe.initialDelaySeconds | int | `5` |  |
| memcached.readinessProbe.tcpSocket.port | string | `"http"` |  |
| memcached.readinessProbe.timeoutSeconds | int | `1` |  |
| memcached.serviceAnnotations | object | `{}` | Common annotations for all memcached services |
| memcachedChunks.affinity | string | Hard node and soft zone anti-affinity | Affinity for memcached-chunks pods. Passed through `tpl` and, thus, to be configured as string |
| memcachedChunks.enabled | bool | `false` | Specifies whether the Memcached chunks cache should be enabled |
| memcachedChunks.extraArgs | list | `["-I 32m"]` | Additional CLI args for memcached-chunks |
| memcachedChunks.extraContainers | list | `[]` | Containers to add to the memcached-chunks pods |
| memcachedChunks.extraEnv | list | `[]` | Environment variables to add to memcached-chunks pods |
| memcachedChunks.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to memcached-chunks pods |
| memcachedChunks.extraVolumeMounts | list | `[]` | List of additional volumes to be mounted for the memcached-chunks statefulset |
| memcachedChunks.hostAliases | list | `[]` | hostAliases to add |
| memcachedChunks.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| memcachedChunks.nodeSelector | object | `{}` | Node selector for memcached-chunks pods |
| memcachedChunks.persistence.enabled | bool | `false` | Enable creating PVCs which will persist cached data through restarts |
| memcachedChunks.persistence.size | string | `"10Gi"` | Size of persistent or memory disk |
| memcachedChunks.persistence.storageClass | string | `nil` | Storage class to be used. If defined, storageClassName: <storageClass>. If set to "-", storageClassName: "", which disables dynamic provisioning. If empty or set to null, no storageClassName spec is set, choosing the default provisioner (gp2 on AWS, standard on GKE, AWS, and OpenStack). |
| memcachedChunks.podAnnotations | object | `{}` | Annotations for memcached-chunks pods |
| memcachedChunks.podLabels | object | `{}` | Labels for memcached-chunks pods |
| memcachedChunks.priorityClassName | string | `nil` | The name of the PriorityClass for memcached-chunks pods |
| memcachedChunks.replicas | int | `1` | Number of replicas for memcached-chunks |
| memcachedChunks.resources | object | `{}` | Resource requests and limits for memcached-chunks |
| memcachedChunks.serviceLabels | object | `{}` | Labels for memcached-chunks service |
| memcachedChunks.terminationGracePeriodSeconds | int | `30` | Grace period to allow memcached-chunks to shutdown before it is killed |
| memcachedChunks.tolerations | list | `[]` | Tolerations for memcached-chunks pods |
| memcachedChunks.volumeClaimTemplates | list | `[]` | List of additional PVCs to be created for the memcached-chunks statefulset |
| memcachedExporter.containerSecurityContext | object | `{"allowPrivilegeEscalation":false,"capabilities":{"drop":["ALL"]},"readOnlyRootFilesystem":true}` | The SecurityContext for memcachedExporter containers |
| memcachedExporter.enabled | bool | `false` | Specifies whether the Memcached Exporter should be enabled |
| memcachedExporter.image.pullPolicy | string | `"IfNotPresent"` | Memcached Exporter Docker image pull policy |
| memcachedExporter.image.registry | string | `"docker.io"` | The Docker registry for the Memcached Exporter |
| memcachedExporter.image.repository | string | `"prom/memcached-exporter"` | Memcached Exporter Docker image repository |
| memcachedExporter.image.tag | string | `"v0.13.0"` | Memcached Exporter Docker image tag |
| memcachedExporter.podLabels | object | `{}` | Labels for memcached-exporter pods |
| memcachedExporter.resources | object | `{}` | Memcached Exporter resource requests and limits |
| memcachedFrontend.affinity | string | Hard node and soft zone anti-affinity | Affinity for memcached-frontend pods. Passed through `tpl` and, thus, to be configured as string |
| memcachedFrontend.enabled | bool | `false` | Specifies whether the Memcached frontend cache should be enabled |
| memcachedFrontend.extraArgs | list | `["-I 32m"]` | Additional CLI args for memcached-frontend |
| memcachedFrontend.extraContainers | list | `[]` | Containers to add to the memcached-frontend pods |
| memcachedFrontend.extraEnv | list | `[]` | Environment variables to add to memcached-frontend pods |
| memcachedFrontend.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to memcached-frontend pods |
| memcachedFrontend.hostAliases | list | `[]` | hostAliases to add |
| memcachedFrontend.maxUnavailable | int | `1` | Pod Disruption Budget maxUnavailable |
| memcachedFrontend.nodeSelector | object | `{}` | Node selector for memcached-frontend pods |
| memcachedFrontend.persistence.enabled | bool | `false` | Enable creating PVCs which will persist cached data through restarts |
| memcachedFrontend.persistence.size | string | `"10Gi"` | Size of persistent or memory disk |
| memcachedFrontend.persistence.storageClass | string | `nil` | Storage class to be used. If defined, storageClassName: <storageClass>. If set to "-", storageClassName: "", which disables dynamic provisioning. If empty or set to null, no storageClassName spec is set, choosing the default provisioner (gp2 on AWS, standard on GKE, AWS, and OpenStack). |
| memcachedFrontend.podAnnotations | object | `{}` | Annotations for memcached-frontend pods |
| memcachedFrontend.podLabels | object | `{}` | Labels for memcached-frontend pods |
| memcachedFrontend.priorityClassName | string | `nil` | The name of the PriorityClass for memcached-frontend pods |
| memcachedFrontend.replicas | int | `1` | Number of replicas for memcached-frontend |
| memcachedFrontend.resources | object | `{}` | Resource requests and limits for memcached-frontend |
| memcachedFrontend.serviceLabels | object | `{}` | Labels for memcached-frontend service |
| memcachedFrontend.terminationGracePeriodSeconds | int | `30` | Grace period to allow memcached-frontend to shutdown before it is killed |
| memcachedFrontend.tolerations | list | `[]` | Tolerations for memcached-frontend pods |
| memcachedIndexQueries.affinity | string | Hard node and soft zone anti-affinity | Affinity for memcached-index-queries pods. Passed through `tpl` and, thus, to be configured as string |
| memcachedIndexQueries.enabled | bool | `false` | Specifies whether the Memcached index queries cache should be enabled |
| memcachedIndexQueries.extraArgs | list | `["-I 32m"]` | Additional CLI args for memcached-index-queries |
| memcachedIndexQueries.extraContainers | list | `[]` | Containers to add to the memcached-index-queries pods |
| memcachedIndexQueries.extraEnv | list | `[]` | Environment variables to add to memcached-index-queries pods |
| memcachedIndexQueries.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to memcached-index-queries pods |
| memcachedIndexQueries.hostAliases | list | `[]` | hostAliases to add |
| memcachedIndexQueries.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| memcachedIndexQueries.nodeSelector | object | `{}` | Node selector for memcached-index-queries pods |
| memcachedIndexQueries.persistence.enabled | bool | `false` | Enable creating PVCs which will persist cached data through restarts |
| memcachedIndexQueries.persistence.size | string | `"10Gi"` | Size of persistent or memory disk |
| memcachedIndexQueries.persistence.storageClass | string | `nil` | Storage class to be used. If defined, storageClassName: <storageClass>. If set to "-", storageClassName: "", which disables dynamic provisioning. If empty or set to null, no storageClassName spec is set, choosing the default provisioner (gp2 on AWS, standard on GKE, AWS, and OpenStack). |
| memcachedIndexQueries.podAnnotations | object | `{}` | Annotations for memcached-index-queries pods |
| memcachedIndexQueries.podLabels | object | `{}` | Labels for memcached-index-queries pods |
| memcachedIndexQueries.priorityClassName | string | `nil` | The name of the PriorityClass for memcached-index-queries pods |
| memcachedIndexQueries.replicas | int | `1` | Number of replicas for memcached-index-queries |
| memcachedIndexQueries.resources | object | `{}` | Resource requests and limits for memcached-index-queries |
| memcachedIndexQueries.serviceLabels | object | `{}` | Labels for memcached-index-queries service |
| memcachedIndexQueries.terminationGracePeriodSeconds | int | `30` | Grace period to allow memcached-index-queries to shutdown before it is killed |
| memcachedIndexQueries.tolerations | list | `[]` | Tolerations for memcached-index-queries pods |
| memcachedIndexWrites.affinity | string | Hard node and soft zone anti-affinity | Affinity for memcached-index-writes pods. Passed through `tpl` and, thus, to be configured as string |
| memcachedIndexWrites.enabled | bool | `false` | Specifies whether the Memcached index writes cache should be enabled |
| memcachedIndexWrites.extraArgs | list | `["-I 32m"]` | Additional CLI args for memcached-index-writes |
| memcachedIndexWrites.extraContainers | list | `[]` | Containers to add to the memcached-index-writes pods |
| memcachedIndexWrites.extraEnv | list | `[]` | Environment variables to add to memcached-index-writes pods |
| memcachedIndexWrites.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to memcached-index-writes pods |
| memcachedIndexWrites.hostAliases | list | `[]` | hostAliases to add |
| memcachedIndexWrites.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| memcachedIndexWrites.nodeSelector | object | `{}` | Node selector for memcached-index-writes pods |
| memcachedIndexWrites.persistence.enabled | bool | `false` | Enable creating PVCs which will persist cached data through restarts |
| memcachedIndexWrites.persistence.size | string | `"10Gi"` | Size of persistent or memory disk |
| memcachedIndexWrites.persistence.storageClass | string | `nil` | Storage class to be used. If defined, storageClassName: <storageClass>. If set to "-", storageClassName: "", which disables dynamic provisioning. If empty or set to null, no storageClassName spec is set, choosing the default provisioner (gp2 on AWS, standard on GKE, AWS, and OpenStack). |
| memcachedIndexWrites.podAnnotations | object | `{}` | Annotations for memcached-index-writes pods |
| memcachedIndexWrites.podLabels | object | `{}` | Labels for memcached-index-writes pods |
| memcachedIndexWrites.priorityClassName | string | `nil` | The name of the PriorityClass for memcached-index-writes pods |
| memcachedIndexWrites.replicas | int | `1` | Number of replicas for memcached-index-writes |
| memcachedIndexWrites.resources | object | `{}` | Resource requests and limits for memcached-index-writes |
| memcachedIndexWrites.serviceLabels | object | `{}` | Labels for memcached-index-writes service |
| memcachedIndexWrites.terminationGracePeriodSeconds | int | `30` | Grace period to allow memcached-index-writes to shutdown before it is killed |
| memcachedIndexWrites.tolerations | list | `[]` | Tolerations for memcached-index-writes pods |
| nameOverride | string | `nil` | Overrides the chart's name |
| networkPolicy.alertmanager.namespaceSelector | object | `{}` | Specifies the namespace the alertmanager is running in |
| networkPolicy.alertmanager.podSelector | object | `{}` | Specifies the alertmanager Pods. As this is cross-namespace communication, you also need the namespaceSelector. |
| networkPolicy.alertmanager.port | int | `9093` | Specify the alertmanager port used for alerting |
| networkPolicy.discovery.namespaceSelector | object | `{}` | Specifies the namespace the discovery Pods are running in |
| networkPolicy.discovery.podSelector | object | `{}` | Specifies the Pods labels used for discovery. As this is cross-namespace communication, you also need the namespaceSelector. |
| networkPolicy.discovery.port | string | `nil` | Specify the port used for discovery |
| networkPolicy.enabled | bool | `false` | Specifies whether Network Policies should be created |
| networkPolicy.externalStorage.cidrs | list | `[]` | Specifies specific network CIDRs you want to limit access to |
| networkPolicy.externalStorage.ports | list | `[]` | Specify the port used for external storage, e.g. AWS S3 |
| networkPolicy.ingress.namespaceSelector | object | `{}` | Specifies the namespaces which are allowed to access the http port |
| networkPolicy.ingress.podSelector | object | `{}` | Specifies the Pods which are allowed to access the http port. As this is cross-namespace communication, you also need the namespaceSelector. |
| networkPolicy.metrics.cidrs | list | `[]` | Specifies specific network CIDRs which are allowed to access the metrics port. In case you use namespaceSelector, you also have to specify your kubelet networks here. The metrics ports are also used for probes. |
| networkPolicy.metrics.namespaceSelector | object | `{}` | Specifies the namespaces which are allowed to access the metrics port |
| networkPolicy.metrics.podSelector | object | `{}` | Specifies the Pods which are allowed to access the metrics port. As this is cross-namespace communication, you also need the namespaceSelector. |
| prometheusRule.annotations | object | `{}` | PrometheusRule annotations |
| prometheusRule.enabled | bool | `false` | If enabled, a PrometheusRule resource for Prometheus Operator is created |
| prometheusRule.groups | list | `[]` | Contents of Prometheus rules file |
| prometheusRule.labels | object | `{}` | Additional PrometheusRule labels |
| prometheusRule.namespace | string | `nil` | Alternative namespace for the PrometheusRule resource |
| querier.affinity | string | Hard node and soft zone anti-affinity | Affinity for querier pods. Passed through `tpl` and, thus, to be configured as string |
| querier.appProtocol | object | `{"grpc":""}` | Adds the appProtocol field to the querier service. This allows querier to work with istio protocol selection. |
| querier.appProtocol.grpc | string | `""` | Set the optional grpc service protocol. Ex: "grpc", "http2" or "https" |
| querier.autoscaling.behavior.enabled | bool | `false` | Enable autoscaling behaviours |
| querier.autoscaling.behavior.scaleDown | object | `{}` | define scale down policies, must conform to HPAScalingRules |
| querier.autoscaling.behavior.scaleUp | object | `{}` | define scale up policies, must conform to HPAScalingRules |
| querier.autoscaling.customMetrics | list | `[]` | Allows one to define custom metrics using the HPA/v2 schema (for example, Pods, Object or External metrics) |
| querier.autoscaling.enabled | bool | `false` | Enable autoscaling for the querier, this is only used if `indexGateway.enabled: true` |
| querier.autoscaling.maxReplicas | int | `3` | Maximum autoscaling replicas for the querier |
| querier.autoscaling.minReplicas | int | `1` | Minimum autoscaling replicas for the querier |
| querier.autoscaling.targetCPUUtilizationPercentage | int | `60` | Target CPU utilisation percentage for the querier |
| querier.autoscaling.targetMemoryUtilizationPercentage | string | `nil` | Target memory utilisation percentage for the querier |
| querier.command | string | `nil` | Command to execute instead of defined in Docker image |
| querier.dnsConfig | object | `{}` | DNSConfig for querier pods |
| querier.extraArgs | list | `[]` | Additional CLI args for the querier |
| querier.extraContainers | list | `[]` | Containers to add to the querier pods |
| querier.extraEnv | list | `[]` | Environment variables to add to the querier pods |
| querier.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the querier pods |
| querier.extraVolumeMounts | list | `[]` | Volume mounts to add to the querier pods |
| querier.extraVolumes | list | `[]` | Volumes to add to the querier pods |
| querier.hostAliases | list | `[]` | hostAliases to add |
| querier.image.registry | string | `nil` | The Docker registry for the querier image. Overrides `loki.image.registry` |
| querier.image.repository | string | `nil` | Docker image repository for the querier image. Overrides `loki.image.repository` |
| querier.image.tag | string | `nil` | Docker image tag for the querier image. Overrides `loki.image.tag` |
| querier.initContainers | list | `[]` | Init containers to add to the querier pods |
| querier.maxSurge | int | `0` | Max Surge for querier pods |
| querier.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| querier.nodeSelector | object | `{}` | Node selector for querier pods |
| querier.persistence.annotations | object | `{}` | Annotations for querier PVCs |
| querier.persistence.enabled | bool | `false` | Enable creating PVCs for the querier cache |
| querier.persistence.size | string | `"10Gi"` | Size of persistent disk |
| querier.persistence.storageClass | string | `nil` | Storage class to be used. If defined, storageClassName: <storageClass>. If set to "-", storageClassName: "", which disables dynamic provisioning. If empty or set to null, no storageClassName spec is set, choosing the default provisioner (gp2 on AWS, standard on GKE, AWS, and OpenStack). |
| querier.podAnnotations | object | `{}` | Annotations for querier pods |
| querier.podLabels | object | `{}` | Labels for querier pods |
| querier.priorityClassName | string | `nil` | The name of the PriorityClass for querier pods |
| querier.replicas | int | `1` | Number of replicas for the querier |
| querier.resources | object | `{}` | Resource requests and limits for the querier |
| querier.serviceLabels | object | `{}` | Labels for querier service |
| querier.terminationGracePeriodSeconds | int | `30` | Grace period to allow the querier to shutdown before it is killed |
| querier.tolerations | list | `[]` | Tolerations for querier pods |
| querier.topologySpreadConstraints | string | Defaults to allow skew no more then 1 node per AZ | topologySpread for querier pods. Passed through `tpl` and, thus, to be configured as string |
| queryFrontend.affinity | string | Hard node and soft zone anti-affinity | Affinity for query-frontend pods. Passed through `tpl` and, thus, to be configured as string |
| queryFrontend.appProtocol | object | `{"grpc":""}` | Adds the appProtocol field to the queryFrontend service. This allows queryFrontend to work with istio protocol selection. |
| queryFrontend.appProtocol.grpc | string | `""` | Set the optional grpc service protocol. Ex: "grpc", "http2" or "https" |
| queryFrontend.autoscaling.behavior.enabled | bool | `false` | Enable autoscaling behaviours |
| queryFrontend.autoscaling.behavior.scaleDown | object | `{}` | define scale down policies, must conform to HPAScalingRules |
| queryFrontend.autoscaling.behavior.scaleUp | object | `{}` | define scale up policies, must conform to HPAScalingRules |
| queryFrontend.autoscaling.customMetrics | list | `[]` | Allows one to define custom metrics using the HPA/v2 schema (for example, Pods, Object or External metrics) |
| queryFrontend.autoscaling.enabled | bool | `false` | Enable autoscaling for the query-frontend |
| queryFrontend.autoscaling.maxReplicas | int | `3` | Maximum autoscaling replicas for the query-frontend |
| queryFrontend.autoscaling.minReplicas | int | `1` | Minimum autoscaling replicas for the query-frontend |
| queryFrontend.autoscaling.targetCPUUtilizationPercentage | int | `60` | Target CPU utilisation percentage for the query-frontend |
| queryFrontend.autoscaling.targetMemoryUtilizationPercentage | string | `nil` | Target memory utilisation percentage for the query-frontend |
| queryFrontend.command | string | `nil` | Command to execute instead of defined in Docker image |
| queryFrontend.extraArgs | list | `[]` | Additional CLI args for the query-frontend |
| queryFrontend.extraContainers | list | `[]` | Containers to add to the query-frontend pods |
| queryFrontend.extraEnv | list | `[]` | Environment variables to add to the query-frontend pods |
| queryFrontend.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the query-frontend pods |
| queryFrontend.extraVolumeMounts | list | `[]` | Volume mounts to add to the query-frontend pods |
| queryFrontend.extraVolumes | list | `[]` | Volumes to add to the query-frontend pods |
| queryFrontend.hostAliases | list | `[]` | hostAliases to add |
| queryFrontend.image.registry | string | `nil` | The Docker registry for the query-frontend image. Overrides `loki.image.registry` |
| queryFrontend.image.repository | string | `nil` | Docker image repository for the query-frontend image. Overrides `loki.image.repository` |
| queryFrontend.image.tag | string | `nil` | Docker image tag for the query-frontend image. Overrides `loki.image.tag` |
| queryFrontend.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| queryFrontend.nodeSelector | object | `{}` | Node selector for query-frontend pods |
| queryFrontend.podAnnotations | object | `{}` | Annotations for query-frontend pods |
| queryFrontend.podLabels | object | `{}` | Labels for query-frontend pods |
| queryFrontend.priorityClassName | string | `nil` | The name of the PriorityClass for query-frontend pods |
| queryFrontend.replicas | int | `1` | Number of replicas for the query-frontend |
| queryFrontend.resources | object | `{}` | Resource requests and limits for the query-frontend |
| queryFrontend.serviceLabels | object | `{}` | Labels for query-frontend service |
| queryFrontend.terminationGracePeriodSeconds | int | `30` | Grace period to allow the query-frontend to shutdown before it is killed |
| queryFrontend.tolerations | list | `[]` | Tolerations for query-frontend pods |
| queryScheduler.affinity | string | Hard node and soft zone anti-affinity | Affinity for query-scheduler pods. Passed through `tpl` and, thus, to be configured as string |
| queryScheduler.appProtocol | object | `{"grpc":""}` | Set the optional grpc service protocol. Ex: "grpc", "http2" or "https" |
| queryScheduler.enabled | bool | `false` | Specifies whether the query-scheduler should be decoupled from the query-frontend |
| queryScheduler.extraArgs | list | `[]` | Additional CLI args for the query-scheduler |
| queryScheduler.extraContainers | list | `[]` | Containers to add to the query-scheduler pods |
| queryScheduler.extraEnv | list | `[]` | Environment variables to add to the query-scheduler pods |
| queryScheduler.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the query-scheduler pods |
| queryScheduler.extraVolumeMounts | list | `[]` | Volume mounts to add to the query-scheduler pods |
| queryScheduler.extraVolumes | list | `[]` | Volumes to add to the query-scheduler pods |
| queryScheduler.hostAliases | list | `[]` | hostAliases to add |
| queryScheduler.image.registry | string | `nil` | The Docker registry for the query-scheduler image. Overrides `loki.image.registry` |
| queryScheduler.image.repository | string | `nil` | Docker image repository for the query-scheduler image. Overrides `loki.image.repository` |
| queryScheduler.image.tag | string | `nil` | Docker image tag for the query-scheduler image. Overrides `loki.image.tag` |
| queryScheduler.maxUnavailable | int | `1` | Pod Disruption Budget maxUnavailable |
| queryScheduler.nodeSelector | object | `{}` | Node selector for query-scheduler pods |
| queryScheduler.podAnnotations | object | `{}` | Annotations for query-scheduler pods |
| queryScheduler.podLabels | object | `{}` | Labels for query-scheduler pods |
| queryScheduler.priorityClassName | string | `nil` | The name of the PriorityClass for query-scheduler pods |
| queryScheduler.replicas | int | `2` | Number of replicas for the query-scheduler. It should be lower than `-querier.max-concurrent` to avoid generating back-pressure in queriers; it's also recommended that this value evenly divides the latter |
| queryScheduler.resources | object | `{}` | Resource requests and limits for the query-scheduler |
| queryScheduler.serviceLabels | object | `{}` | Labels for query-scheduler service |
| queryScheduler.terminationGracePeriodSeconds | int | `30` | Grace period to allow the query-scheduler to shutdown before it is killed |
| queryScheduler.tolerations | list | `[]` | Tolerations for query-scheduler pods |
| rbac.pspEnabled | bool | `false` | If pspEnabled true, a PodSecurityPolicy is created for K8s that use psp. |
| rbac.sccEnabled | bool | `false` | For OpenShift set pspEnabled to 'false' and sccEnabled to 'true' to use the SecurityContextConstraints. |
| ruler.affinity | string | Hard node and soft zone anti-affinity | Affinity for ruler pods. Passed through `tpl` and, thus, to be configured as string |
| ruler.appProtocol | object | `{"grpc":""}` | Set the optional grpc service protocol. Ex: "grpc", "http2" or "https" |
| ruler.command | string | `nil` | Command to execute instead of defined in Docker image |
| ruler.directories | object | `{}` | Directories containing rules files |
| ruler.dnsConfig | object | `{}` | DNSConfig for ruler pods |
| ruler.enabled | bool | `false` | Specifies whether the ruler should be enabled |
| ruler.extraArgs | list | `[]` | Additional CLI args for the ruler |
| ruler.extraContainers | list | `[]` | Containers to add to the ruler pods |
| ruler.extraEnv | list | `[]` | Environment variables to add to the ruler pods |
| ruler.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the ruler pods |
| ruler.extraVolumeMounts | list | `[]` | Volume mounts to add to the ruler pods |
| ruler.extraVolumes | list | `[]` | Volumes to add to the ruler pods |
| ruler.hostAliases | list | `[]` | hostAliases to add |
| ruler.image.registry | string | `nil` | The Docker registry for the ruler image. Overrides `loki.image.registry` |
| ruler.image.repository | string | `nil` | Docker image repository for the ruler image. Overrides `loki.image.repository` |
| ruler.image.tag | string | `nil` | Docker image tag for the ruler image. Overrides `loki.image.tag` |
| ruler.initContainers | list | `[]` | Init containers to add to the ruler pods |
| ruler.kind | string | `"Deployment"` | Kind of deployment [StatefulSet/Deployment] |
| ruler.maxUnavailable | string | `nil` | Pod Disruption Budget maxUnavailable |
| ruler.nodeSelector | object | `{}` | Node selector for ruler pods |
| ruler.persistence.annotations | object | `{}` | Annotations for ruler PVCs |
| ruler.persistence.enabled | bool | `false` | Enable creating PVCs which is required when using recording rules |
| ruler.persistence.size | string | `"10Gi"` | Size of persistent disk |
| ruler.persistence.storageClass | string | `nil` | Storage class to be used. If defined, storageClassName: <storageClass>. If set to "-", storageClassName: "", which disables dynamic provisioning. If empty or set to null, no storageClassName spec is set, choosing the default provisioner (gp2 on AWS, standard on GKE, AWS, and OpenStack). |
| ruler.podAnnotations | object | `{}` | Annotations for ruler pods |
| ruler.podLabels | object | `{}` | Labels for compactor pods |
| ruler.priorityClassName | string | `nil` | The name of the PriorityClass for ruler pods |
| ruler.replicas | int | `1` | Number of replicas for the ruler |
| ruler.resources | object | `{}` | Resource requests and limits for the ruler |
| ruler.serviceLabels | object | `{}` | Labels for ruler service |
| ruler.terminationGracePeriodSeconds | int | `300` | Grace period to allow the ruler to shutdown before it is killed |
| ruler.tolerations | list | `[]` | Tolerations for ruler pods |
| runtimeConfig | object | `{}` | Provides a reloadable runtime configuration file for some specific configuration |
| serviceAccount.annotations | object | `{}` | Annotations for the service account |
| serviceAccount.automountServiceAccountToken | bool | `true` | Set this toggle to false to opt out of automounting API credentials for the service account |
| serviceAccount.create | bool | `true` | Specifies whether a ServiceAccount should be created |
| serviceAccount.imagePullSecrets | list | `[]` | Image pull secrets for the service account |
| serviceAccount.labels | object | `{}` | Labels for the service account |
| serviceAccount.name | string | `nil` | The name of the ServiceAccount to use. If not set and create is true, a name is generated using the fullname template |
| serviceMonitor.annotations | object | `{}` | ServiceMonitor annotations |
| serviceMonitor.enabled | bool | `false` | If enabled, ServiceMonitor resources for Prometheus Operator are created |
| serviceMonitor.interval | string | `nil` | ServiceMonitor scrape interval |
| serviceMonitor.labels | object | `{}` | Additional ServiceMonitor labels |
| serviceMonitor.matchExpressions | list | `[]` | Optional expressions to match on |
| serviceMonitor.metricRelabelings | list | `[]` | ServiceMonitor metric relabel configs to apply to samples before ingestion https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#endpoint |
| serviceMonitor.namespace | string | `nil` | Alternative namespace for ServiceMonitor resources |
| serviceMonitor.namespaceSelector | object | `{}` | Namespace selector for ServiceMonitor resources |
| serviceMonitor.relabelings | list | `[]` | ServiceMonitor relabel configs to apply to samples before scraping https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#relabelconfig |
| serviceMonitor.scheme | string | `"http"` | ServiceMonitor will use http by default, but you can pick https as well |
| serviceMonitor.scrapeTimeout | string | `nil` | ServiceMonitor scrape timeout in Go duration format (e.g. 15s) |
| serviceMonitor.targetLabels | list | `[]` | ServiceMonitor will add labels from the service to the Prometheus metric https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#servicemonitorspec |
| serviceMonitor.tlsConfig | string | `nil` | ServiceMonitor will use these tlsConfig settings to make the health check requests |
| tableManager.affinity | string | Hard node and soft zone anti-affinity | Affinity for table-manager pods. Passed through `tpl` and, thus, to be configured as string |
| tableManager.command | string | `nil` | Command to execute instead of defined in Docker image |
| tableManager.enabled | bool | `false` | Specifies whether the table-manager should be enabled |
| tableManager.extraArgs | list | `[]` | Additional CLI args for the table-manager |
| tableManager.extraContainers | list | `[]` | Containers to add to the table-manager pods |
| tableManager.extraEnv | list | `[]` | Environment variables to add to the table-manager pods |
| tableManager.extraEnvFrom | list | `[]` | Environment variables from secrets or configmaps to add to the table-manager pods |
| tableManager.extraVolumeMounts | list | `[]` | Volume mounts to add to the table-manager pods |
| tableManager.extraVolumes | list | `[]` | Volumes to add to the table-manager pods |
| tableManager.hostAliases | list | `[]` | hostAliases to add |
| tableManager.image.registry | string | `nil` | The Docker registry for the table-manager image. Overrides `loki.image.registry` |
| tableManager.image.repository | string | `nil` | Docker image repository for the table-manager image. Overrides `loki.image.repository` |
| tableManager.image.tag | string | `nil` | Docker image tag for the table-manager image. Overrides `loki.image.tag` |
| tableManager.nodeSelector | object | `{}` | Node selector for table-manager pods |
| tableManager.podAnnotations | object | `{}` | Annotations for table-manager pods |
| tableManager.podLabels | object | `{}` | Labels for table-manager pods |
| tableManager.priorityClassName | string | `nil` | The name of the PriorityClass for table-manager pods |
| tableManager.resources | object | `{}` | Resource requests and limits for the table-manager |
| tableManager.serviceLabels | object | `{}` | Labels for table-manager service |
| tableManager.terminationGracePeriodSeconds | int | `30` | Grace period to allow the table-manager to shutdown before it is killed |
| tableManager.tolerations | list | `[]` | Tolerations for table-manager pods |

## Components

The chart supports the components shown in the following table.
Ingester, distributor, querier, and query-frontend are always installed.
The other components are optional.

| Component | Optional | Enabled by default |
| --- | --- | --- |
| gateway |  ✅ |  ✅ |
| ingester |  ❎ | n/a |
| distributor |  ❎ | n/a |
| querier |  ❎ | n/a |
| query-frontend |  ❎ | n/a |
| table-manager |  ✅ |  ❎ |
| compactor |  ✅ |  ❎ |
| ruler |  ✅ |  ❎ |
| index-gateway |  ✅ |  ❎ |
| memcached-chunks |  ✅ |  ❎ |
| memcached-frontend |  ✅ |  ❎ |
| memcached-index-queries |  ✅ |  ❎ |
| memcached-index-writes |  ✅ |  ❎ |

## Configuration

This chart configures Loki in microservices mode.
It has been tested to work with [boltdb-shipper](https://grafana.com/docs/loki/latest/operations/storage/boltdb-shipper/)
and [memberlist](https://grafana.com/docs/loki/latest/configuration/#memberlist_config) while other storage and discovery options should work as well.
However, the chart does not support setting up Consul or Etcd for discovery,
and it is not intended to support these going forward.
They would have to be set up separately.
Instead, memberlist can be used which does not require a separate key/value store.
The chart creates a headless service for the memberlist which ingester, distributor, querier, and ruler are part of.

----

**NOTE:**
In its default configuration, the chart uses `boltdb-shipper` and `filesystem` as storage.
The reason for this is that the chart can be validated and installed in a CI pipeline.
However, this setup is not fully functional.
Querying will not be possible (or limited to the ingesters' in-memory caches) because that would otherwise require shared storage between ingesters and queriers
which the chart does not support and would require a volume that supports `ReadWriteMany` access mode anyways.
The recommendation is to use object storage, such as S3, GCS, MinIO, etc., or one of the other options documented at https://grafana.com/docs/loki/latest/storage/.

Alternatively, in order to quickly test Loki using the filestore, the [single binary chart](https://github.com/grafana/helm-charts/tree/main/charts/loki) can be used.

----

### Directory and File Locations

* Volumes are mounted to `/var/loki`. The various directories Loki needs should be configured as subdirectories (e. g. `/var/loki/index`, `/var/loki/cache`). Loki will create the directories automatically.
* The config file is mounted to `/etc/loki/config/config.yaml` and passed as CLI arg.

### Example configuration using memberlist, boltdb-shipper, and S3 for storage

```yaml
loki:
  structuredConfig:
    ingester:
      # Disable chunk transfer which is not possible with statefulsets
      # and unnecessary for boltdb-shipper
      max_transfer_retries: 0
      chunk_idle_period: 1h
      chunk_target_size: 1536000
      max_chunk_age: 1h
    storage_config:
      aws:
        s3: s3://eu-central-1
        bucketnames: my-loki-s3-bucket
      boltdb_shipper:
        shared_store: s3
    schema_config:
      configs:
        - from: 2020-09-07
          store: boltdb-shipper
          object_store: aws
          schema: v11
          index:
            prefix: loki_index_
            period: 24h
```

The above configuration selectively overrides default values found in the `loki.config` template file.

Using `loki.structuredConfig` it is possible to externally set most any configuration parameter (special considerations for elements of an array).

```
helm upgrade loki-distributed --install -f values.yaml --set loki.structuredConfig.storage_config.aws.bucketnames=my-loki-bucket
```

`loki.config`, `loki.schemaConfig` and `loki.storageConfig` may also be used in conjuction with `loki.structuredConfig`. Values found in `loki.structuredConfig` will take precedence. Array values, such as those found in `loki.schema_config` will be overridden wholesale and not amended to.

For `loki.schema_config` its generally expected that this will always be configured per usage as its values over time are in reference to the history of loki schema versions and schema configurations throughout the lifetime of a given loki instance.

Note that when using `loki.config` must be configured as string.
That's required because it is passed through the `tpl` function in order to support templating.

When using `loki.config` the passed in template must include template sections for `loki.schemaConfig` and `loki.storageConfig` for those to continue to work as expected.

Because the config file is templated, it is also possible to reference other values provided to helm e.g. externalize S3 bucket names:

```yaml
loki:
  config: |
    storage_config:
      aws:
        s3: s3://eu-central-1
        bucketnames: {{ .Values.bucketnames }}
```

```console
helm upgrade loki-distributed --install -f values.yaml --set bucketnames=my-loki-bucket
```

## Gateway

By default and inspired by Grafana's [Tanka setup](https://github.com/grafana/loki/tree/master/production/ksonnet/loki), the chart installs the gateway component which is an NGINX that exposes Loki's API
and automatically proxies requests to the correct Loki components (distributor, querier, query-frontend).
The gateway must be enabled if an Ingress is required, since the Ingress exposes the gateway only.
If the gateway is enabled, Grafana and log shipping agents, such as Promtail, should be configured to use the gateway.
If NetworkPolicies are enabled, they are more restrictive if the gateway is enabled.

## Metrics

Loki exposes Prometheus metrics.
The chart can create ServiceMonitor objects for all Loki components.

```yaml
serviceMonitor:
  enabled: true
```

Furthermore, it is possible to add Prometheus rules:

```yaml
prometheusRule:
  enabled: true
  groups:
    - name: loki-rules
      rules:
        - record: job:loki_request_duration_seconds_bucket:sum_rate
          expr: sum(rate(loki_request_duration_seconds_bucket[1m])) by (le, job)
        - record: job_route:loki_request_duration_seconds_bucket:sum_rate
          expr: sum(rate(loki_request_duration_seconds_bucket[1m])) by (le, job, route)
        - record: node_namespace_pod_container:container_cpu_usage_seconds_total:sum_rate
          expr: sum(rate(container_cpu_usage_seconds_total[1m])) by (node, namespace, pod, container)
```

## Caching

The chart can configure up to four Memcached instances for the various caches Lokis can use.
Configuration works the same for all caches.
The configuration of `memcached-chunks` below demonstrates setting additional options.

Exporters for the Memcached instances can be configured as well.

```yaml
memcachedExporter:
  enabled: true
```

### memcached-chunks

```yaml
memcachedChunks:
  enabled: true
  replicas: 2
  extraArgs:
    - -m 2048
    - -I 2m
    - -v
  resources:
    requests:
      cpu: 500m
      memory: 3Gi
    limits:
      cpu: "2"
      memory: 3Gi

loki:
  config: |
    chunk_store_config:
      chunk_cache_config:
        memcached:
          batch_size: 100
          parallelism: 100
        memcached_client:
          consistent_hash: true
          host: {{ include "loki.memcachedChunksFullname" . }}
          service: memcached-client
```

### memcached-frontend

```yaml
memcachedFrontend:
  enabled: true

loki:
  config: |
    query_range:
      cache_results: true
      results_cache:
        cache:
          memcached_client:
            consistent_hash: true
            host: {{ include "loki.memcachedFrontendFullname" . }}
            max_idle_conns: 16
            service: memcached-client
            timeout: 500ms
            update_interval: 1m
```

### memcached-index-queries

```yaml
memcachedIndexQueries:
  enabled: true

loki:
  config: |
    storage_config:
      index_queries_cache_config:
        memcached:
          batch_size: 100
          parallelism: 100
        memcached_client:
          consistent_hash: true
          host: {{ include "loki.memcachedIndexQueriesFullname" . }}
          service: memcached-client
```

### memcached-index-writes

NOTE: This cache is not used with `boltdb-shipper` and should not be enabled in that case.

```yaml
memcachedIndexWrite:
  enabled: true

loki:
  config: |
    chunk_store_config:
      write_dedupe_cache_config:
        memcached:
          batch_size: 100
          parallelism: 100
        memcached_client:
          consistent_hash: true
          host: {{ include "loki.memcachedIndexWritesFullname" . }}
          service: memcached-client
```

## Compactor

Compactor is an optional component which must explicitly be enabled.
The chart automatically sets the correct working directory as command-line arg.
The correct storage backend must be configured, e.g. `s3`.

```yaml
compactor:
  enabled: true

loki:
  config: |
    compactor:
      shared_store: s3
```

## Ruler

Ruler is an optional component which must explicitly be enabled.
In addition to installing the ruler, the chart also supports creating rules.
Rules files must be added to directories named after the tenants.
See `values.yaml` for a more detailed example.

```yaml
ruler:
  enabled: true
  directories:
    fake:
      rules.txt: |
        groups:
          - name: should_fire
            rules:
              - alert: HighPercentageError
                expr: |
                  sum(rate({app="loki"} |= "error" [5m])) by (job)
                    /
                  sum(rate({app="loki"}[5m])) by (job)
                    > 0.05
                for: 10m
                labels:
                  severity: warning
                annotations:
                  summary: High error percentage
```
