FROM nginx:alpine

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.7.0

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY default.conf /etc/nginx/conf.d/

ENTRYPOINT ["dockerize","-wait", "tcp://db:3306","./docker-entrypoint.sh"]
CMD ["nginx","-g", "daemon off;"]