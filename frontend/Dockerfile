# Use Node image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Install Angular CLI globally (needed for ng serve)
RUN npm install -g @angular/cli

# Expose default Angular port
EXPOSE 4200

# Start the Angular app
CMD ["ng", "serve", "--host", "0.0.0.0"]
