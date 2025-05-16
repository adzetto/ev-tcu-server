#!/bin/bash

# Super simple deploy script - minimal setup to debug the build issue
# This bypasses all the complex Docker Compose and SSL setup

# Color codes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Simple Debug Deploy ====${NC}"

# Create a temporary build container
echo -e "\n${YELLOW}Creating temporary build container...${NC}"

# Create dockerfile.simple for debugging
cat > dockerfile.simple << 'EOF'
FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN echo "{}" > package-lock.json
RUN npm install --no-package-lock
RUN npm install nth-check@2.1.1 postcss@8.4.31 http-proxy-middleware@2.0.9 three@0.160.0 @react-three/drei@9.99.0 --no-package-lock
COPY . .
# Debug what's using BatchedMesh
RUN find src -type f -name "*.js" | xargs grep -l "BatchedMesh" || echo "No direct BatchedMesh imports found"
# Check drei imports
RUN find src -type f -name "*.js" | xargs grep -l "import.*from.*drei" || echo "No drei imports found"

# Try to build without three-mesh-bvh
CMD ["npm", "run", "build"]
EOF

# Build a debug image
echo -e "\n${YELLOW}Building debug image...${NC}"
docker build -t voltaris-debug -f dockerfile.simple .

if [ $? -ne 0 ]; then
    echo -e "${RED}Debug build failed.${NC}"
    exit 1
fi

# Run the debug container interactively
echo -e "\n${YELLOW}Running debug container...${NC}"
echo -e "${GREEN}You'll now enter an interactive container shell.${NC}"
echo -e "${YELLOW}Try these commands to debug:${NC}"
echo -e "  - ${GREEN}find src -type f -exec grep -l \"BatchedMesh\" {} \\;${NC}"
echo -e "  - ${GREEN}find src -type f -exec grep -l \"import.*from.*drei\" {} \\;${NC}"
echo -e "  - ${GREEN}npm run build${NC}"
echo -e "  - ${GREEN}exit${NC} (to leave the container when done)"

docker run -it --rm voltaris-debug /bin/sh

# If we get here, the user has exited the debug container
echo -e "\n${YELLOW}Debug session ended.${NC}"
echo -e "If you were able to build successfully in the container, run ./direct-deploy.sh again." 