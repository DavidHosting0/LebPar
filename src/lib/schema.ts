import {
  aggregateRating,
  offers,
  pilots,
  reviews,
  siteConfig,
} from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    image: absoluteUrl("/media/hero/jounieh-bay-sky.svg"),
    description: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.lat,
      longitude: siteConfig.address.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
}

export function offerJsonLd(offer: {
  name: string;
  description?: string;
  priceUsd: number;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: offer.name,
    description: offer.description,
    url: offer.url,
    price: offer.priceUsd,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: { "@id": `${siteConfig.url}/#business` },
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(`/${locale}${item.path === "/" ? "" : item.path}`),
    })),
  };
}

export function personJsonLd() {
  return pilots.map((pilot) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: pilot.name,
    jobTitle: pilot.role,
    description: pilot.bio,
    image: absoluteUrl(pilot.image),
    worksFor: { "@id": `${siteConfig.url}/#business` },
  }));
}

export function reviewJsonLd() {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    datePublished: review.date,
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    itemReviewed: { "@id": `${siteConfig.url}/#business` },
  }));
}

export function flightOffersJsonLd(locale: string) {
  return [
    offerJsonLd({
      name: offers.tandem.name,
      description: "Tandem paragliding flight over Jounieh Bay, Lebanon",
      priceUsd: offers.tandem.priceUsd,
      url: absoluteUrl(`/${locale}/flights/tandem`),
    }),
    offerJsonLd({
      name: offers.premium.name,
      description: "Premium extended tandem flight over Harissa and Jounieh",
      priceUsd: offers.premium.priceUsd,
      url: absoluteUrl(`/${locale}/flights/premium`),
    }),
    offerJsonLd({
      name: offers.sunset.name,
      description: "Sunset tandem paragliding over Jounieh Bay",
      priceUsd: offers.sunset.priceUsd,
      url: absoluteUrl(`/${locale}/flights/sunset`),
    }),
  ];
}
