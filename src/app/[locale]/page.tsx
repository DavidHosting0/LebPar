import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Hero } from "@/components/ui/Hero";
import { CtaBand, Section } from "@/components/ui/Section";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { homeFaqs, pages } from "@/content/pages";
import { offers } from "@/content/site";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  flightOffersJsonLd,
  localBusinessJsonLd,
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
          ...flightOffersJsonLd(locale),
          faqPageJsonLd(homeFaqs),
          breadcrumbJsonLd([{ name: "Home", path: "/" }], locale),
        ]}
      />
      <Hero
        title={p.h1}
        subtitle={p.intro}
        imageSrc="/media/hero/jounieh-bay-sky.svg"
        imageAlt="Tandem paraglider soaring over Jounieh Bay Mediterranean coastline, Lebanon — LebPar"
        primaryHref="/booking"
        primaryLabel="Book your flight"
        secondaryHref="/flights"
        secondaryLabel="Compare flights"
      />

      <Section title={p.whyHeading}>
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
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/media/gallery/harissa-shrine-air.svg"
            alt="Harissa Our Lady of Lebanon shrine viewed during LebPar tandem paragliding flight"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-sea-deep">{p.trustHeading}</h2>
          <p className="mt-4 text-ink/85">
            Named pilots, weather abort rules, and legal tandem-only flying — built for travelers
            who research before they book. Explore our{" "}
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
                Jounieh visitor guide
              </Link>
            </li>
            <li>
              <Link href="/locations/harissa" className="text-sea hover:underline">
                Harissa takeoff guide
              </Link>
            </li>
            <li>
              <Link href="/gift-cards" className="text-sea hover:underline">
                Gift vouchers
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
