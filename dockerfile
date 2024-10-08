FROM node:18.20-bullseye
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --save --legacy-peer-deps

COPY . .
RUN npm run build
EXPOSE 3000
ENV NODE_OPTIONS="--max-http-header-size=16384 --no-experimental-fetch"
ENTRYPOINT [ "./entrypoint.sh" ]