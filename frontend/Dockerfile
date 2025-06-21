# Stage 2: Serve using Express
FROM node:20-alpine

WORKDIR /app

# Copy built Angular files from build stage
COPY --from=build /app/dist/product-feedback-app/browser ./dist/product-feedback-app/browser

# Copy the Express server script
COPY server.js ./

# ✅ Install express version 4 explicitly to avoid path-to-regexp issues
RUN npm install express@4

EXPOSE 4200

CMD ["node", "server.js"]
