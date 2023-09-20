FROM node:16 AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --legacy-peer-deps
COPY . /app
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /var/www
COPY nginx.conf.template /etc/nginx/nginx.conf
RUN apk add --no-cache tzdata jq
RUN cp /usr/share/zoneinfo/Europe/Brussels /etc/localtime
RUN echo "Europe/Brussels" >  /etc/timezone

EXPOSE 80
RUN chmod +w /var/www
CMD ["nginx", "-g", "daemon off;"]
#https://serverfault.com/a/919212
