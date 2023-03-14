FROM node:16
WORKDIR /
ENV PATH /node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4500
CMD [ "node", "server.js" ]