FROM node:12-alpine

WORKDIR /app
EXPOSE 80
RUN apk add curl

COPY . /app
