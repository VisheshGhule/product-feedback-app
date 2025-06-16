# Stage 1: Build Angular app
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Remove default NGINX content
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular files from previous stage
COPY --from=build /app/dist/product-feedback-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
