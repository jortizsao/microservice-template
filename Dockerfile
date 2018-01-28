FROM node:8-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY .babelrc .
COPY src ./src

RUN npm install && npm run build && rm -rf src

EXPOSE 3000

CMD npm run prod
