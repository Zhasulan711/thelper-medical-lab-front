import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "static.maps.2gis.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
