.PHONY: install run build test cli

URL = https://lowess.github.io/hugo-preact-theme

dev:
	npm run dev

install:
	npm install

run:
	npm start

build:
	export BASE_URL=$(URL)
	npm run build

test:
	npm run test

cli:
	node ./tools/cli/cli.js
