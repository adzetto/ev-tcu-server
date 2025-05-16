# Voltaris Website Docker Deployment Guide

This guide explains how to deploy the Voltaris website using Docker and Nginx, either locally or on a server.

## Prerequisites

- Docker and Docker Compose installed
- Git repository cloned to your local machine or server

## Quick Start

The simplest way to deploy is using our deployment script:

```bash
# Make the script executable
chmod +x docker-deploy.sh

# Deploy with default settings (port 3000)
./docker-deploy.sh deploy
```

After deployment, your website will be available at http://localhost:3000 (or your specified port).

## Deployment Options

### Using the Deployment Script

The `docker-deploy.sh` script provides a user-friendly interface for managing your Docker deployment:

```bash
# Deploy on port 8080 for development environment
./docker-deploy.sh deploy -p 8080 -e dev

# Check container status
./docker-deploy.sh status

# View container logs
./docker-deploy.sh logs

# Stop the container
./docker-deploy.sh stop

# Restart the container
./docker-deploy.sh restart
```

### Manual Deployment with Docker Compose

If you prefer to use Docker Compose directly:

```bash
# Create .env file for environment variables
echo "PORT=3000" > .env
echo "APP_ENV=production" >> .env

# Build and start the container
docker-compose up -d --build

# Stop the container
docker-compose down
```

## Configuration

### Port Configuration

By default, the container exposes port 80 internally and maps to port 3000 on your host. You can change this by:

1. Using the `-p` flag with the deployment script:
   ```bash
   ./docker-deploy.sh deploy -p 8080
   ```

2. Setting the PORT environment variable:
   ```bash
   PORT=8080 ./docker-deploy.sh deploy
   ```

3. Editing the `.env` file:
   ```
   PORT=8080
   ```

### Environment Variables

You can pass environment variables to your React application by:

1. Setting them in the `.env` file
2. Passing them when running the deployment script
3. Adding them to `docker-compose.yml`

Available variables:
- `PORT`: Host port to map to container port 80
- `APP_ENV`: Application environment (dev, staging, production)
- `API_URL`: Backend API URL
- `REACT_APP_CUSTOM_VARIABLE`: Example of a custom variable

## Nginx Configuration

The Nginx configuration in `nginx/nginx.conf` is optimized for React SPAs with:

1. Proper routing for React Router
2. Compression for better performance
3. Cache control headers
4. Security headers

You can modify this file to add custom server configurations, like proxying to an API.

## Production Deployment Tips

For production deployments:

1. Set up SSL/TLS certificates for HTTPS
2. Consider using a reverse proxy like Traefik or Nginx Proxy Manager
3. Set up automated backups for any persistent data
4. Implement health checks and monitoring
5. Use Docker secrets for sensitive information

## Troubleshooting

### Container won't start

Check logs with:
```bash
./docker-deploy.sh logs
```

### Nginx configuration issues

Inspect the container:
```bash
docker exec -it voltaris-website /bin/sh
```

Check Nginx logs:
```bash
docker exec voltaris-website cat /var/log/nginx/error.log
```

### Port already in use

Change the port mapping:
```bash
./docker-deploy.sh deploy -p 8080
```
