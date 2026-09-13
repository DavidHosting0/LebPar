export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  /** ISO date of capture */
  date: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/media/gallery/tandem-coast.jpeg",
    alt: "Tandem paraglider over the Jounieh Mediterranean coastline with LebPar",
    caption: "Tandem over Jounieh Bay",
    date: "2025-08-12",
  },
  {
    src: "/media/gallery/jounieh-yellow-wing.jpeg",
    alt: "Yellow paraglider wing soaring above turquoise Jounieh Bay, Lebanon",
    caption: "Yellow wing above the bay",
    date: "2025-07-20",
  },
  {
    src: "/media/gallery/jounieh-aerial.jpg",
    alt: "Aerial view of Jounieh coastal city and Mediterranean from paraglider",
    caption: "Jounieh from altitude",
    date: "2025-07-18",
  },
  {
    src: "/media/gallery/sunset-soaring.jpeg",
    alt: "Two paragliders silhouetted at sunset over Lebanese coastal cliffs",
    caption: "Sunset soaring",
    date: "2025-09-03",
  },
  {
    src: "/media/gallery/faraya-charbel.jpeg",
    alt: "Saint Charbel statue and FARAYA sign above Shabrouh reservoir, Lebanon",
    caption: "Faraya & Saint Charbel",
    date: "2025-06-14",
  },
  {
    src: "/media/gallery/shabrouh-dam.jpg",
    alt: "Turquoise Shabrouh Dam reservoir surrounded by snowy Faraya mountains",
    caption: "Shabrouh Dam in winter",
    date: "2025-02-08",
  },
  {
    src: "/media/gallery/ehden-snow.jpeg",
    alt: "Paragliding view over snow-covered Ehden mountains and valley villages",
    caption: "Ehden snow ridges",
    date: "2025-03-22",
  },
  {
    src: "/media/gallery/cedars-flight.jpeg",
    alt: "Colorful paraglider over arid Cedars highland mountains under blue sky",
    caption: "Cedars highland flight",
    date: "2025-08-29",
  },
  {
    src: "/media/gallery/miziara-ridge.jpeg",
    alt: "Paraglider above green Miziara mountain ridge and terracotta village roofs",
    caption: "Miziara green ridge",
    date: "2025-05-11",
  },
];
