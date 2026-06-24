import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export so Capacitor can bundle the web app into the native shells.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
