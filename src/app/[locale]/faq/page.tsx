import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqItems, pages } from "@/content/pages";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/faq",
    title: pages.faq.title,
    description: pages.faq.description,
  });
}

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.faq;

  return (
    <>
      <SchemaScript
        data={[
          faqPageJsonLd(faqItems),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <dl className="mx-auto max-w-3xl space-y-8">
          {faqItems.map((item) => (
            <div key={item.question} id={item.question.slice(0, 40).replace(/\W+/g, "-").toLowerCase()}>
              <dt>
                <h2 className="font-display text-xl font-semibold text-sea-deep">{item.question}</h2>
              </dt>
              <dd className="mt-2 text-ink/85">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </PageShell>
    </>
  );
}
