import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  api: {
    bodyParser: {
      sizeLimit: "100mb"  // Increase the size limit for large YouTube videos
    }
  }
};

export default nextConfig;
