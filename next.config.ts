import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ufs.sh", // allows all UploadThing CDN subdomains
      },
      {
        protocol: "https",
        hostname: "uploadthing.com", // optional: if you ever serve from UploadThing directly
      },
    ],
  },
};

export default nextConfig;
