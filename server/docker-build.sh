#/bin/bash
#https://blog.logrocket.com/node-js-docker-improve-dx/
#COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
DOCKER_BUILDKIT=1 docker build -t test-cpn-sign-api --build-arg NPM_TOKEN=1234 --target=prod .