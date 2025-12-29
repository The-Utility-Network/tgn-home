import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Set turbopack root to this directory to prevent using parent project's files
  turbopack: {
    root: path.resolve(__dirname),
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3t3ozftmdmh3i.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'engram1.blob.core.windows.net',
        port: '',
        pathname: '/tuc-homepage/**',
      },
      {
        protocol: 'https',
        hostname: 'engram1.blob.core.windows.net',
        port: '',
        pathname: '/tgn/**',
      },
    ],
  },
};

export default nextConfig;
