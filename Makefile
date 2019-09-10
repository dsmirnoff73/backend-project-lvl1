install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
starteven:
	npx babel-node src/bin/brain-even.js
publish:
	npm publish --dry-run
build:
	rm -rf dist
	npm run build
lint:
	npx eslint