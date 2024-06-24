/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bucket-rn-40-dev-test.s3.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
