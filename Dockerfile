FROM node:14-alpine
WORKDIR /var/www/app
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build-ts

ENTRYPOINT ["npm","run","start"]
EXPOSE 8080
