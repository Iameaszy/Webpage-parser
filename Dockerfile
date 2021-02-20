FROM node:14.15.1-alpine

WORKDIR /app

COPY ./package.json .

COPY ./yarn.lock .

RUN yarn install

COPY . .


RUN npm run build

RUN chmod +x ./wait-for-it.sh

EXPOSE 80

CMD [ "npm","run", "start:prod" ]