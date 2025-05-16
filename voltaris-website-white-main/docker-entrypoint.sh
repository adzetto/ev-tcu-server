#!/bin/sh

# This script allows for runtime environment variable injection
# Only expose safe environment variables to the client

# Create env-config.js with only public environment variables
# Keep sensitive variables server-side
cat <<EOF > /usr/share/nginx/html/env-config.js
window._env_ = {
  // Only expose public URLs and non-sensitive settings
  APP_ENV: "${APP_ENV:-production}",
  PUBLIC_URL: "${PUBLIC_URL:-}",
  // Public feature flags and UI settings can go here
  REACT_APP_CUSTOM_VARIABLE: "${REACT_APP_CUSTOM_VARIABLE:-default_value}"
  // DO NOT include API keys, secrets, or sensitive endpoints here
};
EOF

# Set internal environment variables for server-side use only
# These are not exposed to the browser
export API_URL="${API_URL:-/api}"
export INTERNAL_CONFIG="${INTERNAL_CONFIG:-default}"

# Execute the CMD from the Dockerfile
exec "$@"
