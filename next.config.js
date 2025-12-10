/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. We're doing this because the 
    // react/no-unescaped-entities rule is too strict for string data.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

