#!/bin/bash

# Load NVM so npm is available
export NVM_DIR="/home/ubuntu/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 20

# Navigate to backend
cd /home/ubuntu/product-feedback-app/backend || exit

# Start the server
npm run start
