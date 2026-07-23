import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { offers } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/tours",
    title: pages.tours.title,
    description: pages.tours.description,
  });
}

export default async function ToursPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.tours;

  return (
    <>
      <SchemaScript
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: "Tours", path: "/tours" },
          ],
          locale,
        )}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Tours" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="grid gap-10 md:grid-cols-2">
          <article className="border-t-2 border-sea pt-5">
            <h2 className="font-display text-2xl font-bold text-sea-deep">
              {offers.weekTour.name}
            </h2>
            <p className="mt-2 text-stone">
              {offers.weekTour.duration} · from ${offers.weekTour.priceFromUsd}
            </p>
            <p className="mt-4 text-ink/85">
              Multiple tandem flights, coaching for confident first-timers, and a coastal–mountain
              itinerary centered on Jounieh. Ideal for adventure travelers who want repetition in
              the air — not a single bucket-list hop.
            </p>
            <h3 className="mt-6 font-semibold text-sea-deep">Sample inclusions</h3>
            <ul className="mt-2 list-inside list-disc text-ink/80">
              <li>Several tandem flights across the week</li>
              <li>Hotel recommendations / package options (TODO: finalize partners)</li>
              <li>Airport / hotel transfer guidance</li>
            </ul>
          </article>
          <article className="border-t-2 border-sunset pt-5">
            <h2 className="font-display text-2xl font-bold text-sea-deep">
              {offers.adventureTour.name}
            </h2>
            <p className="mt-2 text-stone">
              {offers.adventureTour.duration} · from ${offers.adventureTour.priceFromUsd}
            </p>
            <p className="mt-4 text-ink/85">
              Paragliding plus Lebanon highlights — coastal towns, mountain viewpoints, and curated
              stays. Built for couples, small groups, and creators who need a full narrative, not
              just one viral clip.
            </p>
            <h3 className="mt-6 font-semibold text-sea-deep">Sample inclusions</h3>
            <ul className="mt-2 list-inside list-disc text-ink/80">
              <li>Tandem flights + flexible free days</li>
              <li>Sightseeing day structure (TODO: publish final itinerary)</li>
              <li>Hotel package tiers on request</li>
            </ul>
          </article>
        </div>
        <p className="mt-10 text-ink/85">
          Tours are customized.{" "}
          <Link href="/booking" className="font-semibold text-sea hover:underline">
            Request a quote
          </Link>{" "}
          or see single{" "}
          <Link href="/flights" className="font-semibold text-sea hover:underline">
            flight options
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
