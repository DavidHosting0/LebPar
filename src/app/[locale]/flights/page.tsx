import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { offers } from "@/content/site";
import { breadcrumbJsonLd, flightOffersJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/flights",
    title: pages.flights.title,
    description: pages.flights.description,
  });
}

export default async function FlightsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.flights;

  return (
    <>
      <SchemaScript
        data={[
          ...flightOffersJsonLd(locale),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Flights", path: "/flights" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Flights" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="space-y-10">
          {[offers.tandem, offers.premium, offers.sunset].map((offer) => (
            <article key={offer.id} className="border-t border-sea-deep/15 pt-8">
              <h2 className="font-display text-2xl font-bold text-sea-deep">
                <Link href={`/flights/${offer.slug}`} className="hover:text-sea">
                  {offer.name}
                </Link>
              </h2>
              <p className="mt-1 text-stone">
                {offer.duration} · From ${offer.priceUsd} USD · Max ~{offer.weightMaxKg} kg
              </p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-ink/85">
                {offer.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link
                href={`/flights/${offer.slug}`}
                className="mt-4 inline-block font-semibold text-sea hover:underline"
              >
                Full details →
              </Link>
            </article>
          ))}
          <aside className="rounded-xl bg-white/60 p-6 ring-1 ring-sea-deep/10">
            <h2 className="font-display text-xl font-semibold text-sea-deep">Add-ons & groups</h2>
            <p className="mt-2 text-ink/80">
              Photo/video upgrades from ${offers.photoVideo.priceUsd}. Groups, corporate events, and
              private tours — message us on WhatsApp for a quote. See also{" "}
              <Link href="/gift-cards" className="text-sea underline">
                gift vouchers for paragliding in Lebanon
              </Link>
              ,{" "}
              <Link href="/tours" className="text-sea underline">
                multi-day tours
              </Link>
              , and{" "}
              <Link href="/booking" className="text-sea underline">
                book tandem in Jounieh
              </Link>
              . Learn more about our{" "}
              <Link href="/locations/harissa" className="text-sea underline">
                Harissa takeoff
              </Link>{" "}
              and{" "}
              <Link href="/locations/jounieh" className="text-sea underline">
                paragliding in Jounieh
              </Link>
              .
            </p>
          </aside>
        </div>
      </PageShell>
    </>
  );
}
