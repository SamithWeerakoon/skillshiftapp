FROM node:20.18.0-bullseye

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --save --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
ENV NODE_ENV production
CMD ["npm", "start"]
