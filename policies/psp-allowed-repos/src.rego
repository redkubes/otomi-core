# @title Images must come from allowed repositories only
#
# We can have a list of allowed sources and deny 
# all containers that do not come from a trusted repository source
#
# @kinds apps/DaemonSet apps/Deployment apps/StatefulSet core/Pod
package allowedrepos

import data.lib.core
import data.lib.pods
import data.lib.exceptions
import data.lib.parameters

policyID = "psp-allowed-repos"

violation[{"msg": msg}] {
  not exceptions.is_exception(policyID)
  pods.containers[container]
  satisfied := [good | repo = parameters.parameters(policyID).repos[_] ; good = startswith(container.image, repo)]
  not any(satisfied)
  msg := sprintf("Policy %s: - container <%v> has an invalid image repo <%v>, allowed repos are %v", [policyID, container.name, container.image, parameters.parameters(policyID).repos])
}
