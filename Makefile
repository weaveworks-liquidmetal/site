.PHONY: build
build:
	npm ci
	npm run build

.PHONY: deploy
deploy: generate build
	npm run deploy

.PHONY: generate
generate:
	./hack/capmvm.sh
