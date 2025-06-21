# Stage 1: Build the Angular app
FROM node:20 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Node.js + Express
FROM node:20

WORKDIR /app

# Copy only the compiled Angular output
COPY --from=builder /app/dist/app ./dist/product-feedback-app/browser

# Copy server and only what's needed to serve
COPY package*.json ./

# Install only production dependencies (skip Angular CLI, etc.)
RUN npm install --only=production

EXPOSE 4200

CMD ["node", "server.js"]
