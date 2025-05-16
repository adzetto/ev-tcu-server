#!/bin/bash

# Script to initialize SSL certificates using Let's Encrypt
# Based on the process outlined in https://medium.com/@pentacent/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71

if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Error: docker-compose is not installed.' >&2
  exit 1
fi

# Set the domains and email for Let's Encrypt
domains=(ev-tcu-server.iyte.edu.tr)
rsa_key_size=4096
data_path="./certbot"
email="admin@ev-tcu-server.iyte.edu.tr" # Replace with your email

# Prompt for confirmation
echo "Domains: ${domains[*]}"
echo "Email: $email"
read -p "Continue with these settings? (y/N): " decision
if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
  echo "Aborted."
  exit 0
fi

# Create directories for certbot
if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "Creating directories for certbot configuration..."
  mkdir -p "$data_path/conf"
  mkdir -p "$data_path/www"
fi

# Download recommended TLS parameters
if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ]; then
  echo "Downloading recommended TLS parameters..."
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
fi

if [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "Downloading DH parameters..."
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
fi

echo "Creating dummy certificates for ${domains[*]}..."
path="/etc/letsencrypt/live/${domains[0]}"
mkdir -p "$data_path/conf/live/${domains[0]}"
docker-compose run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:$rsa_key_size -days 1\
    -keyout '$path/privkey.pem' \
    -out '$path/fullchain.pem' \
    -subj '/CN=localhost'" certbot
echo

# Update ssl.conf with the domain name
echo "Updating ssl.conf with your domain..."
sed -i "s/yourdomain.com/${domains[0]}/g" nginx/ssl.conf

echo "Starting nginx..."
docker-compose up --force-recreate -d nginx-proxy
echo

echo "Removing dummy certificates..."
docker-compose run --rm --entrypoint "\
  rm -Rf /etc/letsencrypt/live/${domains[0]} && \
  rm -Rf /etc/letsencrypt/archive/${domains[0]} && \
  rm -Rf /etc/letsencrypt/renewal/${domains[0]}.conf" certbot
echo

echo "Requesting Let's Encrypt certificates..."
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

docker-compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $domain_args \
    --email $email \
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --force-renewal" certbot
echo

echo "Restarting nginx..."
docker-compose exec nginx-proxy nginx -s reload

echo "Done! The certificates have been obtained and nginx has been configured." 