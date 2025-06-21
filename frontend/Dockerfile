# Stage 1: Build Angular app
FROM node:20-alpine as build

WORKDIR /app

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build Angular app
COPY . .
RUN npm run build

# Stage 2: Run with Express
FROM node:20-alpine

WORKDIR /app

# ✅ Copy only required build output
COPY --from=build /app/dist/product-feedback-app/browser ./dist/product-feedback-app/browser

# ✅ Copy your Express server
COPY server.js .

# ✅ Force express@4 to avoid path-to-regexp issues
RUN npm install express@4

EXPOSE 4200

CMD ["node", "server.js"]
