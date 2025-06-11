#!/bin/bash

# Load NVM
export NVM_DIR="/home/ubuntu/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 20

# Go to backend folder
cd /home/ubuntu/product-feedback-app/backend || exit

# Start the server in background and log output
npm run start >> /home/ubuntu/server.log 2>&1 &
