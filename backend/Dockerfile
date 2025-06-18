# Stage 1: Build Angular App
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve App with NGINX
FROM nginx:alpine

# Clean default NGINX content
RUN rm -rf /usr/share/nginx/html/*

# ✅ Correct path to built Angular files
COPY --from=build /app/dist/product-feedback-app/browser/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
