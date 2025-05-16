// This file overrides webpack config settings in create-react-app
const path = require('path');

module.exports = function override(config, env) {
  // Override webpack-dev-server configuration to address deprecation warnings
  const devServerOptions = {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      
      return middlewares;
    }
  };

  // This ensures our configuration overrides any internal CRA configuration
  config.devServer = {
    ...config.devServer,
    ...devServerOptions
  };
  
  // Performance optimizations for production builds
  if (env === 'production') {
    // Optimize chunk size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        maxInitialRequests: Infinity,
        automaticNameDelimiter: '.',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // Get the name. E.g. node_modules/packageName/not/this/part.js
              // Check if module.context exists to avoid TypeError
              if (!module.context) return 'vendor.unknown';
              const packageNameMatch = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              // If match fails, return generic vendor name
              if (!packageNameMatch) return 'vendor.unknown';
              // Return custom chunk name
              const packageName = packageNameMatch[1];
              return `vendor.${packageName.replace('@', '')}`;
            },
            priority: -10
          },
          threejs: {
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            name: 'vendor.threejs',
            priority: 10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    };
    
    // Add file compression
    config.optimization.minimize = true;
    
    // Copy DRACO decoder to output folder for faster loading
    if (!config.plugins) {
      config.plugins = [];
    }
    
    // Add additional resolve aliases for better import management
    config.resolve.alias = {
      ...config.resolve.alias,
      'three-draco': path.resolve(__dirname, 'node_modules/three/examples/jsm/libs/draco'),
    };
  }
  
  return config;
};