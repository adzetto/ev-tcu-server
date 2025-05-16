#!/bin/bash

# Quick Deploy Script for Voltaris Website
# This handles all the prerequisites and deploys the website

# Color codes for better readability
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Voltaris Website Quick Deploy ====${NC}"

# Step 1: Make sure scripts are executable
echo -e "\n${YELLOW}Making scripts executable...${NC}"
chmod +x install-docker-compose.sh
chmod +x docker-deploy.sh
chmod +x create-cert-dirs.sh
chmod +x init-letsencrypt.sh
echo -e "${GREEN}Scripts are now executable.${NC}"

# Step 2: Install Docker Compose if needed
echo -e "\n${YELLOW}Checking for Docker Compose...${NC}"
./install-docker-compose.sh
if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to set up Docker Compose. Exiting.${NC}"
    exit 1
fi

# Step 3: Create certificate directories
echo -e "\n${YELLOW}Creating certificate directories...${NC}"
./create-cert-dirs.sh
echo -e "${GREEN}Certificate directories created.${NC}"

# Step 4: Check if domain.conf is configured
if grep -q "yourdomain.com" domain.conf; then
    echo -e "\n${YELLOW}Please configure your domain in domain.conf before continuing.${NC}"
    echo -e "Enter your domain (e.g., example.com):"
    read domain_name
    echo -e "Enter your email address for SSL certificates:"
    read email_address
    
    # Update domain.conf
    sed -i "s/yourdomain.com/$domain_name/g" domain.conf
    sed -i "s/your-email@example.com/$email_address/g" domain.conf
    echo -e "${GREEN}Domain configuration updated.${NC}"
    
    # Also update init-letsencrypt.sh
    sed -i "s/yourdomain.com/$domain_name/g" init-letsencrypt.sh
    sed -i "s/your-email@example.com/$email_address/g" init-letsencrypt.sh
    echo -e "${GREEN}SSL script updated.${NC}"
    
    # Also update nginx/ssl.conf
    sed -i "s/yourdomain.com/$domain_name/g" nginx/ssl.conf
    echo -e "${GREEN}Nginx configuration updated.${NC}"
fi

# Step 4.5: Fix init-letsencrypt.sh script for Docker Compose V2
echo -e "\n${YELLOW}Fixing init-letsencrypt.sh for Docker Compose V2...${NC}"
if grep -q "docker-compose " init-letsencrypt.sh; then
    # Replace docker-compose commands with docker compose
    sed -i 's/docker-compose /docker compose /g' init-letsencrypt.sh
    echo -e "${GREEN}init-letsencrypt.sh updated for Docker Compose V2.${NC}"
fi

# Step 5: Deploy with Docker
echo -e "\n${YELLOW}Starting deployment...${NC}"
source domain.conf
./docker-deploy.sh deploy --port 80 --domain $DOMAIN --email $EMAIL

if [ $? -ne 0 ]; then
    echo -e "${RED}Deployment failed. Please check the errors above.${NC}"
    echo -e "\n${YELLOW}Trying direct Docker commands as fallback...${NC}"
    
    echo -e "\n${YELLOW}Building Docker image directly...${NC}"
    docker build -t voltaris-website:latest .
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Direct Docker build failed as well. Exiting.${NC}"
        exit 1
    fi
    
    echo -e "\n${YELLOW}Running Docker container directly...${NC}"
    docker run -d --name voltaris-website -p 80:80 voltaris-website:latest
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}Deployment successful using direct Docker commands!${NC}"
        echo -e "Your website should now be accessible at http://localhost"
        echo -e "Note: SSL is not configured with this fallback method."
    else
        echo -e "${RED}All deployment methods failed. Please check Docker installation.${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}Deployment successful!${NC}"
    echo -e "Your website should now be accessible at http://$DOMAIN"
    echo -e "SSL might take a few minutes to set up completely."
fi 