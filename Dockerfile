# STAGE 1
FROM node:14.15.0-alpine3.10 as expbase

WORKDIR /exp-ui

COPY . .

RUN npm install

RUN npm run build

RUN ls -alh

# STAGE 2
FROM nginx:alpine

COPY --from=expbase /exp-ui/build /usr/share/nginx/html
