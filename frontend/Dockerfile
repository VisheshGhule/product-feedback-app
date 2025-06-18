# Stage 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Express
FROM node:20-alpine

WORKDIR /app

# Copy only built Angular browser files into a clean path
COPY --from=build /app/dist/product-feedback-app/browser/index.html ./browser/index.html

# Copy server.js into container
COPY server.js ./

# Install express only (no need for dev deps)
RUN npm install express

EXPOSE 4200

CMD ["node", "server.js"]
