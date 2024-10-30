# react/next app
FROM node:21.7.3-alpine

WORKDIR /home/client/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]