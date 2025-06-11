#!/bin/bash

# Load NVM manually (so npm/node are available)
export NVM_DIR="/home/ubuntu/.nvm"
source "$NVM_DIR/nvm.sh"

# Use node version (just to be safe)
nvm use 20

# Go to the correct backend path and install deps
cd /home/ubuntu/product-feedback-app/backend || exit
npm install
