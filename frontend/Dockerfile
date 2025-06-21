# Stage 1: Build Angular app
FROM node:20-alpine as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve with Express
FROM node:20-alpine
WORKDIR /app

# Copy runtime-only dependencies and install
COPY package.runtime.json ./package.json
RUN npm install

# Copy server and built frontend
COPY server.js .
COPY --from=build /app/dist/product-feedback-app/browser ./dist/product-feedback-app/browser

EXPOSE 4200
CMD ["npm", "start"]
