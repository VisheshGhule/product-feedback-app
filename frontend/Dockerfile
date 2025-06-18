# Stage 1: Build the Angular app
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app using Node.js
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY server.js .

RUN npm install express

EXPOSE 4200

CMD ["node", "server.js"]
