/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dh2', // Replace 'dh2' with your repository name
}

module.exports = nextConfig 