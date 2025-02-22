/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  distDir: 'build',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/joy': { page: '/joy' },
    };
  },
  async redirects() {
    return []
  }
}

module.exports = nextConfig
