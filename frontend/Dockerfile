# Stage 1 - Build Angular App
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Run app with Node.js (using Express)
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist/product-feedback-app/browser ./dist
COPY server.js ./
RUN npm install express

EXPOSE 4200
CMD ["node", "server.js"]
