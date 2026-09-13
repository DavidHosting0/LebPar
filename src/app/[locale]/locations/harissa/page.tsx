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
    path: "/locations/harissa",
    title: pages.harissa.title,
    description: pages.harissa.description,
  });
}

export default async function HarissaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.harissa;

  return (
    <>
      <SchemaScript
        data={[
          touristAttractionsJsonLd()[1],
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Harissa", path: "/locations/harissa" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations" },
          { name: "Harissa" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="max-w-3xl space-y-8 text-ink/85">
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">
              Ghosta / Harissa launch
            </h2>
            <p className="mt-3">
              Takeoff sits in the hills near Harissa — famous for Our Lady of Lebanon. From here,
              tandem routes typically open onto Jounieh Bay with shrine, ridge, and sea in one frame.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">What you will see</h2>
            <ul className="mt-3 list-inside list-disc space-y-1">
              <li>Our Lady of Lebanon shrine and hillside</li>
              <li>Jounieh coastline and marina geometry</li>
              <li>Mediterranean horizon on clear days</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">Getting there</h2>
            <p className="mt-3">
              You do not self-drive to takeoff for a standard LebPar package — we transfer from our
              Jounieh meeting point. See the{" "}
              <Link href="/locations/jounieh" className="text-sea underline">
                paragliding in Jounieh guide
              </Link>
              , compare{" "}
              <Link href="/flights" className="text-sea underline">
                paragliding flights in Lebanon
              </Link>
              , or{" "}
              <Link href="/booking" className="text-sea underline">
                book tandem in Jounieh
              </Link>
              .
            </p>
          </section>
        </div>
      </PageShell>
    </>
  );
}
