FROM node:16-alpine AS base

ENV APP_ROOT="/usr/src/app" \
  NEXT_TELEMETRY_DISABLED=1 \
  NODE_PORT="3000" \
  NPM_CONFIG_AUDIT=false \
  NPM_CONFIG_FUND=false \
  NPM_CONFIG_UPDATE_NOTIFIER=false

EXPOSE ${NODE_PORT}

RUN set -euo pipefail; \
  \
  apk add --no-cache --update \
  bash \
  ca-certificates \
  curl \
  git \
  make \
  shadow \
  sudo; \
  \
  npm install -g deps-ok; \
  \
  mkdir -p "${APP_ROOT}"; \
  chown node:node "${APP_ROOT}"; \
  \
  echo "chown node:node ${APP_ROOT}" > /usr/local/bin/init_volumes; \
  chmod +x /usr/local/bin/init_volumes


# Check versions
RUN node -v
RUN npm -v
# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \ 
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi


FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ARG NEXT_PUBLIC_HOST
ENV NEXT_PUBLIC_HOST="xcom.dev.localhost"
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1
 

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next
USER nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD npm start


FROM base as dev
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
CMD ["npm", "run", "dev"]