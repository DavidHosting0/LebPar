import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { destinations, tours } from "@/content/tours";
import { breadcrumbJsonLd, tourOffersJsonLd } from "@/lib/schema";
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
        data={[
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Tours", path: "/tours" },
            ],
            locale,
          ),
          ...tourOffersJsonLd(locale),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Tours" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="space-y-16">
          {tours.map((tour, index) => (
            <article
              key={tour.id}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-sea/10">
                <Image
                  src={tour.heroImage}
                  alt={tour.heroAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sunset">
                  {tour.duration} · from ${tour.priceFromUsd}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-sea-deep md:text-4xl">
                  {tour.name}
                </h2>
                <p className="mt-2 text-lg text-stone">{tour.tagline}</p>
                <p className="mt-4 text-ink/85">{tour.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/80">
                  {tour.highlights.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sea" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="rounded-full bg-sea-deep px-5 py-2.5 text-sm font-semibold text-foam transition hover:bg-sea"
                  >
                    View itinerary
                  </Link>
                  <Link
                    href="/booking"
                    className="rounded-full border border-sea-deep/20 px-5 py-2.5 text-sm font-semibold text-sea-deep transition hover:border-sea"
                  >
                    Request quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-20">
          <h2 className="font-display text-3xl font-bold text-sea-deep">Tour destinations</h2>
          <p className="mt-3 max-w-2xl text-ink/80">
            Real flight sites across the coast and mountains — the backbone of every LebPar multi-day
            itinerary.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <figure key={dest.id}>
                <div className="relative aspect-[4/5] overflow-hidden bg-sea/10">
                  <Image
                    src={dest.image}
                    alt={dest.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="mt-3">
                  <h3 className="font-display text-xl font-semibold text-sea-deep">{dest.name}</h3>
                  <p className="text-sm text-stone">{dest.region}</p>
                  <p className="mt-2 text-sm text-ink/80">{dest.blurb}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <p className="mt-12 text-ink/85">
          Prefer a single day in the air? See{" "}
          <Link href="/flights" className="font-semibold text-sea hover:underline">
            flight options
          </Link>{" "}
          or{" "}
          <Link href="/booking" className="font-semibold text-sea hover:underline">
            book / request a custom tour
          </Link>
          .
        </p>
      </PageShell>
    </>
  );
}
