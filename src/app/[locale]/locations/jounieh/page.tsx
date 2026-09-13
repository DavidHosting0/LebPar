import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { breadcrumbJsonLd, touristAttractionsJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/locations/jounieh",
    title: pages.jounieh.title,
    description: pages.jounieh.description,
  });
}

export default async function JouniehPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.jounieh;

  return (
    <>
      <SchemaScript
        data={[
          touristAttractionsJsonLd()[0],
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Jounieh", path: "/locations/jounieh" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations" },
          { name: "Jounieh" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="max-w-3xl space-y-8 text-ink/85">
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">Why Jounieh</h2>
            <p className="mt-3">
              Jounieh Bay combines mountain takeoff height with a dramatic Mediterranean landing
              corridor. It is the most searched destination for tandem paragliding in Lebanon —
              and LebPar&apos;s home base.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">How a flight day works</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>Meet in Jounieh (pin shared after booking).</li>
              <li>Transfer up toward the Harissa / Ghosta takeoff.</li>
              <li>Briefing, gear-up, wind check, then fly the bay.</li>
              <li>Land near the coast and return to town.</li>
            </ol>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">Tips for visitors</h2>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Book early in your trip to allow weather reschedules.</li>
              <li>Cruise guests: share docking windows on WhatsApp.</li>
              <li>Combine with Harissa / téléphérique sightseeing after landing.</li>
            </ul>
          </section>
          <p>
            Next:{" "}
            <Link href="/locations/harissa" className="text-sea underline">
              Harissa takeoff guide
            </Link>{" "}
            ·{" "}
            <Link href="/flights" className="text-sea underline">
              paragliding flights &amp; prices in Lebanon
            </Link>{" "}
            ·{" "}
            <Link href="/booking" className="text-sea underline">
              book tandem in Jounieh
            </Link>
          </p>
        </div>
      </PageShell>
    </>
  );
}
