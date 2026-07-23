import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { offers } from "@/content/site";
import { breadcrumbJsonLd, offerJsonLd } from "@/lib/schema";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

const flightMap = {
  tandem: { offer: offers.tandem, seo: pages.tandem },
  premium: { offer: offers.premium, seo: pages.premium },
  sunset: { offer: offers.sunset, seo: pages.sunset },
} as const;

type Slug = keyof typeof flightMap;

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return Object.keys(flightMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!(slug in flightMap)) return {};
  const { seo } = flightMap[slug as Slug];
  return buildPageMetadata({
    locale,
    path: `/flights/${slug}`,
    title: seo.title,
    description: seo.description,
  });
}

export default async function FlightDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  if (!(slug in flightMap)) notFound();
  const { offer, seo } = flightMap[slug as Slug];

  return (
    <>
      <SchemaScript
        data={[
          offerJsonLd({
            name: offer.name,
            description: seo.description,
            priceUsd: offer.priceUsd,
            url: absoluteUrl(`/${locale}/flights/${slug}`),
          }),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Flights", path: "/flights" },
              { name: offer.name, path: `/flights/${slug}` },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Flights", href: "/flights" },
          { name: offer.name },
        ]}
        h1={seo.h1}
        intro={seo.intro}
      >
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold text-sea-deep">What&apos;s included</h2>
            <ul className="list-inside list-disc space-y-2 text-ink/85">
              {offer.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">What to expect</h2>
            <ol className="list-decimal space-y-2 pl-5 text-ink/85">
              <li>Meet in Jounieh — we confirm the pin after booking.</li>
              <li>Transfer to the Harissa / Ghosta takeoff area.</li>
              <li>Safety briefing, harness check, and wind assessment.</li>
              <li>Flight over the bay — duration depends on conditions.</li>
              <li>Landing and debrief; video handover when included.</li>
            </ol>
            <p className="text-sm text-stone">
              Related:{" "}
              <Link href="/safety" className="text-sea hover:underline">
                Safety
              </Link>
              {" · "}
              <Link href="/locations/harissa" className="text-sea hover:underline">
                Harissa takeoff
              </Link>
              {" · "}
              <Link href="/faq" className="text-sea hover:underline">
                FAQ
              </Link>
            </p>
          </div>
          <aside className="h-fit rounded-2xl bg-sea-deep p-6 text-foam">
            <p className="text-sm uppercase tracking-wider text-sand">From</p>
            <p className="mt-1 font-display text-4xl font-bold">${offer.priceUsd}</p>
            <p className="mt-1 text-sm text-foam/75">USD · {offer.duration}</p>
            <p className="mt-4 text-sm text-foam/80">Weight guidance: up to ~{offer.weightMaxKg} kg</p>
            <Link
              href="/booking"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-sunset px-4 py-3 text-sm font-semibold hover:brightness-110"
            >
              Book this flight
            </Link>
          </aside>
        </div>
      </PageShell>
    </>
  );
}
