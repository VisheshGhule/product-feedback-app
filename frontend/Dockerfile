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

# Copy built Angular files from previous stage
COPY --from=build /app/dist/product-feedback-app/browser ./dist

# Copy server file
COPY server.js .

# Install only express
RUN npm install express

EXPOSE 4200

CMD ["node", "server.js"]
