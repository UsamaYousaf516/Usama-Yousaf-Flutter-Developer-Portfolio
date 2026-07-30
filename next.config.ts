import type { NextConfig } from "next";

// Only set for the GitHub Pages CI build (see .github/workflows/deploy-pages.yml).
// Local dev and any Node-capable host (Vercel, etc.) build normally, with the
// /api/contact route and image optimization intact.
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
        basePath,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
