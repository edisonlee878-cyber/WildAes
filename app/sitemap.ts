import type { MetadataRoute } from "next";

import { legal, navItems } from "../lib/site-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({
    url: new URL(item.href, legal.siteUrl).toString(),
    lastModified: new Date(legal.lastUpdated),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
