# Stage 1: Build Angular App
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve Angular via Express
FROM node:20-alpine

WORKDIR /app

# Install express
COPY package*.json ./
RUN npm install

# Copy build output and server.js
COPY --from=build /app/dist/product-feedback-app/browser ./dist
COPY server.js .

EXPOSE 4200

CMD ["node", "server.js"]
