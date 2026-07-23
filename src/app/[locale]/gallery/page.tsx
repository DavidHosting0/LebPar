import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { PageShell } from "@/components/ui/PageShell";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { galleryItems } from "@/content/gallery";
import { pages } from "@/content/pages";
import { breadcrumbJsonLd } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata({
    locale,
    path: "/gallery",
    title: pages.gallery.title,
    description: pages.gallery.description,
  });
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const p = pages.gallery;

  return (
    <>
      <SchemaScript
        data={breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ],
          locale,
        )}
      />
      <PageShell
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Gallery" },
        ]}
        h1={p.h1}
        intro={p.intro}
      >
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <li key={item.src} className="group">
              <figure>
                <div className="relative aspect-[3/2] overflow-hidden bg-sea/15">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-ink/80">
                  <span className="font-medium text-sea-deep">{item.caption}</span>
                  <span className="text-stone"> · {item.date}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </PageShell>
    </>
  );
}
