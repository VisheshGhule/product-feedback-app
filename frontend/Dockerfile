# Stage 1: Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy all files and build Angular project
COPY . .
RUN npm run build

# Stage 2: Serve using Express
FROM node:20-alpine

WORKDIR /app

# Copy built Angular files from build stage
COPY --from=build /app/dist/product-feedback-app/browser ./dist/product-feedback-app/browser

# Copy the Express server script
COPY server.js ./

# Install only express (since we're just serving static files)
RUN npm install express

# Expose port 4200
EXPOSE 4200

# Run the server
CMD ["node", "server.js"]
