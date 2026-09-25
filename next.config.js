/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [{ source: '/resume/:path*', destination: '/', permanent: false }]
  },
}

module.exports = nextConfig
