/**
 * Multi-day Lebanon paragliding tours — destinations drawn from real flight photos.
 */

export type Destination = {
  id: string;
  name: string;
  region: string;
  blurb: string;
  image: string;
  imageAlt: string;
};

export type TourDay = {
  day: string;
  title: string;
  body: string;
};

export type Tour = {
  id: string;
  slug: string;
  name: string;
  duration: string;
  durationDays: number;
  priceFromUsd: number;
  tagline: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  destinations: string[];
  highlights: string[];
  includes: string[];
  itinerary: TourDay[];
  gallery: { src: string; alt: string }[];
};

export const destinations: Destination[] = [
  {
    id: "jounieh",
    name: "Jounieh Bay",
    region: "Keserwan coast",
    blurb:
      "Lebanon’s classic tandem corridor — turquoise Mediterranean, hillside cityscape, and soft coastal landings.",
    image: "/media/destinations/jounieh/tandem-turquoise.jpeg",
    imageAlt:
      "Tandem paraglider over turquoise Jounieh Bay and Mediterranean coastline, Lebanon",
  },
  {
    id: "faraya",
    name: "Faraya & Shabrouh",
    region: "Mzaar Kfardebian",
    blurb:
      "High mountain plateaus, the Saint Charbel statue, the FARAYA landmark, and the turquoise Shabrouh reservoir.",
    image: "/media/destinations/faraya/saint-charbel-sign.jpeg",
    imageAlt:
      "Aerial view of Saint Charbel statue and FARAYA sign above Shabrouh Dam, Lebanon",
  },
  {
    id: "ehden",
    name: "Ehden",
    region: "North Lebanon mountains",
    blurb:
      "Snow-dusted ridges, deep valleys, and village rooftops — mountain flying with alpine character.",
    image: "/media/destinations/ehden/snow-flight.jpeg",
    imageAlt:
      "Paragliding harness view over snowy Ehden mountains and valley villages, Lebanon",
  },
  {
    id: "cedars",
    name: "Cedars highlands",
    region: "Bcharre / Mount Lebanon",
    blurb:
      "Arid high ridges and open sky — big mountain terrain for pilots who want altitude and space.",
    image: "/media/destinations/cedars/paraglider-mountains.jpeg",
    imageAlt:
      "Colorful paraglider soaring over arid Cedars mountain ridges under blue sky, Lebanon",
  },
  {
    id: "miziara",
    name: "Miziara",
    region: "Zgharta district",
    blurb:
      "Green mountain villages with terracotta roofs and long sightlines toward the Mediterranean.",
    image: "/media/destinations/miziara/green-ridge.jpeg",
    imageAlt:
      "Paraglider above green Miziara mountain ridge and Lebanese village rooftops",
  },
];

export const tours: Tour[] = [
  {
    id: "coastal-week",
    slug: "coastal-week",
    name: "Coastal Flyer Week",
    duration: "7 days",
    durationDays: 7,
    priceFromUsd: 1200,
    tagline: "Jounieh Bay, tandem flights & golden-hour soaring",
    summary:
      "A focused week on Lebanon’s most famous coastal flight line. Multiple tandem flights over Jounieh, a sunset slot when weather allows, and time to explore Harissa and the Keserwan shore — ideal if you want sky time without a packed overland schedule.",
    heroImage: "/media/destinations/jounieh/yellow-wing-bay.jpeg",
    heroAlt:
      "Yellow paraglider wing soaring over Jounieh Bay turquoise water and coastal city, Lebanon",
    destinations: ["jounieh"],
    highlights: [
      "3–4 tandem flights over Jounieh Bay",
      "Sunset soaring when conditions allow",
      "Harissa / Ghosta takeoff briefings",
      "4K flight video on included flights",
      "Flexible free afternoons on the coast",
    ],
    includes: [
      "Certified tandem pilots & equipment",
      "Transfers to takeoff sites",
      "Hotel recommendations or package stays (on request)",
      "Weather-window planning & WhatsApp support",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive & orient",
        body: "Meet in Jounieh, gear check, safety briefing, and a first coastal tandem if wind allows.",
      },
      {
        day: "Days 2–4",
        title: "Bay flight block",
        body: "Repeat flights over the Mediterranean corridor — Harissa shrine views, cityscape, and soft coastal landings.",
      },
      {
        day: "Day 5",
        title: "Sunset slot",
        body: "Golden-hour departure when season and weather align — the coast turns amber over the bay.",
      },
      {
        day: "Days 6–7",
        title: "Buffer & departure",
        body: "Weather catch-up flights, free time in town, and departure transfer guidance.",
      },
    ],
    gallery: [
      {
        src: "/media/destinations/jounieh/tandem-turquoise.jpeg",
        alt: "Tandem paraglider over turquoise Jounieh Bay",
      },
      {
        src: "/media/destinations/jounieh/yellow-wing-bay.jpeg",
        alt: "Yellow wing paraglider above Jounieh coastline",
      },
      {
        src: "/media/destinations/soaring/sunset-duo.jpeg",
        alt: "Two paragliders at sunset over Lebanese coastal cliffs",
      },
      {
        src: "/media/destinations/jounieh/tandem-coast.jpeg",
        alt: "Tandem passengers flying the Jounieh coast",
      },
    ],
  },
  {
    id: "mountain-coast",
    slug: "mountain-coast",
    name: "Mountains & Mediterranean",
    duration: "14 days",
    durationDays: 14,
    priceFromUsd: 2200,
    tagline: "Coastal tandems plus Faraya, Ehden & Miziara highlands",
    summary:
      "Two weeks that move between sea and altitude. Start with Jounieh Bay flights, then climb into Faraya’s highland landmarks, Ehden’s snowy ridges, and Miziara’s green villages — a full Lebanon narrative from above.",
    heroImage: "/media/destinations/faraya/saint-charbel-sign.jpeg",
    heroAlt:
      "Faraya mountain plateau with Saint Charbel statue and FARAYA sign above turquoise reservoir",
    destinations: ["jounieh", "faraya", "ehden", "miziara"],
    highlights: [
      "Coastal tandem block in Jounieh",
      "Faraya & Shabrouh highland day(s)",
      "Ehden mountain flight window",
      "Miziara ridge & village scenery",
      "Mix of flight days and sightseeing buffers",
    ],
    includes: [
      "Multiple tandem / guided flight sessions",
      "Inter-destination transfer guidance",
      "Hotel package tiers on request",
      "Pilot briefings at each site",
      "Photo & video options across the journey",
    ],
    itinerary: [
      {
        day: "Days 1–4",
        title: "Jounieh coastal base",
        body: "Settle on the coast, fly the bay corridor, and lock in weather rhythm with the LebPar team.",
      },
      {
        day: "Days 5–7",
        title: "Faraya highlands",
        body: "Mountain plateaus, Saint Charbel viewpoint, FARAYA landmark, and Shabrouh reservoir vistas.",
      },
      {
        day: "Days 8–10",
        title: "Ehden ridges",
        body: "North Lebanon mountains — snow patches in season, valley villages, and big alpine air.",
      },
      {
        day: "Days 11–12",
        title: "Miziara green line",
        body: "Forest ridges and terracotta villages with long views toward the Mediterranean.",
      },
      {
        day: "Days 13–14",
        title: "Coast return & wrap",
        body: "Optional catch-up flight in Jounieh, rest day, and departure support.",
      },
    ],
    gallery: [
      {
        src: "/media/destinations/jounieh/bay-flight.jpeg",
        alt: "Paragliding flight over Jounieh Bay",
      },
      {
        src: "/media/destinations/faraya/shabrouh-winter.jpg",
        alt: "Turquoise Shabrouh Dam surrounded by snowy Faraya mountains",
      },
      {
        src: "/media/destinations/ehden/snow-flight.jpeg",
        alt: "Snow flight view over Ehden mountains",
      },
      {
        src: "/media/destinations/miziara/green-ridge.jpeg",
        alt: "Paraglider above Miziara green mountain villages",
      },
    ],
  },
  {
    id: "grand-lebanon",
    slug: "grand-lebanon",
    name: "Grand Lebanon from Above",
    duration: "21 days",
    durationDays: 21,
    priceFromUsd: 3200,
    tagline: "Three weeks across coast, Faraya, Ehden, Cedars & Miziara",
    summary:
      "Our deepest immersion: three weeks flying and traveling Lebanon’s signature landscapes. Coastal tandems, highland Faraya, Ehden valleys, Cedars ridges, and Miziara green lines — built for travelers who want repetition in the air and a full country story on the ground.",
    heroImage: "/media/destinations/cedars/paraglider-mountains.jpeg",
    heroAlt:
      "Paraglider with blue and orange wing over arid Cedars mountain peaks, Lebanon",
    destinations: ["jounieh", "faraya", "ehden", "cedars", "miziara"],
    highlights: [
      "All five signature flight regions",
      "Cedars highland mountain block",
      "Extended weather buffers for better flight odds",
      "Curated coastal & mountain stays",
      "Ideal for couples, small groups & creators",
    ],
    includes: [
      "Full multi-site flight program with certified pilots",
      "Itinerary design around wind & season",
      "Hotel / lodging package options",
      "Airport & inter-region transfer guidance",
      "Priority WhatsApp coordination throughout",
    ],
    itinerary: [
      {
        day: "Week 1",
        title: "Mediterranean base — Jounieh",
        body: "Multiple bay flights, sunset attempts, and coastal rhythm before heading inland.",
      },
      {
        day: "Week 2",
        title: "Highlands — Faraya & Ehden",
        body: "Shabrouh and Faraya landmarks, then north to Ehden’s ridges and valley villages.",
      },
      {
        day: "Week 3",
        title: "Cedars, Miziara & coast close",
        body: "Open mountain air in the Cedars highlands, green Miziara lines, then a final coastal flight and departure.",
      },
    ],
    gallery: [
      {
        src: "/media/destinations/cedars/paraglider-mountains.jpeg",
        alt: "Paraglider over Cedars mountain ridges",
      },
      {
        src: "/media/destinations/faraya/saint-charbel-sign.jpeg",
        alt: "Faraya Saint Charbel and highland reservoir",
      },
      {
        src: "/media/destinations/ehden/valley-view.jpeg",
        alt: "Ehden mountain and valley aerial view",
      },
      {
        src: "/media/destinations/miziara/village-flight.jpeg",
        alt: "Flight above Miziara mountain villages",
      },
      {
        src: "/media/destinations/jounieh/tandem-turquoise.jpeg",
        alt: "Tandem over Jounieh turquoise water",
      },
      {
        src: "/media/destinations/soaring/golden-hour.jpeg",
        alt: "Golden hour soaring on the Lebanese coast",
      },
    ],
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function destinationById(id: string): Destination | undefined {
  return destinations.find((d) => d.id === id);
}
