NODE 		= docker-compose run --rm node node

exercice-1:
	$(NODE) ./exercice-1/string.js

exercice-1-testing:
	$(NODE) ./exercice-1/testing.js


.PHONY: exercice-1 exercice-1-testing