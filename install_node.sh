#!/bin/bash

# Installs nvm (Node Version Manager)
echo "Installing NVM..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Source nvm to make it available in the current terminal session
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install Node.js
echo "Installing Node.js version 20..."
nvm install 20

# Verify Node.js version
NODE_VERSION=$(node -v)
echo "Node.js version: $NODE_VERSION" # should print `v20.15.0`

# Verify NPM version
NPM_VERSION=$(npm -v)
echo "NPM version: $NPM_VERSION" # should print `10.7.0`

