FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --from=build /app/dist/product-feedback-app/browser /usr/share/nginx/html


RUN npm run build

EXPOSE 3000

CMD ["node", "build/app.js"]
