const ESLintPlugin = require('eslint-webpack-plugin');

/** @type {import('next').NextConfig} */
module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          context: './frontend', // Location where it will scan all the files
          extensions: ['js', 'jsx', 'ts', 'tsx'], // File formats that should be scanned
          exclude: ['node_modules', 'dist'], // Exclude everything in these folders
        })
      );
    }
    return config;
  },
};
