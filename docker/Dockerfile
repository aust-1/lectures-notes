# syntax=docker/dockerfile:1.7
# Contexte de build : ./site (voir .github/workflows/build-and-deploy.yml) ;
# fichiers exclus : docker/Dockerfile.dockerignore.

############################
# 1) Build (Node + pnpm)
############################
FROM node:22.23-alpine3.24 AS build
WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

# pnpm à la version de « packageManager » (package.json), installé par corepack
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack install && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Commit servi, lu par le job deploy pour vérifier la version en ligne
ARG REVISION=unknown
RUN printf '%s\n' "$REVISION" > build/revision.txt

############################
# 2) Service (nginx sans privilèges, port 8080)
############################
FROM nginxinc/nginx-unprivileged:1.31.7-alpine3.24 AS serve

ARG VERSION=dev
ARG BUILD_DATE=unknown
ARG REVISION=unknown
LABEL org.opencontainers.image.title="documentation" \
    org.opencontainers.image.source="https://github.com/aust-1/lectures-notes" \
    org.opencontainers.image.version=$VERSION \
    org.opencontainers.image.created=$BUILD_DATE \
    org.opencontainers.image.revision=$REVISION

# Configuration nginx écrite ici : le contexte de build (./site) ne contient pas docker/.
COPY <<'NGINX' /etc/nginx/conf.d/default.conf
# Site statique Docusaurus. TLS est terminé par le Caddy partagé du VPS (Caddyfile du dépôt) : HTTP ici.
# Inclus dans le bloc http de /etc/nginx/nginx.conf (image nginx-unprivileged).

server_tokens off;

# Fichiers versionnés par empreinte (JS, CSS, polices et images importées par webpack) : cache d'un an.
# Tout le reste (HTML, fichiers de static/) : revalidation à chaque visite (ETag, réponse 304).
map $uri $er_cache_control {
    "~^/assets/(js|css|fonts|images|files)/" "public, max-age=31536000, immutable";
    default                                  "no-cache";
}

server {
    listen 8080 default_server;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;
    charset utf-8;

    # Redirections relatives : le schéma vu par nginx (http) ne fuit jamais dans un Location.
    absolute_redirect off;

    # Les notes sont générées en dossier/index.html : /maths/algebra est servi directement,
    # sans redirection vers /maths/algebra/.
    location / {
        try_files $uri $uri/index.html $uri.html =404;
    }

    # Page 404 de Docusaurus (navigation, lien vers l'accueil), avec le statut 404.
    error_page 404 /404.html;

    # Aucun add_header dans les blocs location : nginx ne les hériterait plus.
    add_header Cache-Control $er_cache_control always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), interest-cohort=()" always;
    add_header Cross-Origin-Opener-Policy "same-origin" always;
    # 'unsafe-inline' : scripts en ligne de Docusaurus (thème clair/sombre) et styles en ligne de KaTeX.
    # analytics.eliott-roussille.fr : statistiques Rybbit. api.github.com, avatars.githubusercontent.com
    # et static.vecteezy.com : contributeurs du pied de page, à retirer quand ils seront calculés au build (#15).
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://analytics.eliott-roussille.fr; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://avatars.githubusercontent.com https://static.vecteezy.com; font-src 'self' data:; connect-src 'self' https://analytics.eliott-roussille.fr https://api.github.com; worker-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests" always;
}
NGINX

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:8080/ || exit 1
