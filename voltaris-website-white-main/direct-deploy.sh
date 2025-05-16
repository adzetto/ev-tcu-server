#!/bin/bash

# Direct Deploy Script - Bypasses Docker Compose entirely
# This is a simplified script that directly uses Docker commands

# Color codes for better readability
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Voltaris Website Direct Deploy ====${NC}"

# Step 1: Build the Docker image
echo -e "\n${YELLOW}Building Docker image...${NC}"
docker build -t voltaris-website:latest .

if [ $? -ne 0 ]; then
    echo -e "${RED}Docker build failed. Please check the errors above.${NC}"
    exit 1
fi
echo -e "${GREEN}Docker image built successfully!${NC}"

# Step 2: Check if container already exists
echo -e "\n${YELLOW}Checking for existing containers...${NC}"
if docker ps -a | grep -q "voltaris-website"; then
    echo -e "${YELLOW}Removing existing voltaris-website container...${NC}"
    docker rm -f voltaris-website
fi

# Step 3: Run the container
echo -e "\n${YELLOW}Starting container...${NC}"
docker run -d --name voltaris-website -p 80:80 voltaris-website:latest

if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to start container. Please check the errors above.${NC}"
    exit 1
fi
echo -e "${GREEN}Container started successfully!${NC}"

# Step 4: Verify deployment
echo -e "\n${YELLOW}Verifying deployment...${NC}"
sleep 2
if docker ps | grep -q "voltaris-website"; then
    echo -e "${GREEN}Deployment verified! Your website is now running.${NC}"
    echo -e "You can access it at http://localhost"
    echo -e "\n${YELLOW}Container logs:${NC}"
    docker logs --tail 10 voltaris-website
else
    echo -e "${RED}Container is not running. Deployment may have failed.${NC}"
    echo -e "${YELLOW}Checking container logs:${NC}"
    docker logs voltaris-website
    exit 1
fi 