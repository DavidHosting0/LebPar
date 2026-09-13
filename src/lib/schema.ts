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
    image: absoluteUrl("/media/hero/jounieh-tandem.jpeg"),
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
    areaServed: [
      { "@id": `${siteConfig.url}/#jounieh-bay` },
      { "@id": `${siteConfig.url}/#harissa-takeoff` },
    ],
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

export function webSiteJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: locale,
    publisher: { "@id": `${siteConfig.url}/#business` },
    description: siteConfig.tagline,
  };
}

export function touristAttractionsJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "@id": `${siteConfig.url}/#jounieh-bay`,
      name: "Jounieh Bay",
      description:
        "Mediterranean bay and coastal flight corridor for tandem paragliding in Jounieh, Lebanon.",
      url: absoluteUrl("/en/locations/jounieh"),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jounieh",
        addressRegion: "Keserwan",
        addressCountry: "LB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.address.geo.lat,
        longitude: siteConfig.address.geo.lng,
      },
      touristType: "Adventure tourism",
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "@id": `${siteConfig.url}/#harissa-takeoff`,
      name: "Harissa / Ghosta paragliding takeoff",
      description:
        "Hillside takeoff area near Our Lady of Lebanon used for LebPar tandem flights over Jounieh Bay.",
      url: absoluteUrl("/en/locations/harissa"),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Harissa",
        addressRegion: "Keserwan",
        addressCountry: "LB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.9808,
        longitude: 35.6506,
      },
      touristType: "Adventure tourism",
    },
  ];
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

export function tourOffersJsonLd(locale: string) {
  return [
    offerJsonLd({
      name: offers.weekTour.name,
      description: "7-day coastal paragliding tour centered on Jounieh Bay, Lebanon",
      priceUsd: offers.weekTour.priceFromUsd,
      url: absoluteUrl(`/${locale}/tours/${offers.weekTour.slug}`),
    }),
    offerJsonLd({
      name: offers.adventureTour.name,
      description:
        "14-day mountains and Mediterranean paragliding journey across Lebanon",
      priceUsd: offers.adventureTour.priceFromUsd,
      url: absoluteUrl(`/${locale}/tours/${offers.adventureTour.slug}`),
    }),
    offerJsonLd({
      name: offers.grandTour.name,
      description:
        "21-day grand paragliding tour across Jounieh, Faraya, Ehden, Cedars and Miziara",
      priceUsd: offers.grandTour.priceFromUsd,
      url: absoluteUrl(`/${locale}/tours/${offers.grandTour.slug}`),
    }),
  ];
}
