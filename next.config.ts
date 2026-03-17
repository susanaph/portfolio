import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/case-studies/randstad-mobile",
        destination: "/case-studies/talent-app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
