/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa")({
//   dest: "public",
// });

const nextConfig = {
  reactStrictMode: false,
  // async rewrites() {
  //   return [
     
  //   ];
  // },

  // experimental: {
  //   serverActions: true,
  // },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "credentials",
            value: "include",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
