import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Vercel serves at root, VPS serves under /portfolio/
  basePath: process.env.VERCEL ? "" : "/portfolio",
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.VERCEL ? "" : "/portfolio",
  },
};

export default nextConfig;
