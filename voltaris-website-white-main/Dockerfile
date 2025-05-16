# Multi-stage build for optimized production image
# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files 
COPY package.json ./

# Create empty package-lock.json to prevent postinstall script failure
RUN echo "{}" > package-lock.json

# Temporarily disable postinstall script to avoid errors
RUN sed -i 's/"postinstall": "npx npm-force-resolutions"/"postinstall": "echo Skipping resolutions in Docker build"/g' package.json

# Install dependencies without using package-lock.json
# This avoids the version resolution issues
RUN npm install --no-package-lock

# Manually install secure versions of packages with vulnerabilities
RUN npm install nth-check@2.1.1 postcss@8.4.31 http-proxy-middleware@2.0.9 --no-package-lock

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Setup Nginx to serve the built app
FROM nginx:alpine

# Copy custom nginx config for React SPA routing
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost || exit 1

# Expose port 80
EXPOSE 80

# Use a script as entrypoint to allow env variable substitution at runtime
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
