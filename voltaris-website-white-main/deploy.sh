#!/bin/bash

# Voltaris Website Deployment Script
# This script automates the process of building, committing, and deploying your website to GitHub Pages

# Colors for better readability
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Voltaris Website Deployment Script ===${NC}"

# Step 1: Build the project
echo -e "\n${YELLOW}Building the project...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "\n${YELLOW}Build failed. Aborting deployment.${NC}"
    exit 1
fi
echo -e "${GREEN}Build successful!${NC}"

# Step 2: Add all changes to git
echo -e "\n${YELLOW}Adding all changes to git...${NC}"
git add .
echo -e "${GREEN}Changes added!${NC}"

# Step 3: Get commit message from user
echo -e "\n${YELLOW}Please enter a commit message:${NC}"
read -p "> " commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update website content $(date '+%Y-%m-%d %H:%M:%S')"
    echo -e "No message provided. Using default: ${commit_message}"
fi

# Step 4: Commit changes
echo -e "\n${YELLOW}Committing changes...${NC}"
git commit -m "$commit_message"
echo -e "${GREEN}Changes committed!${NC}"

# Step 5: Push to GitHub
echo -e "\n${YELLOW}Pushing to GitHub...${NC}"
git push origin main
if [ $? -ne 0 ]; then
    echo -e "\n${YELLOW}Push failed. Please check your network connection or repository access.${NC}"
    exit 1
fi
echo -e "${GREEN}Push successful!${NC}"

# Deployment complete
echo -e "\n${GREEN}=== Deployment process complete! ===${NC}"
echo -e "${YELLOW}Your changes have been pushed to GitHub.${NC}"
echo -e "${YELLOW}GitHub Actions will now deploy your website to GitHub Pages.${NC}"
echo -e "${YELLOW}You can check the progress in the 'Actions' tab of your GitHub repository.${NC}"
