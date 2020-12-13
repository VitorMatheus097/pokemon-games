FROM node:14.15.1 AS node
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm install
COPY . /usr/src/app
RUN npm run build

FROM nginx:1.13
COPY --from=node /usr/src/app/dist/pokemon-games /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
