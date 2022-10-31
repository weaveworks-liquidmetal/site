#!/bin/bash

TEMPDIR=$(mktemp -d)
CTY_VERSION="v0.0.8"

cleanup() {
	popd &> /dev/null || exit 1
	rm -rf "$TEMPDIR"
}

get_crd() {
	local object="$1"

	wget -q "https://raw.githubusercontent.com/weaveworks-liquidmetal/cluster-api-provider-microvm/main/config/crd/bases/infrastructure.cluster.x-k8s.io_$object.yaml" \
		-O "$TEMPDIR/$object.yaml"
}

download_cty() {
	curl -sL "https://github.com/Skarlso/crd-to-sample-yaml/releases/download/$CTY_VERSION/crd-to-yaml_linux_amd64.tar.gz" \
		| tar xz
}

generate_yaml() {
	local object="$1"

	./crd-to-yaml generate -c "$object.yaml"
}

add_yaml_to_page() {
	local input="$1"
	local count="$2"
	local object="$3"

	echo "$input" | awk -v n="$count" \
		-v patt='```yaml' \
		-v content="$(cat "$TEMPDIR/${object}_v1alpha1.yaml")" \
		'{print} $0 ~ patt && ++count == n {print content}'
}

trap cleanup EXIT

START=$(pwd)

pushd "$TEMPDIR" || exit 1

# fetch the CRDs from github
get_crd "microvmclusters"
get_crd "microvmmachines"
get_crd "microvmmachinetemplates"

# generate some nice yamls
download_cty
generate_yaml "microvmclusters"
generate_yaml "microvmmachines"
generate_yaml "microvmmachinetemplates"

# add those yamls to the site doc
one=$(add_yaml_to_page "$(cat "$START/docs/guides/capmvm.md")" 1 "MicrovmCluster")
two=$(add_yaml_to_page "$one" 2 "MicrovmMachine")
add_yaml_to_page "$two" 3 "MicrovmMachineTemplate" > three.yaml
mv three.yaml "$START/docs/guides/capmvm.md"

## update to make map[string]string clearer
## TODO
