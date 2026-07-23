export type FaqItem = { question: string; answer: string };

export type PageSeo = {
  title: string;
  description: string;
  h1: string;
};

export const pages = {
  home: {
    title: "LebPar | Paragliding Lebanon Jounieh",
    description:
      "Book tandem paragliding in Jounieh with LebPar. Harissa takeoff, Bay views, certified pilots, sunset flights & gift vouchers.",
    h1: "Paragliding over Jounieh Bay with LebPar",
    intro:
      "LebPar is your Jounieh-based tandem paragliding operator for first-timers, couples, families, cruise guests, and adventure travelers. We launch near Harissa and fly the Mediterranean coastline — with clear safety briefings, modern equipment, and WhatsApp booking that takes minutes.",
    whyHeading: "Why fly with LebPar",
    why: [
      {
        title: "Local launch expertise",
        body: "We know Ghosta / Harissa winds, abort criteria, and the classic Jounieh Bay line by heart.",
      },
      {
        title: "Legal tandem only",
        body: "Acrobatic paragliding is banned in Lebanon. We fly responsible tandem sightseeing flights only.",
      },
      {
        title: "Clear inclusions",
        body: "Transport to takeoff, briefing, gear, and flight video options — priced transparently in USD.",
      },
    ],
    flightsHeading: "Flights for every itinerary",
    trustHeading: "Safety, pilots, and real reviews",
  } satisfies PageSeo & Record<string, unknown>,

  flights: {
    title: "Paragliding Flights & Prices | LebPar",
    description:
      "Compare LebPar tandem, premium, and sunset paragliding flights in Jounieh. Clear USD prices, inclusions, and WhatsApp booking.",
    h1: "Paragliding flights and prices in Lebanon",
    intro:
      "Choose a classic 15-minute tandem, a longer premium coastal flight, or a golden-hour sunset slot. All LebPar flights include a certified pilot, equipment, and transfer to the Harissa-area takeoff.",
  },

  tandem: {
    title: "15-Min Tandem Paragliding Jounieh | LebPar",
    description:
      "Book a 15-minute tandem paragliding flight over Jounieh Bay. Harissa takeoff, certified pilot, video included. From $120.",
    h1: "15-minute tandem paragliding in Jounieh",
    intro:
      "Our signature tandem is built for first-timers and travelers short on time: a calm run at takeoff, soaring views of Our Lady of Lebanon and Jounieh Bay, and a soft landing near the coast.",
  },

  premium: {
    title: "30-Min Premium Paragliding Flight | LebPar",
    description:
      "Extend your Lebanon paragliding experience with a 30-minute premium flight — more coastline, more photos, more sky time.",
    h1: "30-minute premium paragliding flight",
    intro:
      "More airtime means more of the Keserwan ridgeline, Harissa shrine perspectives, and Mediterranean blues. Ideal for couples, content creators, and anyone who wants the long glide.",
  },

  sunset: {
    title: "Sunset Paragliding Jounieh | LebPar",
    description:
      "Fly at golden hour over Jounieh Bay. LebPar sunset tandem flights with certified pilots, video, and WhatsApp booking.",
    h1: "Sunset paragliding over Jounieh Bay",
    intro:
      "When the coast turns gold and the lights of Jounieh begin to sparkle, a sunset tandem becomes the memory of the trip. Slots are weather- and season-dependent — book early.",
  },

  tours: {
    title: "Paragliding Tours Lebanon | LebPar",
    description:
      "1-week paragliding tours and 2-week adventure journeys with LebPar — flights, sights, and hotels around Lebanon.",
    h1: "Paragliding tours and adventure journeys",
    intro:
      "Go beyond a single flight. LebPar designs multi-day experiences combining tandem flights with coastal towns, mountain viewpoints, and curated stays — for groups, influencers, and slow travelers.",
  },

  giftCards: {
    title: "Paragliding Gift Vouchers Lebanon | LebPar",
    description:
      "Give a LebPar tandem flight voucher. Flexible gift cards for Jounieh paragliding — book by WhatsApp.",
    h1: "Gift cards for paragliding in Lebanon",
    intro:
      "A LebPar voucher is the easiest way to gift adrenaline with a view. Valid for standard tandem flights (upgrades available) and redeemable by WhatsApp once the recipient is ready to fly.",
  },

  booking: {
    title: "Book Paragliding Lebanon | LebPar",
    description:
      "Book your LebPar tandem flight by WhatsApp. Pick flight type, date, and passenger details in minutes.",
    h1: "Book your LebPar paragliding flight",
    intro:
      "Tell us who is flying, which experience you want, and your preferred date. We confirm weather windows and meet you in Jounieh.",
  },

  safety: {
    title: "Is Paragliding Safe in Lebanon? | LebPar",
    description:
      "LebPar safety standards: weather abort rules, equipment checks, legal tandem-only flights, and passenger briefings in Jounieh.",
    h1: "How LebPar keeps tandem paragliding safe",
    intro:
      "After recent national scrutiny of acrobatic flying, travelers rightly ask hard questions. Here is exactly how LebPar approaches risk, legality, and passenger care.",
  },

  pilots: {
    title: "LebPar Pilot Team | Certified Tandem Pilots",
    description:
      "Meet LebPar’s tandem pilots in Jounieh. Certifications, experience, and the people who fly you over Harissa Bay.",
    h1: "Meet the LebPar pilot team",
    intro:
      "E-E-A-T starts with named experts. Our pilots brief you on the ground and fly every meter of your route with local wind knowledge.",
  },

  reviews: {
    title: "LebPar Reviews | Paragliding Jounieh",
    description:
      "Guest reviews of LebPar tandem paragliding in Jounieh — first-timers, couples, and families.",
    h1: "What guests say about LebPar",
    intro:
      "Real passenger feedback helps you decide. We publish ratings transparently and invite you to leave a review after your flight.",
  },

  faq: {
    title: "Paragliding Lebanon FAQ | LebPar",
    description:
      "FAQ: weight limits, ages, what to wear, weather cancellations, prices, and booking tandem paragliding in Jounieh.",
    h1: "Paragliding in Lebanon — frequently asked questions",
    intro:
      "Straight answers for international visitors planning a tandem flight with LebPar in Jounieh.",
  },

  about: {
    title: "About LebPar | Paragliding Jounieh",
    description:
      "LebPar is a Jounieh tandem paragliding operator focused on safe flights, clear pricing, and Mediterranean views from Harissa.",
    h1: "About LebPar",
    intro:
      "LebPar was built to give visitors a trustworthy, well-briefed tandem experience over one of Lebanon’s most iconic coastlines — without hype, without illegal aerobatics.",
  },

  contact: {
    title: "Contact LebPar | Jounieh Paragliding",
    description:
      "Contact LebPar in Jounieh by WhatsApp, phone, or email. Book tandem paragliding over Harissa and Jounieh Bay.",
    h1: "Contact LebPar in Jounieh",
    intro:
      "Reach us for same-day availability, group quotes, cruise-ship timing, and gift vouchers.",
  },

  gallery: {
    title: "Paragliding Gallery Jounieh | LebPar",
    description:
      "Photos from LebPar tandem flights over Jounieh Bay and Harissa — takeoff, flight, and landing moments.",
    h1: "Flight gallery — Jounieh from the air",
    intro:
      "A visual preview of the coastline, shrine, and bay you’ll see on a LebPar tandem. Replace placeholders with dated flight photos before launch.",
  },

  jounieh: {
    title: "Paragliding in Jounieh Guide | LebPar",
    description:
      "Local guide to paragliding in Jounieh: meeting point, bay views, timing tips, and how LebPar flights work.",
    h1: "Paragliding in Jounieh — visitor guide",
    intro:
      "Jounieh is Lebanon’s most famous tandem coastal flight arena. Here’s how the day works when you book with LebPar.",
  },

  harissa: {
    title: "Paragliding Harissa Takeoff | LebPar",
    description:
      "Fly from the Harissa / Ghosta takeoff with LebPar. Views of Our Lady of Lebanon and Jounieh Bay.",
    h1: "Harissa takeoff — where LebPar flights begin",
    intro:
      "Most LebPar tandems launch from the hills near Harissa (Ghosta area), giving you an immediate panorama of the shrine, ridge, and Mediterranean.",
  },
} as const;

export const homeFaqs: FaqItem[] = [
  {
    question: "Do I need experience for tandem paragliding in Lebanon?",
    answer:
      "No. Your LebPar pilot controls the wing. You receive a short ground briefing, run a few steps at takeoff, then enjoy the flight.",
  },
  {
    question: "How much does paragliding in Jounieh cost?",
    answer:
      "LebPar’s standard 15-minute tandem starts at $120 USD per person including transport and video. Premium and sunset flights are priced separately on our flights page.",
  },
  {
    question: "Is paragliding safe with LebPar?",
    answer:
      "We fly legal tandem sightseeing only, check weather and wind on site, and cancel when conditions are outside our limits. Acrobatic maneuvers are not offered.",
  },
  {
    question: "What is the weight and age limit?",
    answer:
      "Typical passenger weight is up to about 110 kg depending on conditions. Children may fly with parental consent when the pilot assesses readiness — confirm when booking.",
  },
];

export const faqItems: FaqItem[] = [
  ...homeFaqs,
  {
    question: "What should I wear?",
    answer:
      "Closed-toe shoes (trainers or light hiking shoes), comfortable layers, and sunglasses. We provide helmet and harness.",
  },
  {
    question: "What if the weather is bad?",
    answer:
      "Safety first. We reschedule or refund according to our weather policy if winds or visibility are unsafe.",
  },
  {
    question: "Can cruise passengers fly the same day?",
    answer:
      "Often yes if timing and weather align. Message us your port arrival window on WhatsApp and we will advise.",
  },
  {
    question: "Do you offer gift vouchers?",
    answer:
      "Yes. LebPar gift cards cover a standard tandem and can be upgraded. See the gift cards page or WhatsApp us.",
  },
  {
    question: "Where do we meet?",
    answer:
      "We meet in Jounieh (exact pin shared after booking) and transfer you to the Harissa-area takeoff.",
  },
];
