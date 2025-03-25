set shell := ["bash", "-c"]
set positional-arguments

COMPOSE_CMD := "env HOST_UID=$(id -u) HOST_GID=$(id -g) docker compose"
PROXY_CMD := "docker compose -p proxy -f tools/proxy.yml"

# Spins up containers - including proxy for userfriendly URLs.
up: (proxy "up -d") build && info
  @{{COMPOSE_CMD}} up -d --remove-orphans --wait

# Wrapper for projects docker-compose config.
dc *args:
  @{{COMPOSE_CMD}} {{args}}

# Show process status
ps *args:
  @{{COMPOSE_CMD}} ps

# View output from containers.
logs *args:
  @{{COMPOSE_CMD}} logs {{args}}

# Enables building/pre-building images.
build *args:
  @{{COMPOSE_CMD}} build {{args}}

# Executes a command in a container.
# just exec cms bash
exec +args:
  @{{COMPOSE_CMD}} exec {{args}}

# Shell into a container without setting the environment.
# just console cms
console service:
  @{{COMPOSE_CMD}} run --rm \
  --labels="traefik.enable=false" \
  --no-deps \
  -e "INIT_SKIP=1" \
  {{service}} bash

# Stops containers
stop *args:
  @{{COMPOSE_CMD}} stop {{args}}

# Stops and deletes containers, networks, volumes...
down *args:
  @{{COMPOSE_CMD}} down {{args}}

# Wrapper for proxy's docker-compose config.
proxy *args:
  @{{PROXY_CMD}} {{args}}

# Information about running services & profiles.
info:
  #!/usr/bin/env bash
  set -euo pipefail
  # echo "### Compose Profiles"

  # TODO: add profiles.

  echo -e "\n### Virtual Hosts"

  # Get current project name.
  COMPOSE_PROJECT_NAME=$({{COMPOSE_CMD}} config --format json | jq -r ".name")
  docker ps --filter "label=com.docker.compose.project=${COMPOSE_PROJECT_NAME}" \
    --filter "label=traefik.enable" \
    --format 'table {{{{.Label "com.docker.compose.service"}}\t{{{{.State}}\t{{{{.Label "localhost.url"}}'

  echo -e "\n### Database"

  if [[ -n $({{COMPOSE_CMD}} ps cmsdb -q --status=running) ]]; then
    echo "CMS DB: $({{COMPOSE_CMD}} port cmsdb "3306")"
  else
    echo "CMS DB: N/A - cmsdb service not available"
  fi

# Execute psalm
psalm *args:
  @{{COMPOSE_CMD}} exec cms composer exec -- psalm {{args}}

# Execute cs-fixer
csfixer:
  @{{COMPOSE_CMD}} exec cms tools/php-cs-fixer/vendor/bin/php-cs-fixer fix src

# just db-import backoffice < dump.sql
# zcat dump.sql.gz | just db-import backoffice
# Import a database into backofficedb service.
db-import DATABASE:
  @{{COMPOSE_CMD}} exec -T cmsdb mysql -uroot -ppassword {{DATABASE}}