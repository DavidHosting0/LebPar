import type { Metadata } from "next";
import { siteConfig, type Locale } from "@/content/site";

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean === "/" ? "" : clean}`;
}

export function localePath(locale: string, path = ""): string {
  const clean = path === "/" || path === "" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Build hreflang alternates for a path (without locale prefix). */
export function buildAlternates(
  path = "",
  locale: string = siteConfig.localeDefault,
): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const loc of siteConfig.locales) {
    languages[loc] = absoluteUrl(localePath(loc, path));
  }
  languages["x-default"] = absoluteUrl(localePath(siteConfig.localeDefault, path));
  return {
    canonical: absoluteUrl(localePath(locale, path)),
    languages,
  };
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  ogImage,
}: {
  locale: Locale | string;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
}): Metadata {
  const url = absoluteUrl(localePath(locale, path));
  const fullTitle =
    title.length <= 60 ? title : `${title.slice(0, 57)}...`;

  return {
    title: fullTitle,
    description: description.slice(0, 160),
    alternates: buildAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_LB" : locale === "fr" ? "fr_FR" : locale === "de" ? "de_DE" : "en_US",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description: description.slice(0, 160),
      images: [
        {
          url: ogImage ?? absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} tandem paragliding over Jounieh Bay`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description.slice(0, 160),
      images: [ogImage ?? absoluteUrl("/opengraph-image")],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappE164}?text=${text}`;
}
