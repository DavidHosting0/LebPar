import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { siteConfig } from "@/content/site";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

const safetyFaqs = [
  {
    question: "Is paragliding safe in Lebanon?",
    answer:
      "Tandem flights with certified operators, modern gear, and strict weather limits are widely considered acceptably low-risk adventure activities. LebPar cancels when conditions are outside limits and does not offer illegal acrobatic flights.",
  },
  {
    question: "What about the acrobatic paragliding ban?",
    answer:
      "Lebanon banned acrobatic paragliding. LebPar offers legal tandem sightseeing flights only — no loops, spins, or stunt maneuvers.",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/safety",
    title: pages.safety.title,
    description: pages.safety.description,
  });
}

export default async function SafetyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.safety;

  return (
    <>
      <SchemaScript
        data={[
          faqPageJsonLd(safetyFaqs),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Safety", path: "/safety" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Safety" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="max-w-3xl space-y-10">
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">Legal tandem only</h2>
            <p className="mt-3 text-ink/85">{siteConfig.compliance.ministryNote}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">Our ground protocol</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-ink/85">
              <li>Morning forecast review (wind, thermals, visibility).</li>
              <li>On-site wind checks at takeoff before every passenger flight.</li>
              <li>Harness, helmet, and reserve checks with the pilot.</li>
              <li>Clear abort criteria — if it is not safe, we do not fly.</li>
              <li>Passenger briefing: run, sit, landing posture.</li>
            </ol>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">Equipment & insurance</h2>
            <p className="mt-3 text-ink/85">
              {siteConfig.compliance.licenseClaim}. {siteConfig.compliance.insuranceClaim}.
            </p>
            <p className="mt-2 text-sm text-stone">
              Replace TODO claims with verified license and insurance statements before launch.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-sea-deep">Weather & refunds</h2>
            <p className="mt-3 text-ink/85">
              If we cancel for weather, we reschedule or refund. Build buffer days into your trip when
              possible — especially for cruise and short stays. See{" "}
              <Link href="/faq" className="text-sea underline">
                FAQ
              </Link>{" "}
              and{" "}
              <Link href="/pilots" className="text-sea underline">
                pilots
              </Link>
              .
            </p>
          </section>
        </div>
      </PageShell>
    </>
  );
}
