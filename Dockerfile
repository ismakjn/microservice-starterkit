FROM node:18-alpine

RUN mkdir -p /var/www/html

WORKDIR /var/www/html

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY ./src ./src

EXPOSE 3000