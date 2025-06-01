include .env

define restart_docker
	@$(MAKE) down
	@$(MAKE) up_dev
endef

SHELL := /bin/bash
APP_SERVICE := node
PROJECT_PATH := $(CURDIR)
CURRENT_USER := $(shell id -u)
CURRENT_GROUP := $(shell id -g)

############################################################
## Init develop application environment.
############################################################
init:
	@$(MAKE) build
	@sed -i "s|DOCKER_USER_ID=.*|DOCKER_USER_ID=$(CURRENT_USER)|g" .env
	@sed -i "s|DOCKER_GROUP_ID=.*|DOCKER_GROUP_ID=$(CURRENT_GROUP)|g" .env
	@grep -v "$(NODE_APP_DOMAIN)" /etc/hosts | sudo tee /etc/hosts > /dev/null
	@echo "127.0.0.1 $(NODE_APP_DOMAIN)" | sudo tee -a /etc/hosts > /dev/null

build:
	@docker-compose build

up:
	@docker-compose up -d

up_dev:
	@NODE_MAIN_COMMAND="npm run dev" docker-compose up

down:
	@docker-compose down

shell:
	@docker-compose exec $(APP_SERVICE) $(SHELL) || true
