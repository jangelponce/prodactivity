FROM node:12

WORKDIR /client

# COPY client/package*.json ./

RUN yarn global add @vue/cli
RUN yarn global add @vue/cli-init

# RUN npm install

COPY ./docker/client/docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]
