/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.intra.42.fr', 'covers.openlibrary.org'],
    unoptimized: true,
  },
}

module.exports = nextConfig
