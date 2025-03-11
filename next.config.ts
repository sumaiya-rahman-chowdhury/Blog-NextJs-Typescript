import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    domains: ["images.unsplash.com"], // ✅ Allow Unsplash images
  },
};

export default nextConfig;
