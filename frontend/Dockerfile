# Stage 1: Build Angular App
FROM node:20 as builder

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build --output-path=dist/app

# Stage 2: Serve via Express
FROM node:20
WORKDIR /app

COPY server.js .
COPY --from=builder /app/dist/app ./dist/app
COPY package*.json ./

RUN npm ci --omit=dev

EXPOSE 4200
CMD ["node", "server.js"]
