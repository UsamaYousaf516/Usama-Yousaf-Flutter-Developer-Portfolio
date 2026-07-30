import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const base = "https://usamayousaf.dev"; // TODO: replace with the deployed production domain

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/profile",
    "/experience",
    "/skills",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
