/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/_homepage',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
