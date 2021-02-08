# STAGE 1
FROM node:14.15.0-alpine3.10 as expbase

WORKDIR /exp-ui

COPY . .

RUN npm install

RUN npm run build

# STAGE 2
FROM nginx:alpine

COPY --from=expbase /exp-ui/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
