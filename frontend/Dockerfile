# Stage 1: Build Angular App
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve using Express
FROM node:20-alpine

WORKDIR /app
COPY --from=build /app/dist/product-feedback-app/browser ./dist/product-feedback-app/browser
COPY server.js ./

RUN npm install express@4

EXPOSE 4200
CMD ["node", "server.js"]
