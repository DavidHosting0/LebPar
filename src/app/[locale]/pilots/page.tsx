import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { pilots } from "@/content/site";
import { breadcrumbJsonLd, personJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/pilots",
    title: pages.pilots.title,
    description: pages.pilots.description,
  });
}

export default async function PilotsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.pilots;

  return (
    <>
      <SchemaScript
        data={[
          ...personJsonLd(),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Pilots", path: "/pilots" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Pilots" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="grid gap-12 md:grid-cols-2">
          {pilots.map((pilot) => (
            <article key={pilot.id} className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-sea/20">
                <Image
                  src={pilot.image}
                  alt={pilot.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-sea-deep">{pilot.name}</h2>
                <p className="text-sm uppercase tracking-wide text-stone">{pilot.role}</p>
                <p className="mt-3 text-ink/85">{pilot.bio}</p>
                <p className="mt-3 text-sm text-stone">Flights: {pilot.flightsApprox}</p>
                <ul className="mt-2 list-inside list-disc text-sm text-ink/80">
                  {pilot.certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </PageShell>
    </>
  );
}
