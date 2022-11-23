/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/_homepage',
        permanent: false,
      },
      {
        source: '/ko',
        destination: '/ko/_homepage',
        permanent: false,
      },
      {
        source: '/en',
        destination: '/en/_homepage',
        permanent: false,
      },
    ];
  },
  i18n,
};

module.exports = nextConfig;
