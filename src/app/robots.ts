import type { MetadataRoute } from "next";

// Required so this metadata route can be statically exported (GitHub Pages build).
export const dynamic = "force-static";

const base = "https://usamayousaf.dev"; // TODO: replace with the deployed production domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
