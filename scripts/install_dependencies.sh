#!/bin/bash

# Load nvm so we can use node/npm
export NVM_DIR="/home/ubuntu/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 20

# Move into backend directory
cd /home/ubuntu/product-feedback-app/backend || exit

# Ensure the current user (ubuntu) owns the directory
sudo chown -R ubuntu:ubuntu /home/ubuntu/product-feedback-app/backend

# Now install dependencies
npm install
