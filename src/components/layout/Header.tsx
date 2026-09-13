"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/content/site";
import { WhatsAppLink } from "@/components/layout/StickyWhatsApp";

const navLinks = [
  { href: "/tours", key: "tours" as const },
  { href: "/flights", key: "flights" as const },
  { href: "/locations/jounieh", key: "locations" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/safety", key: "safety" as const },
  { href: "/pilots", key: "pilots" as const },
  { href: "/gift-cards", key: "giftCards" as const },
  { href: "/faq", key: "faq" as const },
];

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sea-deep/10 bg-foam/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-sea focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight text-sea-deep">
          {siteConfig.name}
          <span className="sr-only"> — paragliding Jounieh</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-sea ${
                pathname.startsWith(link.href) ? "font-semibold text-sea-deep" : "text-stone"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher current={locale} pathname={pathname} />
          <WhatsAppLink className="hidden rounded-full bg-sea-deep px-4 py-2 text-sm font-semibold text-foam transition hover:bg-sea sm:inline-flex">
            {t("book")}
          </WhatsAppLink>
          <button
            type="button"
            className="inline-flex rounded-md border border-sea-deep/20 px-3 py-2 text-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-sea-deep/10 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base text-ink"
                  onClick={() => setOpen(false)}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/booking" className="font-semibold text-sea" onClick={() => setOpen(false)}>
                {t("book")}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function LocaleSwitcher({
  current,
  pathname,
}: {
  current: string;
  pathname: string;
}) {
  return (
    <div className="flex items-center gap-1 text-xs uppercase tracking-wide text-stone">
      {siteConfig.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          className={`rounded px-1.5 py-1 ${
            loc === current ? "bg-sea-deep text-foam" : "hover:text-sea"
          }`}
          hrefLang={loc}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}
