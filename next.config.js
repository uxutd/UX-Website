/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enabling React Strict Mode (optional, but good for development)
  reactStrictMode: true,
  allowedDevOrigins: ["10.178.163.207", "10.169.187.178"],
  // Enabling SWC Minification
  //   swcMinify: true,
};

module.exports = nextConfig;
