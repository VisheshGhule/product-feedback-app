# Stage 1: Build Angular App
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Node.js + Express
FROM node:20-alpine

WORKDIR /app

# Copy only the build output
COPY --from=build /app/dist/product-feedback-app/browser ./dist

# Copy server file
COPY server.js ./

# Install express
RUN npm install express

EXPOSE 4200
CMD ["node", "server.js"]
