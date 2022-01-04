#FROM node:lts-alpine as base
# --------------> The build image
#FROM node:latest AS build
FROM public.ecr.aws/docker/library/node:latest AS build
ARG NPM_TOKEN
WORKDIR /usr/src/app
COPY package*.json /usr/src/app
COPY yarn.lock /usr/src/app
# RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc && \
#    npm ci --only=production && \
#    rm -f .npmrc
# RUN npm ci --only=production
RUN yarn install --immutable --immutable-cache --check-cache --prod
# RUN npm install --production

#FROM build AS dev
#FROM node:latest AS dev
FROM public.ecr.aws/docker/library/node:latest AS dev
ENV NODE_ENV development
RUN npm install -g nodemon && npm install
#RUN adduser -S app
#RUN chown -R app /usr/src/app
USER node
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
EXPOSE 9000
CMD ["nodemon", "server.js"]

# --------------> The production image
#FROM node:lts-alpine@sha256:b2da3316acdc2bec442190a1fe10dc094e7ba4121d029cb32075ff59bb27390a AS prod
FROM public.ecr.aws/docker/library/node:lts-alpine AS prod
RUN apk add dumb-init
ENV NODE_ENV production
#RUN npm ci --only=production
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node . /usr/src/app
EXPOSE 9000
CMD ["dumb-init", "node", "server.js"]
