# @title hostnetworkingports
#
# Containers must disable hostNetworking and port binding on the host
#
# @kinds apps/DaemonSet apps/Deployment apps/StatefulSet core/Pod
package psphostnetworkingports
import data.lib.core
import data.lib.pods

policyID = "psphostnetworkingports"


violation[msg] {
  core.parameters.psphostnetworkingports.enabled
  pod_has_hostnetwork
  msg := sprintf("Policy: %s - HostNetwork not allowed, pod/%v", [policyID, core.name])
}

pod_has_hostnetwork {
  pods.pod.spec.hostNetwork
}

