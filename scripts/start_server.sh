#!/bin/bash

export NVM_DIR="/home/ubuntu/.nvm"
export PATH="$NVM_DIR/versions/node/v20.19.2/bin:$PATH"

cd /home/ubuntu/product-feedback-app/backend || exit

npm run start >> /home/ubuntu/server.log 2>&1 &
