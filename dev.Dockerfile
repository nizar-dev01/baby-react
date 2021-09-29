FROM node:lts-stretch-slim
WORKDIR /app
EXPOSE 3000
ADD ./package.json .
RUN npm install
ADD . .
CMD npm start