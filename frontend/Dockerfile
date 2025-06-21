# Stage 1: Build Angular app
FROM node:20-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve via Express
FROM node:20-alpine
WORKDIR /app

COPY --from=build /app/dist/product-feedback-app/browser ./dist/product-feedback-app/browser
COPY server.js .
RUN npm install express@4

EXPOSE 4200
CMD ["node", "server.js"]
