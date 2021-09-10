FROM node:latest as build-stage
RUN mkdir app
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install
COPY . .
RUN yarn build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/src/.vuepress/dist /app
COPY nginx.conf /etc/nginx/nginx.conf