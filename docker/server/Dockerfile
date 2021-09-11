FROM ruby:2.7.0

ENV SERVER_ROOT /server
RUN mkdir $SERVER_ROOT
WORKDIR $SERVER_ROOT

COPY ./docker/server/docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]