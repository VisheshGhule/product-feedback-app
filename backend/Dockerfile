# Stage 1: Build the app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Run the app
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

CMD ["node", "build/app.js"]
