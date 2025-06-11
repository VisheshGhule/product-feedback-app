#!/bin/bash

export NVM_DIR="/home/ubuntu/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 20

cd /home/ubuntu/product-feedback-app/backend || exit

# Start server in background and log output
npm run start >> /home/ubuntu/server.log 2>&1 &
