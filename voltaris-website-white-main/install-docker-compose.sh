#!/bin/bash

# Script to install Docker Compose V2

echo "Checking for Docker Compose..."

# Check if docker compose V2 is available
if docker compose version &>/dev/null; then
    echo "Docker Compose V2 is already installed."
    exit 0
fi

# Check if docker-compose V1 is available
if docker-compose --version &>/dev/null; then
    echo "Docker Compose V1 is installed. We'll continue using it."
    exit 0
fi

echo "Installing Docker Compose V2..."

# Install Docker Compose plugin
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.24.6/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose

# Verify installation
if docker compose version &>/dev/null; then
    echo "Docker Compose V2 installed successfully!"
else
    echo "Failed to install Docker Compose V2. Please install it manually."
    exit 1
fi

echo "Creating docker-compose symlink for compatibility..."
ln -sf $DOCKER_CONFIG/cli-plugins/docker-compose /usr/local/bin/docker-compose

echo "Installation complete. You can now use both 'docker compose' and 'docker-compose' commands." 