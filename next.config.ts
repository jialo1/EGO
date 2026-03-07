import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      { source: "/localisations", destination: "/contact", permanent: true },
      { source: "/en/localisations", destination: "/en/contact", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
