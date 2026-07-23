import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { offers } from "@/content/site";
import { breadcrumbJsonLd, offerJsonLd } from "@/lib/schema";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/gift-cards",
    title: pages.giftCards.title,
    description: pages.giftCards.description,
  });
}

export default async function GiftCardsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.giftCards;

  return (
    <>
      <SchemaScript
        data={[
          offerJsonLd({
            name: offers.giftCard.name,
            description: p.description,
            priceUsd: offers.giftCard.priceFromUsd,
            url: absoluteUrl(`/${locale}/gift-cards`),
          }),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Gift cards", path: "/gift-cards" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Gift cards" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <div className="max-w-2xl space-y-6">
          <h2 className="font-display text-2xl font-semibold text-sea-deep">How it works</h2>
          <ol className="list-decimal space-y-2 pl-5 text-ink/85">
            <li>Purchase a voucher via WhatsApp (amount from ${offers.giftCard.priceFromUsd}).</li>
            <li>We send a digital code and redemption instructions.</li>
            <li>Recipient books any available weather window within {offers.giftCard.validityMonths} months.</li>
          </ol>
          <h2 className="font-display text-2xl font-semibold text-sea-deep">Perfect for</h2>
          <ul className="list-inside list-disc text-ink/85">
            <li>Birthdays and anniversaries</li>
            <li>Visiting friends and diaspora guests</li>
            <li>Corporate thank-yous and team gifts</li>
          </ul>
          <Link
            href="/booking"
            className="inline-flex rounded-full bg-sea-deep px-6 py-3 text-sm font-semibold text-foam hover:bg-sea"
          >
            Order a gift card
          </Link>
        </div>
      </PageShell>
    </>
  );
}
