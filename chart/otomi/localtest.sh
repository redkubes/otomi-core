set -e

export OTOMI_VALUES_INPUT=/tmp/otomi/secret/values.yaml
export CI=1

binzx/otomi bootstrap
binzx/otomi apply
