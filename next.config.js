/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable standalone output for Docker deployment
  output: 'standalone',

  images: {
    domains: ['images.unsplash.com'],
  },

  // Optimize for production
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
