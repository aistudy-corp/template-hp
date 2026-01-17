import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Standalone output for containerization
  // output: 'standalone',

  // TypeScript and ESLint checks during build
  typescript: {
    // Set to true to ignore errors during production build (not recommended)
    ignoreBuildErrors: false,
  },
  eslint: {
    // Set to true to ignore errors during production build (not recommended)
    ignoreDuringBuilds: false,
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
