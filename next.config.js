/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    'domains': [ 'www.apple.com', 'store.storeimages.cdn-apple.com', "firebasestorage.googleapis.com" ]
  },
  reactStrictMode: false,
}

module.exports = nextConfig
