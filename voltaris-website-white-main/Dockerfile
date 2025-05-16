# Multi-stage build for optimized production image
# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Setup Nginx to serve the built app
FROM nginx:alpine

# Copy custom nginx config for React SPA routing
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

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
