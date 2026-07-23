import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { BookingForm } from "@/components/booking/BookingForm";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { WhatsAppLink } from "@/components/layout/StickyWhatsApp";
import { pages } from "@/content/pages";
import { siteConfig } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/booking",
    title: pages.booking.title,
    description: pages.booking.description,
  });
}

export default async function BookingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.booking;

  return (
    <>
      <SchemaScript
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: "Booking", path: "/booking" },
          ],
          locale,
        )}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Booking" },
        ]}
        h1={p.h1}
        intro={p.intro}
        showCta={false}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <BookingForm />
          <aside className="space-y-4 text-ink/85">
            <h2 className="font-display text-xl font-semibold text-sea-deep">Prefer WhatsApp directly?</h2>
            <p>
              Message {siteConfig.name} at{" "}
              <WhatsAppLink className="font-semibold text-sea underline">
                {siteConfig.phoneDisplay}
              </WhatsAppLink>
              . We reply with availability and the meeting pin in Jounieh.
            </p>
            <h3 className="font-semibold text-sea-deep">Before you fly</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>Closed-toe shoes and layers</li>
              <li>Share passenger weights if near the limit</li>
              <li>Build buffer time for weather reschedules</li>
            </ul>
          </aside>
        </div>
      </PageShell>
    </>
  );
}
