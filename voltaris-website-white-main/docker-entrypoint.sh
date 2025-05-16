#!/bin/sh

# This script allows for runtime environment variable injection

# Create env-config.js with the current environment variables
# This makes environment variables available to the React app at runtime
cat <<EOF > /usr/share/nginx/html/env-config.js
window._env_ = {
  API_URL: "${API_URL:-/api}",
  APP_ENV: "${APP_ENV:-production}",
  PUBLIC_URL: "${PUBLIC_URL:-}",
  REACT_APP_CUSTOM_VARIABLE: "${REACT_APP_CUSTOM_VARIABLE:-default_value}"
};
EOF

# Execute the CMD from the Dockerfile
exec "$@"
