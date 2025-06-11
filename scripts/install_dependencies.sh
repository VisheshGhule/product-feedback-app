#!/bin/bash

# Load Node.js via NVM
export NVM_DIR="/home/ubuntu/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 20

cd /home/ubuntu/product-feedback-app/backend || exit

# Ensure correct ownership
sudo chown -R ubuntu:ubuntu .

# Install all dependencies including cross-env and typescript
npm install

# Build the app (compile TypeScript to JavaScript)
npm run build
