import type { NextConfig } from "next";

const remoteImageHosts = [
  "images.unsplash.com",
  "in-exstatic-vivofs.vivo.com",
  "upload.wikimedia.org",
  "static2.realme.net",
  "www.sathya.store",
  "www.apple.com",
  "ehpworld.com",
  "rukminim2.flixcart.com",
  "www.acer.dotcomstores.in",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: remoteImageHosts.map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "/**",
    })),
  },
};

export default nextConfig;
