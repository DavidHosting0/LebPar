import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { pages } from "@/content/pages";
import { aggregateRating, reviews } from "@/content/site";
import { breadcrumbJsonLd, reviewJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/reviews",
    title: pages.reviews.title,
    description: pages.reviews.description,
  });
}

export default async function ReviewsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.reviews;

  return (
    <>
      <SchemaScript
        data={[
          ...reviewJsonLd(),
          breadcrumbJsonLd(
            [
              { name: "Home", path: "/" },
              { name: "Reviews", path: "/reviews" },
            ],
            locale,
          ),
        ]}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Reviews" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <p className="mb-8 text-lg text-ink/80">
          Aggregate rating:{" "}
          <strong>
            {aggregateRating.ratingValue}/{aggregateRating.bestRating}
          </strong>{" "}
          ({aggregateRating.reviewCount} reviews — replace with live Google count at launch)
        </p>
        <div className="space-y-8">
          {reviews.map((review) => (
            <blockquote
              key={`${review.author}-${review.date}`}
              className="border-l-4 border-sea pl-5"
            >
              <p className="text-ink/90">&ldquo;{review.text}&rdquo;</p>
              <footer className="mt-3 text-sm text-stone">
                — {review.author} · {review.date} · {"★".repeat(review.rating)}
              </footer>
            </blockquote>
          ))}
        </div>
      </PageShell>
    </>
  );
}
