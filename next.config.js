/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: function() {
    return {
      '/': {page: '/'}
    };
  }
};

module.exports = nextConfig
