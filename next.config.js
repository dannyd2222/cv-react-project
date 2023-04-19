/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  distDir: 'build',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
    };
  },
  async redirects() {
    return []
  }
}

module.exports = nextConfig
