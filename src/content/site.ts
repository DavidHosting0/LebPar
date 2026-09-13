/**
 * LebPar — single source of truth for NAP, offers, pilots, and contact.
 * Replace TODO fields with verified business data before launch.
 */

export const siteConfig = {
  name: "LebPar",
  legalName: "LebPar Paragliding",
  tagline: "1–3 week paragliding tours through Lebanon",
  url: "https://lebpar.com",
  localeDefault: "en" as const,
  locales: ["en", "ar", "fr", "de"] as const,
  /** TODO: replace with verified phone / WhatsApp before launch (placeholder for MVP) */
  phoneDisplay: "+961 70 123 456",
  phoneE164: "+96170123456",
  whatsappE164: "96170123456",
  /** TODO: replace with real inbox */
  email: "hello@lebpar.com",
  address: {
    street: "Jounieh Sea Road",
    locality: "Jounieh",
    region: "Keserwan",
    country: "Lebanon",
    countryCode: "LB",
    /** TODO: replace with precise coordinates */
    geo: { lat: 33.9806, lng: 35.6178 },
  },
  hours: "Daily 9:00–18:00 (weather permitting)",
  social: {
    /** TODO: replace with real profiles */
    instagram: "https://instagram.com/lebpar",
    facebook: "https://facebook.com/lebpar",
  },
  /** License / insurance — only publish after verification */
  compliance: {
    ministryNote:
      "We operate legal tandem flights only. Acrobatic paragliding is prohibited in Lebanon.",
    /** TODO: replace with real cert / insurance wording once verified */
    licenseClaim: "TODO: Ministry of Youth & Sports license details",
    insuranceClaim: "TODO: passenger insurance details",
  },
} as const;

export type Locale = (typeof siteConfig.locales)[number];

export const offers = {
  tandem: {
    id: "tandem",
    slug: "tandem",
    name: "15-Minute Tandem Flight",
    duration: "10–15 minutes",
    priceUsd: 120,
    weightMaxKg: 110,
    includes: [
      "Certified tandem pilot",
      "Transport to takeoff near Harissa / Ghosta",
      "Full safety briefing & equipment",
      "4K flight video",
    ],
  },
  premium: {
    id: "premium",
    slug: "premium",
    name: "30-Minute Premium Flight",
    duration: "25–30 minutes",
    priceUsd: 180,
    weightMaxKg: 110,
    includes: [
      "Extended coastal & mountain routing",
      "Certified tandem pilot",
      "Transport & safety briefing",
      "4K video + still photo package",
    ],
  },
  sunset: {
    id: "sunset",
    slug: "sunset",
    name: "Sunset Flight",
    duration: "15–20 minutes",
    priceUsd: 150,
    weightMaxKg: 110,
    includes: [
      "Golden-hour departure slot",
      "Views over Jounieh Bay at sunset",
      "Transport & safety briefing",
      "4K video included",
    ],
  },
  photoVideo: {
    id: "photo-video",
    name: "Photo & Video Package",
    priceUsd: 40,
    note: "Add-on or upgrade — confirm availability when booking",
  },
  giftCard: {
    id: "gift-card",
    name: "Gift voucher",
    priceFromUsd: 120,
    validityMonths: 12,
  },
  weekTour: {
    id: "coastal-week",
    slug: "coastal-week",
    name: "Coastal Flyer Week",
    priceFromUsd: 1200,
    duration: "7 days",
  },
  adventureTour: {
    id: "mountain-coast",
    slug: "mountain-coast",
    name: "Mountains & Mediterranean",
    priceFromUsd: 2200,
    duration: "14 days",
  },
  grandTour: {
    id: "grand-lebanon",
    slug: "grand-lebanon",
    name: "Grand Lebanon from Above",
    priceFromUsd: 3200,
    duration: "21 days",
  },
} as const;

export type Pilot = {
  id: string;
  name: string;
  role: string;
  /** TODO: replace placeholder bios / certs with verified pilot data */
  bio: string;
  certifications: string[];
  flightsApprox: string;
  image: string;
  imageAlt: string;
};

export const pilots: Pilot[] = [
  {
    id: "pilot-1",
    name: "TODO: Pilot Name",
    role: "Lead tandem pilot",
    bio: "TODO: First-hand bio — years flying Jounieh / Harissa, passenger focus, languages spoken.",
    certifications: ["TODO: APPI / FAI / national cert"],
    flightsApprox: "TODO: e.g. 2,000+ tandem flights",
    image: "/media/pilots/pilot-placeholder.svg",
    imageAlt:
      "LebPar tandem paragliding pilot ready for takeoff above Jounieh Bay, Lebanon",
  },
  {
    id: "pilot-2",
    name: "TODO: Pilot Name",
    role: "Tandem pilot",
    bio: "TODO: First-hand bio — safety briefings, family flights, cruise passenger experience.",
    certifications: ["TODO: certification"],
    flightsApprox: "TODO: flight hours",
    image: "/media/pilots/pilot-placeholder.svg",
    imageAlt:
      "LebPar certified tandem pilot with paraglider wing at Harissa takeoff, Lebanon",
  },
];

/** Placeholder guest reviews — swap for real Google / TripAdvisor quotes before launch. */
export const reviews = [
  {
    author: "Maya K.",
    rating: 5,
    text: "Best decision of our Lebanon trip. Clear briefing, calm takeoff near Harissa, and unforgettable views of Jounieh Bay. Felt safe the whole time.",
    date: "2026-01-18",
  },
  {
    author: "James & Elena",
    rating: 5,
    text: "We booked a tandem as a couple and loved every minute. The pilot explained everything, the gear felt solid, and the coastline from the air was stunning.",
    date: "2026-02-22",
  },
  {
    author: "Omar H.",
    rating: 5,
    text: "First time paragliding and I was nervous — LebPar made it easy. Professional crew, no pressure, and a soft landing near the coast. Highly recommend.",
    date: "2026-03-14",
  },
  {
    author: "Sophie L.",
    rating: 5,
    text: "Sunset flight over Jounieh was magical. WhatsApp booking was quick, pickup was on time, and the video of our flight is already a keepsake.",
    date: "2026-04-09",
  },
  {
    author: "The Haddad family",
    rating: 5,
    text: "Flew with our teenage kids — patient briefing, careful weight check, and a smooth flight. Perfect family adventure if you want paragliding in Lebanon done right.",
    date: "2026-05-27",
  },
] as const;

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 5,
  bestRating: 5,
  worstRating: 1,
} as const;
