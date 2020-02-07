FROM node:12

WORKDIR /app/client/

COPY package.json yarn.lock /app/client/

COPY . /app/client

RUN yarn

EXPOSE 3000

CMD ["yarn", "dev"]