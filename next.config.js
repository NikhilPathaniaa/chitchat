/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'unsplash.com']
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose', 'socket.io', 'express']
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      };
    }
    return config;
  }
};

module.exports = nextConfig;
