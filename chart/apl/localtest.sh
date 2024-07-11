set -eu

# Run:
# export ENV_DIR=/tmp/env-dir && rm -rf /tmp/env-dir && mkdir /tmp/env-dir && chart/apl/localtest.sh

# echo "127.0.0.1 gitea-http.gitea.svc.cluster.local" >> /etc/hosts

# Set port forwarding so otomi the 'otomi apply' can push values to gitea
# k port-forward -n gitea svc/gitea-http 3000:3000

export IN_DOCKER=false
# OTOMI_DEV_APPLY_LABEL - In local test you can narrow down the helm releases that are going to be installed while perogotim otomi apply
# export OTOMI_DEV_APPLY_LABEL=pkg=gitea
export VALUES_INPUT=${VALUES_INPUT:-'tests/bootstrap/input.yaml'}
# export DOCKER_EXTRA_ARGS="-v $(dirname $VALUES_INPUT):$(dirname $VALUES_INPUT)"
export VERBOSITY=${VERBOSITY:-'1'}

binzx/otomi bootstrap
binzx/otomi apply
