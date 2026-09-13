import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import {
  destinationById,
  getTourBySlug,
  tours,
} from "@/content/tours";
import { breadcrumbJsonLd, offerJsonLd } from "@/lib/schema";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return buildPageMetadata({
    locale,
    path: `/tours/${tour.slug}`,
    title: `${tour.name} | ${tour.duration} Paragliding Tour | LebPar`,
    description: tour.summary.slice(0, 155),
  });
}

export default async function TourDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const tourDestinations = tour.destinations
    .map((id) => destinationById(id))
    .filter(Boolean);

  return (
    <>
      <SchemaScript
        data={[
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Tours", path: "/tours" },
              { name: tour.name, path: `/tours/${tour.slug}` },
            ],
            locale,
          ),
          offerJsonLd({
            name: tour.name,
            description: tour.summary,
            priceUsd: tour.priceFromUsd,
            url: absoluteUrl(`/${locale}/tours/${tour.slug}`),
          }),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Tours", href: "/tours" },
          { name: tour.name },
        ]}
        h1={tour.name}
        intro={tour.summary}
      >
        <p className="-mt-4 mb-8 text-sm font-semibold uppercase tracking-[0.14em] text-sunset">
          {tour.duration} · from ${tour.priceFromUsd} · {tour.tagline}
        </p>

        <div className="relative mb-12 aspect-[16/10] overflow-hidden bg-sea/10 md:aspect-[21/9]">
          <Image
            src={tour.heroImage}
            alt={tour.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-sea-deep">Sample itinerary</h2>
            <ol className="mt-6 space-y-6">
              {tour.itinerary.map((block) => (
                <li key={block.day} className="border-t border-sea-deep/10 pt-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-sea">
                    {block.day}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-sea-deep">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-ink/80">{block.body}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 font-display text-2xl font-bold text-sea-deep">Highlights</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-ink/80">
              {tour.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="space-y-8">
            <div className="border-t-2 border-sea pt-5">
              <h2 className="font-display text-xl font-bold text-sea-deep">What’s included</h2>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                {tour.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sunset" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className="mt-6 inline-flex rounded-full bg-sunset px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Request this tour
              </Link>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-sea-deep">Destinations</h2>
              <ul className="mt-4 space-y-4">
                {tourDestinations.map(
                  (dest) =>
                    dest && (
                      <li key={dest.id} className="flex gap-3">
                        <div className="relative h-16 w-14 shrink-0 overflow-hidden">
                          <Image
                            src={dest.image}
                            alt={dest.imageAlt}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sea-deep">{dest.name}</p>
                          <p className="text-sm text-stone">{dest.region}</p>
                        </div>
                      </li>
                    ),
                )}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-sea-deep">From this journey</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tour.gallery.map((shot) => (
              <li key={shot.src}>
                <div className="relative aspect-[3/4] overflow-hidden bg-sea/10">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 text-ink/85">
          <Link href="/tours" className="font-semibold text-sea hover:underline">
            ← All tours
          </Link>
          {" · "}
          <Link href="/flights" className="font-semibold text-sea hover:underline">
            Single flights
          </Link>
        </p>
      </PageShell>
    </>
  );
}
