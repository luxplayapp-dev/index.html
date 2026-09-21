/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["mathjs", "decimal.js"],
};

export default nextConfig;
