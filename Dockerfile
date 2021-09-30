FROM node:lts-stretch-slim AS builder
WORKDIR /app
EXPOSE 3000
ADD ./package.json .
RUN npm install
ADD . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build/* ./