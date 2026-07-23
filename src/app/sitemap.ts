import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const paths = [
  "",
  "/flights",
  "/flights/tandem",
  "/flights/premium",
  "/flights/sunset",
  "/tours",
  "/gift-cards",
  "/booking",
  "/safety",
  "/pilots",
  "/reviews",
  "/faq",
  "/about",
  "/contact",
  "/gallery",
  "/locations/jounieh",
  "/locations/harissa",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locales) {
    for (const path of paths) {
      entries.push({
        url: `${siteConfig.url}/${locale}${path}`,
        lastModified,
        changeFrequency: path === "" || path.startsWith("/flights") ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.startsWith("/flights") || path === "/booking" ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            siteConfig.locales.map((l) => [l, `${siteConfig.url}/${l}${path}`]),
          ),
        },
      });
    }
  }

  return entries;
}
