# Stage 1: Build Angular app
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve using Node (with express server.js)
FROM node:20-alpine
WORKDIR /app

# Copy build output from Stage 1
COPY --from=build /app/dist/product-feedback-app/browser /app/dist

# Copy server.js to serve static files
COPY server.js .

# Install express
RUN npm install express

EXPOSE 4200
CMD ["node", "server.js"]
