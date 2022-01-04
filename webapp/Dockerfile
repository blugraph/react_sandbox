#FROM node:lts-alpine as base
# --------------> The build image
#FROM node:latest AS build
FROM public.ecr.aws/docker/library/node:lts AS build
ARG NPM_TOKEN
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
COPY yarn.lock /usr/src/app
# RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc && \
#    npm ci --only=production && \
#    rm -f .npmrc
# RUN npm ci --only=production
RUN yarn install --immutable --immutable-cache --check-cache --prod
#RUN npm install --production
COPY --chown=node:node . /usr/src/app
ENV NODE_ENV production
ENV NODE_OPTIONS --max-old-space-size=2048
# RUN npm run build
RUN yarn build
#RUN yarn install && yarn build

#FROM build AS dev
# FROM node:latest AS dev
# FROM public.ecr.aws/docker/library/node:latest AS dev
# ENV NODE_ENV development
# RUN npm install -g nodemon && npm install
# #RUN adduser -S app
# #RUN chown -R app /usr/src/app
# USER node
# WORKDIR /usr/src/app
# COPY --chown=node:node . /usr/src/app
# EXPOSE 9000
# CMD ["nodemon", "bin/www"]

# --------------> The production image
#FROM nginx:alpine@sha256:af466e4f12e3abe41fcfb59ca0573a3a5c640573b389d5287207a49d1324abd8 AS prod
#FROM nginx:alpine AS prod
FROM public.ecr.aws/nginx/nginx:alpine AS prod
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
COPY --from=build /usr/src/app/build /usr/share/nginx/html
# COPY build /usr/share/nginx/html
COPY nginx_svr.conf /etc/nginx/conf.d/default.conf
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
#EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
