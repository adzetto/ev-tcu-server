const fs = require('fs');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json'));

// Ensure resolutions exist
if (!packageJson.resolutions) {
  packageJson.resolutions = {};
}

// Add security fixes
packageJson.resolutions['nth-check'] = '^2.0.1';
packageJson.resolutions['postcss'] = '^8.4.31';
packageJson.resolutions['svgo/css-select/nth-check'] = '^2.0.1';

// Write back to package.json
fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2)); 