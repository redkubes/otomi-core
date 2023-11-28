set -eu

# Run:
# export ENV_DIR=/tmp/env-dir && rm -rf /tmp/env-dir && mkdir /tmp/env-dir && chart/otomi/localtest.sh

export IN_DOCKER=1
export VALUES_INPUT=${VALUES_INPUT:-'tests/bootstrap/input.yaml'}
# export DOCKER_EXTRA_ARGS="-v $(dirname $VALUES_INPUT):$(dirname $VALUES_INPUT)"
export VERBOSITY=${VERBOSITY:-'1'}

binzx/otomi bootstrap -t
binzx/otomi apply-gitops -t
