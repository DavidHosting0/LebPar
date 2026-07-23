export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  /** ISO date of capture — update when replacing with real photos */
  date: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/media/gallery/takeoff-harissa.svg",
    alt: "Tandem paragliding takeoff near Harissa above Jounieh, Lebanon with LebPar",
    caption: "Takeoff run near Harissa / Ghosta",
    date: "2026-06-01",
  },
  {
    src: "/media/gallery/jounieh-bay-air.svg",
    alt: "Aerial view of Jounieh Bay Mediterranean coast during LebPar tandem paragliding flight",
    caption: "Jounieh Bay from the air",
    date: "2026-06-01",
  },
  {
    src: "/media/gallery/harissa-shrine-air.svg",
    alt: "Our Lady of Lebanon Harissa shrine seen from a LebPar paraglider wing",
    caption: "Harissa shrine perspective",
    date: "2026-06-12",
  },
  {
    src: "/media/gallery/sunset-glide.svg",
    alt: "Sunset tandem paragliding silhouette over Jounieh coastline with LebPar",
    caption: "Golden-hour sunset flight",
    date: "2026-06-18",
  },
  {
    src: "/media/gallery/landing-coast.svg",
    alt: "Soft landing after tandem paragliding flight near Jounieh coast Lebanon",
    caption: "Coastal landing approach",
    date: "2026-07-02",
  },
  {
    src: "/media/gallery/briefing-gear.svg",
    alt: "LebPar pilot giving tandem paragliding safety briefing with helmet and harness in Jounieh",
    caption: "Pre-flight safety briefing",
    date: "2026-07-10",
  },
];
