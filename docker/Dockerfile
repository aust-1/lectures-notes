# syntax=docker/dockerfile:1.6

############################
# 1) Build stage (Node)
############################
FROM node:20-alpine AS build
WORKDIR /app

# Install deps (support npm/pnpm/yarn selon lockfile)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
    if [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable && pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    else npm i; fi

# Build
COPY . .
RUN npm run build

############################
# 2) Serve stage (Nginx)
############################
FROM nginx:alpine AS serve

# Optional labels (tu peux lire ces args au build)
ARG VERSION=dev
ARG BUILD_DATE=unknown
LABEL org.opencontainers.image.version=$VERSION \
    org.opencontainers.image.created=$BUILD_DATE

# Static site
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
