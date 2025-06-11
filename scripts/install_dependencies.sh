#!/bin/bash

# Load NVM and set Node version
export NVM_DIR="/home/ubuntu/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 20

# Go to backend folder
cd /home/ubuntu/product-feedback-app/backend || exit

# Fix file ownership just in case
sudo chown -R ubuntu:ubuntu .

# Install dependencies (including cross-env and typescript)
npm install

# Build TypeScript code to /build folder
npm run build
