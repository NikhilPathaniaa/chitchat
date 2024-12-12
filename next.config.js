/** @type {import('next').NextConfig} */
const path = require('path');
const { URL } = require('url');

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false
  },
  experimental: {
    // appDir: true,
    // manifest: true
  },
  images: {
    domains: ['example.com'], // Replace with your actual image domains
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false
      };
    }
    // Custom webpack configurations if needed
    return config;
  }
};

module.exports = nextConfig;
