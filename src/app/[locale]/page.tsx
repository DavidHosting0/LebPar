import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Hero } from "@/components/ui/Hero";
import { CtaBand, Section } from "@/components/ui/Section";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { homeFaqs, pages } from "@/content/pages";
import { offers } from "@/content/site";
import { destinations, tours } from "@/content/tours";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  flightOffersJsonLd,
  localBusinessJsonLd,
  touristAttractionsJsonLd,
  tourOffersJsonLd,
  webSiteJsonLd,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/",
    title: pages.home.title,
    description: pages.home.description,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.home;

  return (
    <>
      <SchemaScript
        data={[
          localBusinessJsonLd(),
          webSiteJsonLd(locale),
          ...touristAttractionsJsonLd(),
          ...flightOffersJsonLd(locale),
          ...tourOffersJsonLd(locale),
          faqPageJsonLd(homeFaqs),
          breadcrumbJsonLd([{ name: "Home", path: "/" }], locale),
        ]}
      />
      <Hero
        title={p.h1}
        subtitle={p.intro}
        imageSrc="/media/hero/jounieh-tandem.jpeg"
        imageAlt="Tandem paraglider soaring over turquoise Jounieh Bay coastline, Lebanon — LebPar tours"
        primaryHref="/tours"
        primaryLabel="Explore 1–3 week tours"
        secondaryHref="/flights"
        secondaryLabel="Single flights"
      />

      <Section title={p.toursHeading}>
        <p className="max-w-3xl text-ink/85">
          Three itineraries — from a focused coastal week to a full three-week journey across Lebanon’s
          flight regions. Hotels and transfers can be packaged on request.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.slug}`}
              className="group block overflow-hidden"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-sea/10">
                <Image
                  src={tour.heroImage}
                  alt={tour.heroAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sea-deep/85 via-sea-deep/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-foam">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sand">
                    {tour.duration} · from ${tour.priceFromUsd}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold leading-tight">{tour.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-foam/85">{tour.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8">
          <Link href="/tours" className="font-semibold text-sea hover:underline">
            Compare all tours →
          </Link>
        </p>
      </Section>

      <Section title={p.destinationsHeading} className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {destinations.map((dest) => (
            <figure key={dest.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-sea/10">
                <Image
                  src={dest.image}
                  alt={dest.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 50vw, 20vw"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-lg font-semibold text-sea-deep">{dest.name}</p>
                <p className="text-sm text-stone">{dest.region}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title={p.whyLebanonHeading} className="pt-0">
        <p className="max-w-3xl text-ink/85">{p.whyLebanon}</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <Link href="/tours" className="font-semibold text-sea hover:underline">
              Paragliding tours
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="font-semibold text-sea hover:underline">
              Photo gallery
            </Link>
          </li>
          <li>
            <Link href="/safety" className="font-semibold text-sea hover:underline">
              Safety standards
            </Link>
          </li>
          <li>
            <Link href="/booking" className="font-semibold text-sea hover:underline">
              Request a quote
            </Link>
          </li>
        </ul>
      </Section>

      <Section title={p.whyHeading} className="pt-0">
        <div className="grid gap-8 md:grid-cols-3">
          {p.why.map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-xl font-semibold text-sea-deep">{item.title}</h3>
              <p className="mt-2 text-ink/80">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={p.flightsHeading} className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {[offers.tandem, offers.premium, offers.sunset].map((offer) => (
            <Link
              key={offer.id}
              href={`/flights/${offer.slug}`}
              className="group block border-t-2 border-sea pt-4 transition hover:border-sunset"
            >
              <h3 className="font-display text-xl font-semibold text-sea-deep group-hover:text-sea">
                {offer.name}
              </h3>
              <p className="mt-1 text-sm text-stone">{offer.duration}</p>
              <p className="mt-3 text-2xl font-bold text-ink">From ${offer.priceUsd}</p>
              <p className="mt-2 text-sm text-sea">Details →</p>
            </Link>
          ))}
        </div>
      </Section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-8 md:grid-cols-2 md:px-6">
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3]">
          <Image
            src="/media/destinations/faraya/shabrouh-winter.jpg"
            alt="Turquoise Shabrouh Dam and snowy Faraya mountains — LebPar tour destination"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-sea-deep">{p.trustHeading}</h2>
          <p className="mt-4 text-ink/85">
            Named pilots, weather abort rules, and legal tandem-only flying — built for travelers who
            research before they book. Explore our{" "}
            <Link href="/safety" className="font-semibold text-sea underline-offset-2 hover:underline">
              safety page
            </Link>
            ,{" "}
            <Link href="/pilots" className="font-semibold text-sea underline-offset-2 hover:underline">
              pilot team
            </Link>
            , and{" "}
            <Link href="/reviews" className="font-semibold text-sea underline-offset-2 hover:underline">
              reviews
            </Link>
            .
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink/80">
            <li>
              <Link href="/locations/jounieh" className="text-sea hover:underline">
                Paragliding in Jounieh — visitor guide
              </Link>
            </li>
            <li>
              <Link href="/locations/harissa" className="text-sea hover:underline">
                Harissa takeoff guide
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-sea hover:underline">
                Flight & destination gallery
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <Section title="Quick answers">
        <dl className="space-y-6">
          {homeFaqs.map((faq) => (
            <div key={faq.question} className="border-b border-sea-deep/10 pb-4">
              <dt className="font-semibold text-sea-deep">{faq.question}</dt>
              <dd className="mt-2 text-ink/80">{faq.answer}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6">
          <Link href="/faq" className="font-semibold text-sea hover:underline">
            Full FAQ →
          </Link>
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
