import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [{ source: "/localisations", destination: "/contact", permanent: true }];
  },
};

export default nextConfig;
