#!/bin/bash

# =================================================================
# Voltaris Website Docker Deployment Script
# Features:
# - Configurable port
# - Environment selection (dev, staging, production)
# - Build and deployment options
# - Container management
# - Monitoring and diagnostics
# - SSL certificate management
# - Enhanced security features
# =================================================================

# ANSI color codes for better UI
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
GRAY='\033[0;37m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Default configuration
PORT=80
ENVIRONMENT="production"
BUILD=true
DETACHED=true
CONTAINER_NAME="voltaris-website"
DOCKER_COMPOSE_FILE="docker-compose.yml"
LOGS_DIR="./voltaris-logs"
CERT_DIR="./certbot"
USE_SSL=true
DOMAIN="yourdomain.com"
EMAIL="your-email@example.com"

# Show banner
show_banner() {
    echo -e "${BLUE}${BOLD}"
    echo -e "██╗   ██╗ ██████╗ ██╗  ████████╗ █████╗ ██████╗ ██╗███████╗"
    echo -e "██║   ██║██╔═══██╗██║  ╚══██╔══╝██╔══██╗██╔══██╗██║██╔════╝"
    echo -e "██║   ██║██║   ██║██║     ██║   ███████║██████╔╝██║███████╗"
    echo -e "╚██╗ ██╔╝██║   ██║██║     ██║   ██╔══██║██╔══██╗██║╚════██║"
    echo -e " ╚████╔╝ ╚██████╔╝███████╗██║   ██║  ██║██║  ██║██║███████║"
    echo -e "  ╚═══╝   ╚═════╝ ╚══════╝╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝"
    echo -e "${NC}"
    echo -e "${CYAN}${BOLD}Docker Deployment Tool${NC} ${GRAY}v2.0.0${NC} ${GREEN}(SSL Secured)${NC}"
    echo -e "\n"
}

# Check if Docker is installed and running
check_docker() {
    echo -e "${YELLOW}${BOLD}Checking Docker...${NC}"
    
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}${BOLD}Error: Docker is not installed or not in PATH.${NC}"
        echo -e "Please install Docker from https://docs.docker.com/get-docker/"
        exit 1
    else
        echo -e "${GREEN}✓ Docker is installed${NC}"
    fi
    
    if ! docker info &> /dev/null; then
        echo -e "${RED}${BOLD}Error: Docker daemon is not running or you don't have permissions.${NC}"
        echo -e "Start Docker Desktop or docker service and try again."
        exit 1
    else
        echo -e "${GREEN}✓ Docker daemon is running${NC}"
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        echo -e "${YELLOW}Warning: docker-compose not found as standalone command.${NC}"
        echo -e "${GRAY}Will use 'docker compose' instead (Docker Compose V2).${NC}"
        DOCKER_COMPOSE_CMD="docker compose"
    else
        echo -e "${GREEN}✓ docker-compose is installed${NC}"
        DOCKER_COMPOSE_CMD="docker-compose"
    fi
}

# Initialize environment
initialize() {
    echo -e "${YELLOW}${BOLD}Initializing environment...${NC}"
    
    # Create logs directory
    if [ ! -d "$LOGS_DIR" ]; then
        mkdir -p "$LOGS_DIR"
        echo -e "${GREEN}✓ Created logs directory${NC}"
    fi
    
    # Create SSL certificate directories
    if [ "$USE_SSL" = true ] && [ ! -d "$CERT_DIR" ]; then
        mkdir -p "$CERT_DIR/conf"
        mkdir -p "$CERT_DIR/www"
        echo -e "${GREEN}✓ Created SSL certificate directories${NC}"
    fi
    
    # Check for required files
    if [ ! -f "Dockerfile" ]; then
        echo -e "${RED}${BOLD}Error: Dockerfile not found.${NC}"
        exit 1
    fi
    
    if [ ! -f "$DOCKER_COMPOSE_FILE" ]; then
        echo -e "${RED}${BOLD}Error: $DOCKER_COMPOSE_FILE not found.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✓ All required files found${NC}"
    
    # Check and update SSL configuration in nginx
    if [ "$USE_SSL" = true ]; then
        if [ -f "nginx/ssl.conf" ]; then
            echo -e "${GREEN}✓ SSL configuration found${NC}"
            
            # Update domain and other settings in SSL config
            echo -e "${YELLOW}Updating SSL configuration with domain: $DOMAIN${NC}"
            sed -i -e "s/yourdomain.com/$DOMAIN/g" nginx/ssl.conf
            
            echo -e "${GREEN}✓ SSL configuration updated${NC}"
        else
            echo -e "${RED}${BOLD}Error: SSL configuration file not found.${NC}"
            echo -e "Please create nginx/ssl.conf for SSL support or set --no-ssl flag"
            exit 1
        fi
    fi
    
    # Check for .env file and create if not exists
    if [ ! -f ".env" ]; then
        echo "PORT=$PORT" > .env
        echo "APP_ENV=$ENVIRONMENT" >> .env
        echo "API_URL=/api" >> .env
        echo "PUBLIC_URL=https://$DOMAIN" >> .env
        echo "# Add other environment variables here" >> .env
        echo -e "${GREEN}✓ Created default .env file${NC}"
    else
        echo -e "${GREEN}✓ Using existing .env file${NC}"
    fi
}

# Setup SSL certificates
setup_ssl() {
    if [ "$USE_SSL" = true ]; then
        echo -e "${YELLOW}${BOLD}Setting up SSL certificates...${NC}"
        
        # Check if init-letsencrypt.sh exists
        if [ ! -f "init-letsencrypt.sh" ]; then
            echo -e "${RED}${BOLD}Error: init-letsencrypt.sh not found.${NC}"
            echo -e "Please create the initialization script for Let's Encrypt"
            exit 1
        fi
        
        # Make sure the script is executable
        chmod +x init-letsencrypt.sh
        
        # Update domain and email in the script
        sed -i -e "s/domains=.*/domains=($DOMAIN www.$DOMAIN)/g" init-letsencrypt.sh
        sed -i -e "s/email=.*/email=\"$EMAIL\"/g" init-letsencrypt.sh
        
        echo -e "${GREEN}✓ Updated SSL certificate setup script${NC}"
        
        # Run the script
        echo -e "${YELLOW}Running Let's Encrypt initialization script...${NC}"
        ./init-letsencrypt.sh
        
        if [ $? -ne 0 ]; then
            echo -e "${RED}${BOLD}Error: SSL certificate setup failed.${NC}"
            echo -e "${YELLOW}Continuing without SSL, but you should fix this later.${NC}"
        else
            echo -e "${GREEN}${BOLD}SSL certificates set up successfully!${NC}"
        fi
    fi
}

# Apply security hardening
apply_security_hardening() {
    echo -e "${YELLOW}${BOLD}Applying security hardening...${NC}"
    
    # Create a security check file
    SECURITY_FILE="$LOGS_DIR/security_check.log"
    echo "Security check performed on $(date)" > $SECURITY_FILE
    
    # Check if running as root (not recommended)
    if [ "$(id -u)" = "0" ]; then
        echo -e "${YELLOW}Warning: Running as root is not recommended for security reasons.${NC}"
        echo "WARNING: Script run as root" >> $SECURITY_FILE
    else
        echo -e "${GREEN}✓ Not running as root${NC}"
        echo "PASS: Not running as root" >> $SECURITY_FILE
    fi
    
    # Check file permissions
    echo -e "${YELLOW}Checking file permissions...${NC}"
    if [ -d "$CERT_DIR/conf" ]; then
        chmod -R 600 $CERT_DIR/conf/*.pem 2>/dev/null
        echo -e "${GREEN}✓ Applied restrictive permissions to SSL certificates${NC}"
        echo "PASS: Set SSL certificate permissions" >> $SECURITY_FILE
    fi
    
    # Check if Docker daemon is exposed
    if docker info 2>/dev/null | grep -q "tcp://0.0.0.0"; then
        echo -e "${RED}Warning: Docker API is publicly exposed!${NC}"
        echo "WARNING: Docker API is publicly exposed" >> $SECURITY_FILE
    else
        echo -e "${GREEN}✓ Docker API is not publicly exposed${NC}"
        echo "PASS: Docker API is not publicly exposed" >> $SECURITY_FILE
    fi
    
    echo -e "${GREEN}${BOLD}Security checks completed.${NC}"
    echo -e "${GRAY}Results saved to $SECURITY_FILE${NC}"
}

# Build the Docker image
build_image() {
    echo -e "${YELLOW}${BOLD}Building Docker image...${NC}"
    
    # Use the appropriate docker-compose command
    $DOCKER_COMPOSE_CMD -f $DOCKER_COMPOSE_FILE build --no-cache
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}${BOLD}Error: Docker image build failed.${NC}"
        exit 1
    else
        echo -e "${GREEN}${BOLD}Docker image built successfully!${NC}"
    fi
}

# Deploy the container
deploy_container() {
    echo -e "${YELLOW}${BOLD}Deploying container...${NC}"
    
    # Check if container is already running
    if docker ps -q -f name=$CONTAINER_NAME | grep -q .; then
        echo -e "${YELLOW}Container $CONTAINER_NAME is already running.${NC}"
        read -p "Do you want to stop and redeploy it? (y/N) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${YELLOW}Stopping existing container...${NC}"
            $DOCKER_COMPOSE_CMD -f $DOCKER_COMPOSE_FILE down
        else
            echo -e "${YELLOW}Deployment aborted.${NC}"
            return 1
        fi
    fi
    
    # Set environment variables if needed
    export PORT=$PORT
    export APP_ENV=$ENVIRONMENT
    
    # Deploy with docker-compose
    if [ "$DETACHED" = true ]; then
        $DOCKER_COMPOSE_CMD -f $DOCKER_COMPOSE_FILE up -d
    else
        $DOCKER_COMPOSE_CMD -f $DOCKER_COMPOSE_FILE up
    fi
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}${BOLD}Error: Container deployment failed.${NC}"
        exit 1
    else
        echo -e "${GREEN}${BOLD}Container deployed successfully!${NC}"
    fi
    
    # Check if the container is actually running
    if docker ps -q -f name=$CONTAINER_NAME | grep -q .; then
        echo -e "${GREEN}${BOLD}Container $CONTAINER_NAME is running.${NC}"
        
        # Get the container's IP
        CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $CONTAINER_NAME)
        
        echo -e "${GREEN}Container IP: $CONTAINER_IP${NC}"
        if [ "$USE_SSL" = true ]; then
            echo -e "${GREEN}Website available at: https://$DOMAIN${NC}"
            echo -e "${GREEN}Also available at: http://localhost:$PORT (redirects to HTTPS)${NC}"
        else
            echo -e "${GREEN}Website available at: http://localhost:$PORT${NC}"
        fi
    else
        echo -e "${RED}${BOLD}Warning: Container was started but is not running.${NC}"
        echo -e "${YELLOW}Check logs for more information.${NC}"
    fi
}

# Show container status
show_status() {
    echo -e "${YELLOW}${BOLD}Container status:${NC}"
    
    if docker ps -q -f name=$CONTAINER_NAME | grep -q .; then
        echo -e "${GREEN}${BOLD}Container $CONTAINER_NAME is running.${NC}"
        
        # Get container details
        CONTAINER_ID=$(docker ps -q -f name=$CONTAINER_NAME)
        CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $CONTAINER_NAME)
        CONTAINER_CREATED=$(docker inspect -f '{{ .Created }}' $CONTAINER_NAME)
        CONTAINER_STATUS=$(docker inspect -f '{{ .State.Status }}' $CONTAINER_NAME)
        CONTAINER_HEALTH=$(docker inspect -f '{{ .State.Health.Status }}' $CONTAINER_NAME 2>/dev/null || echo "N/A")
        
        echo -e "${CYAN}Details:${NC}"
        echo -e "  ${GRAY}Container ID:${NC} ${GREEN}$CONTAINER_ID${NC}"
        echo -e "  ${GRAY}IP Address:${NC} ${GREEN}$CONTAINER_IP${NC}"
        echo -e "  ${GRAY}Created:${NC} ${GREEN}$CONTAINER_CREATED${NC}"
        echo -e "  ${GRAY}Status:${NC} ${GREEN}$CONTAINER_STATUS${NC}"
        echo -e "  ${GRAY}Health:${NC} ${GREEN}$CONTAINER_HEALTH${NC}"
        
        if [ "$USE_SSL" = true ]; then
            echo -e "  ${GRAY}Port Mapping:${NC} ${GREEN}80, 443${NC}"
            echo -e "  ${GRAY}Website URL:${NC} ${GREEN}https://$DOMAIN${NC}"
            
            # Check SSL certificate status
            if [ -d "$CERT_DIR/conf/live/$DOMAIN" ]; then
                # Get expiry date
                CERT_EXPIRY=$(docker run --rm -v $PWD/$CERT_DIR/conf:/etc/letsencrypt certbot/certbot certificates | grep "Expiry" | head -1 | awk '{print $3, $4, $5, $6}')
                echo -e "  ${GRAY}SSL Certificate:${NC} ${GREEN}Active, expires on $CERT_EXPIRY${NC}"
            else
                echo -e "  ${GRAY}SSL Certificate:${NC} ${YELLOW}Not found or not yet configured${NC}"
            fi
        else
            echo -e "  ${GRAY}Port Mapping:${NC} ${GREEN}$PORT -> 80${NC}"
            echo -e "  ${GRAY}Website URL:${NC} ${GREEN}http://localhost:$PORT${NC}"
        fi
    else
        echo -e "${YELLOW}Container $CONTAINER_NAME is not running.${NC}"
    fi
    
    # Check for security issues
    echo -e "\n${CYAN}Security Status:${NC}"
    if docker ps | grep -q certbot; then
        echo -e "  ${GRAY}Certbot Service:${NC} ${GREEN}Running${NC}"
    else
        echo -e "  ${GRAY}Certbot Service:${NC} ${YELLOW}Not running${NC}"
    fi
    
    # Check if ports 80 and 443 are open
    if command -v nc &> /dev/null; then
        if nc -z -w1 localhost 80; then
            echo -e "  ${GRAY}Port 80 (HTTP):${NC} ${GREEN}Open${NC}"
        else
            echo -e "  ${GRAY}Port 80 (HTTP):${NC} ${RED}Closed${NC}"
        fi
        
        if nc -z -w1 localhost 443; then
            echo -e "  ${GRAY}Port 443 (HTTPS):${NC} ${GREEN}Open${NC}"
        else
            echo -e "  ${GRAY}Port 443 (HTTPS):${NC} ${RED}Closed${NC}"
        fi
    fi
}

# Show container logs
show_logs() {
    echo -e "${YELLOW}${BOLD}Container logs:${NC}"
    
    if docker ps -a -q -f name=$CONTAINER_NAME | grep -q .; then
        docker logs $CONTAINER_NAME
    else
        echo -e "${YELLOW}Container $CONTAINER_NAME does not exist.${NC}"
    fi
}

# Stop container
stop_container() {
    echo -e "${YELLOW}${BOLD}Stopping container...${NC}"
    
    if docker ps -q -f name=$CONTAINER_NAME | grep -q .; then
        $DOCKER_COMPOSE_CMD -f $DOCKER_COMPOSE_FILE down
        echo -e "${GREEN}${BOLD}Container stopped.${NC}"
    else
        echo -e "${YELLOW}Container $CONTAINER_NAME is not running.${NC}"
    fi
}

# Restart container
restart_container() {
    echo -e "${YELLOW}${BOLD}Restarting container...${NC}"
    
    if docker ps -a -q -f name=$CONTAINER_NAME | grep -q .; then
        $DOCKER_COMPOSE_CMD -f $DOCKER_COMPOSE_FILE restart
        echo -e "${GREEN}${BOLD}Container restarted.${NC}"
    else
        echo -e "${YELLOW}Container $CONTAINER_NAME does not exist. Use deploy instead.${NC}"
    fi
}

# Renew SSL certificates
renew_certificates() {
    echo -e "${YELLOW}${BOLD}Renewing SSL certificates...${NC}"
    
    if [ "$USE_SSL" = false ]; then
        echo -e "${YELLOW}SSL is not enabled. Use --ssl to enable it.${NC}"
        return 1
    fi
    
    if docker ps -q -f name="certbot" | grep -q .; then
        echo -e "${YELLOW}Manually triggering certificate renewal...${NC}"
        docker exec certbot certbot renew
        
        if [ $? -ne 0 ]; then
            echo -e "${RED}${BOLD}Certificate renewal failed.${NC}"
            return 1
        else
            echo -e "${GREEN}${BOLD}Certificates renewed successfully.${NC}"
            
            # Reload nginx to apply new certificates
            if docker ps -q -f name="nginx-proxy" | grep -q .; then
                echo -e "${YELLOW}Reloading Nginx to apply new certificates...${NC}"
                docker exec nginx-proxy nginx -s reload
                echo -e "${GREEN}${BOLD}Nginx reloaded.${NC}"
            fi
        fi
    else
        echo -e "${YELLOW}Certbot container is not running. Starting certificate renewal process...${NC}"
        
        # Run the certbot container for renewal
        docker run --rm -v $PWD/$CERT_DIR/conf:/etc/letsencrypt -v $PWD/$CERT_DIR/www:/var/www/certbot certbot/certbot renew
        
        if [ $? -ne 0 ]; then
            echo -e "${RED}${BOLD}Certificate renewal failed.${NC}"
            return 1
        else
            echo -e "${GREEN}${BOLD}Certificates renewed successfully.${NC}"
            
            # Restart services to apply new certificates
            echo -e "${YELLOW}Restarting services to apply new certificates...${NC}"
            $DOCKER_COMPOSE_CMD -f $DOCKER_COMPOSE_FILE restart nginx-proxy
            echo -e "${GREEN}${BOLD}Services restarted.${NC}"
        fi
    fi
}

# Show help
show_help() {
    echo -e "${BLUE}${BOLD}Voltaris Website Docker Deployment Tool - Help${NC}"
    echo -e "${GRAY}Deploy your Voltaris website using Docker and Nginx with SSL${NC}\n"
    
    echo -e "${CYAN}USAGE:${NC}"
    echo -e "  ${GRAY}./docker-deploy.sh <command> [options]${NC}\n"
    
    echo -e "${CYAN}COMMANDS:${NC}"
    echo -e "  ${GREEN}deploy${NC}    ${GRAY}Build and deploy the container${NC}"
    echo -e "  ${GREEN}status${NC}    ${GRAY}Show container status${NC}"
    echo -e "  ${GREEN}logs${NC}      ${GRAY}Show container logs${NC}"
    echo -e "  ${GREEN}stop${NC}      ${GRAY}Stop the container${NC}"
    echo -e "  ${GREEN}restart${NC}   ${GRAY}Restart the container${NC}"
    echo -e "  ${GREEN}renew-ssl${NC} ${GRAY}Renew SSL certificates${NC}"
    echo -e "  ${GREEN}secure${NC}    ${GRAY}Apply security hardening${NC}"
    echo -e "  ${GREEN}help${NC}      ${GRAY}Show this help message${NC}\n"
    
    echo -e "${CYAN}OPTIONS:${NC}"
    echo -e "  ${GREEN}--port, -p <port>${NC}         ${GRAY}Specify port (default: 80)${NC}"
    echo -e "  ${GREEN}--env, -e <environment>${NC}   ${GRAY}Set environment: dev, staging, prod (default: production)${NC}"
    echo -e "  ${GREEN}--domain, -d <domain>${NC}     ${GRAY}Domain name for SSL (default: yourdomain.com)${NC}"
    echo -e "  ${GREEN}--email, -m <email>${NC}       ${GRAY}Email for Let's Encrypt (default: your-email@example.com)${NC}"
    echo -e "  ${GREEN}--no-ssl, -ns${NC}             ${GRAY}Disable SSL${NC}"
    echo -e "  ${GREEN}--no-build, -nb${NC}           ${GRAY}Skip building the image${NC}"
    echo -e "  ${GREEN}--foreground, -fg${NC}         ${GRAY}Run in foreground (not detached)${NC}\n"
    
    echo -e "${CYAN}EXAMPLES:${NC}"
    echo -e "  ${GRAY}./docker-deploy.sh deploy${NC}"
    echo -e "  ${GRAY}./docker-deploy.sh deploy -d example.com -m admin@example.com${NC}"
    echo -e "  ${GRAY}./docker-deploy.sh deploy -p 8080 -e dev -ns${NC}"
    echo -e "  ${GRAY}./docker-deploy.sh renew-ssl${NC}"
    echo -e "  ${GRAY}./docker-deploy.sh status${NC}\n"
    
    return 0
}

# Parse command line arguments
parse_arguments() {
    COMMAND=${1:-help}
    shift || true
    
    while [[ $# -gt 0 ]]; do
        case $1 in
            --port|-p)
                PORT="$2"
                shift 2
                ;;
            --env|-e)
                ENVIRONMENT="$2"
                shift 2
                ;;
            --domain|-d)
                DOMAIN="$2"
                shift 2
                ;;
            --email|-m)
                EMAIL="$2"
                shift 2
                ;;
            --no-ssl|-ns)
                USE_SSL=false
                shift
                ;;
            --no-build|-nb)
                BUILD=false
                shift
                ;;
            --foreground|-fg)
                DETACHED=false
                shift
                ;;
            --help|-h)
                show_help
                exit 0
                ;;
            *)
                echo -e "${RED}Unknown option: $1${NC}"
                show_help
                exit 1
                ;;
        esac
    done
}

# Main execution
main() {
    show_banner
    
    # Parse command line arguments
    parse_arguments "$@"
    
    # Check Docker installation
    check_docker
    
    # Process command
    case $COMMAND in
        deploy)
            initialize
            if [ "$USE_SSL" = true ]; then
                setup_ssl
            fi
            apply_security_hardening
            if [ "$BUILD" = true ]; then
                build_image
            fi
            deploy_container
            ;;
        status)
            show_status
            ;;
        logs)
            show_logs
            ;;
        stop)
            stop_container
            ;;
        restart)
            restart_container
            ;;
        renew-ssl)
            renew_certificates
            ;;
        secure)
            apply_security_hardening
            ;;
        help)
            show_help
            ;;
        *)
            echo -e "${RED}Unknown command: $COMMAND${NC}"
            show_help
            exit 1
            ;;
    esac
    
    exit 0
}

# Call main with all arguments
main "$@"
