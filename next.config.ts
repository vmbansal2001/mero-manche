import withPWA from "next-pwa";
import withSVGR from "next-svgr";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: "/offline.html",
    image: "/offline.html",
    audio: "/offline.html",
    video: "/offline.html",
    font: "/offline.html",
  },
  // disable: process.env.NODE_ENV === "development",
}) as (config: NextConfig) => NextConfig;

const svgrConfig = withSVGR as (config: NextConfig) => NextConfig;

export default svgrConfig(pwaConfig(nextConfig));
