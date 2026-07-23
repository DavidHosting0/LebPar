/**
 * LebPar — single source of truth for NAP, offers, pilots, and contact.
 * Replace TODO fields with verified business data before launch.
 */

export const siteConfig = {
  name: "LebPar",
  legalName: "LebPar Paragliding",
  tagline: "Tandem paragliding over Jounieh Bay",
  url: "https://lebpar.com",
  localeDefault: "en" as const,
  locales: ["en", "ar", "fr", "de"] as const,
  /** TODO: replace with verified phone / WhatsApp (digits only, country code) */
  phoneDisplay: "+961 XX XXX XXX",
  phoneE164: "+96100000000",
  whatsappE164: "96100000000",
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
    id: "week-tour",
    name: "1-Week Paragliding Tour",
    priceFromUsd: 1200,
    duration: "7 days",
  },
  adventureTour: {
    id: "adventure-tour",
    name: "2-Week Adventure Journey",
    priceFromUsd: 2200,
    duration: "14 days",
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

export const reviews = [
  {
    author: "Sample Guest",
    rating: 5,
    text: "TODO: Replace with real Google / TripAdvisor reviews before launch.",
    date: "2026-01-15",
  },
  {
    author: "Sample Couple",
    rating: 5,
    text: "TODO: Real review highlighting safety briefing and Jounieh Bay views.",
    date: "2026-03-02",
  },
  {
    author: "Sample Family",
    rating: 5,
    text: "TODO: Real review for family / first-timer experience.",
    date: "2026-05-20",
  },
] as const;

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 3,
  bestRating: 5,
  worstRating: 1,
} as const;
