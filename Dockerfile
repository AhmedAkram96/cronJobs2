FROM node:16-alpine
WORKDIR "/"
COPY ./package.json ./
RUN yarn install
COPY . .
CMD ["yarn", "run", "dev"]
