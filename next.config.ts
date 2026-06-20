import type { NextConfig } from "next";

// On GitHub Pages this project is served from https://<user>.github.io/my-portfolio/,
// so assets must be prefixed with the repo name. Locally (no env var) it stays at root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // emit a fully static site into ./out
  basePath,
  images: {
    unoptimized: true, // required for static export if you ever use next/image
  },
  trailingSlash: true, // emit /about/index.html so deep links work on static hosts
};

export default nextConfig;
