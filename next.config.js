/** @type {import('next').NextConfig} */
const path = require('path');
const { URL } = require('url');

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
      allowedOrigins: ['localhost:3000', 'chitchat-blog.vercel.app'],
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        dns: false,
      };
    }
    return config;
  }
};

module.exports = nextConfig;
