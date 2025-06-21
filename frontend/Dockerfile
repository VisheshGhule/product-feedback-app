# Step 1: Build Angular app
FROM node:20 as builder

WORKDIR /app
COPY . .

RUN npm ci
RUN npm run build --output-path=dist/app

# Step 2: Serve with Express
FROM node:20

WORKDIR /app
COPY --from=builder /app/dist/app /app/dist/app
COPY server.js .
COPY package*.json ./

RUN npm ci --omit=dev

EXPOSE 4200

CMD ["node", "server.js"]
