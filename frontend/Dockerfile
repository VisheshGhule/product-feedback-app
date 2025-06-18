# Stage 1: Build Angular app
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Remove default content
RUN rm -rf /usr/share/nginx/html/*

# ✅ Copy only the CONTENTS of /browser, not the folder itself
COPY --from=build /app/dist/product-feedback-app/browser/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
