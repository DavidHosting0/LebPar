import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { WhatsAppLink } from "@/components/layout/StickyWhatsApp";
import { pages } from "@/content/pages";
import { siteConfig } from "@/content/site";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: pages.contact.title,
    description: pages.contact.description,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.contact;

  return (
    <>
      <SchemaScript
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="grid gap-10 md:grid-cols-2">
          <address className="not-italic space-y-3 text-ink/90">
            <p className="font-display text-xl font-semibold text-sea-deep">{siteConfig.legalName}</p>
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.locality}, {siteConfig.address.region}
              <br />
              {siteConfig.address.country}
            </p>
            <p>
              Phone:{" "}
              <a className="text-sea hover:underline" href={`tel:${siteConfig.phoneE164}`}>
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="text-sea hover:underline" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p>Hours: {siteConfig.hours}</p>
            <WhatsAppLink className="inline-flex rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white">
              Chat on WhatsApp
            </WhatsAppLink>
          </address>
          <div>
            <h2 className="font-display text-xl font-semibold text-sea-deep">Fastest booking path</h2>
            <p className="mt-3 text-ink/85">
              Use our{" "}
              <Link href="/booking" className="text-sea underline">
                booking form
              </Link>{" "}
              to pre-fill your flight request, then finish on WhatsApp for confirmation.
            </p>
          </div>
        </div>
      </PageShell>
    </>
  );
}
