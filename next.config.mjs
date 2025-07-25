/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      webgpu: false,
      tsl: false,
    };
    return config;
  },
};

export default nextConfig;