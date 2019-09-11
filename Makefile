install:
	npm install
start:
	npx babel-node src/bin/brain-games.js
starteven:
	npx babel-node src/bin/brain-even.js
startcalc:
	npx babel-node src/bin/brain-calc.js
startgcd:
	npx babel-node src/bin/brain-gcd.js
startprogress:
	npx babel-node src/bin/brain-progression.js
startprime:
	npx babel-node src/bin/brain-prime.js
publish:
	npm publish --dry-run

lint:
	npx eslint --fix .