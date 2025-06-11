#!/bin/bash

# Manually load Node.js and npm into PATH (bypass nvm limitations)
export NVM_DIR="/home/ubuntu/.nvm"
export PATH="$NVM_DIR/versions/node/v20.19.2/bin:$PATH"

cd /home/ubuntu/product-feedback-app/backend || exit

# Start the backend in the background and log output
npm run start >> /home/ubuntu/server.log 2>&1 &
