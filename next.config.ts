import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Vercel serves at root, VPS serves under /portfolio/
  basePath: process.env.VERCEL ? "" : "/portfolio",
};

export default nextConfig;
