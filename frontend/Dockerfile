# Stage 1: Build Angular App
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve with Express
FROM node:20-alpine

WORKDIR /app

# Copy only the built Angular files
COPY --from=build /app/dist/product-feedback-app/browser ./dist/product-feedback-app/browser

# Copy only server file
COPY server.js .

# Install ONLY express@4 (minimal setup to avoid path-to-regexp issues)
RUN npm install express@4

EXPOSE 4200

CMD ["node", "server.js"]
