/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/homepage',
        permanent: false,
      },
      {
        source: '/ko',
        destination: '/ko/homepage',
        permanent: false,
      },
      {
        source: '/en',
        destination: '/en/homepage',
        permanent: false,
      },
    ];
  },
  i18n,
};

module.exports = nextConfig;
