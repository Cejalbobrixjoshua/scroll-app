import { withWhopAppConfig } from "@whop/react/next.config";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "**" }],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Applies to all routes
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Allow embedding in iframe
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Allow CORS from any origin
          },
        ],
      },
    ];
  },
};

export default withWhopAppConfig(nextConfig);
