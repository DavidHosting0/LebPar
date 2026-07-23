import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { siteConfig } from "@/content/site";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/about",
    title: pages.about.title,
    description: pages.about.description,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.about;

  return (
    <>
      <SchemaScript
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="max-w-3xl space-y-6 text-ink/85">
          <h2 className="font-display text-2xl font-semibold text-sea-deep">Based in Jounieh</h2>
          <p>
            {siteConfig.name} operates from {siteConfig.address.locality}, Lebanon — the heart of
            the country&apos;s best-known coastal tandem corridor. We focus on clear briefings,
            honest weather calls, and flights that respect national regulations.
          </p>
          <h2 className="font-display text-2xl font-semibold text-sea-deep">Who we fly with</h2>
          <p>
            International tourists, backpackers, couples, families, cruise guests, corporate groups,
            and creators. If you need a sunset slot, a voucher, or a multi-day tour, we will shape
            the day around your itinerary.
          </p>
          <p>
            Meet the{" "}
            <Link href="/pilots" className="text-sea underline">
              pilots
            </Link>
            , read our{" "}
            <Link href="/safety" className="text-sea underline">
              safety standards
            </Link>
            , or{" "}
            <Link href="/contact" className="text-sea underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </PageShell>
    </>
  );
}
