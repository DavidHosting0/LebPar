import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/content/site";

export async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-sea-deep/10 bg-sea-deep text-foam">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <p className="font-display text-2xl font-bold">{siteConfig.name}</p>
          <p className="mt-3 text-sm text-foam/80">{t("tagline")}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-sand">{t("explore")}</p>
          <ul className="mt-3 space-y-2 text-sm text-foam/85">
            <li>
              <Link href="/flights" className="hover:text-sand">
                Flights
              </Link>
            </li>
            <li>
              <Link href="/tours" className="hover:text-sand">
                Tours
              </Link>
            </li>
            <li>
              <Link href="/locations/jounieh" className="hover:text-sand">
                Jounieh
              </Link>
            </li>
            <li>
              <Link href="/locations/harissa" className="hover:text-sand">
                Harissa
              </Link>
            </li>
            <li>
              <Link href="/gift-cards" className="hover:text-sand">
                Gift cards
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-sand">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-sand">{t("trust")}</p>
          <ul className="mt-3 space-y-2 text-sm text-foam/85">
            <li>
              <Link href="/safety" className="hover:text-sand">
                Safety
              </Link>
            </li>
            <li>
              <Link href="/pilots" className="hover:text-sand">
                Pilots
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-sand">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-sand">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sand">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-sand">{t("contact")}</p>
          <ul className="mt-3 space-y-2 text-sm text-foam/85">
            <li>{siteConfig.address.street}</li>
            <li>
              {siteConfig.address.locality}, {siteConfig.address.country}
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-sand">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-sand">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <Link href="/booking" className="font-semibold text-sand hover:underline">
                Book now
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-foam/10 px-4 py-4 text-center text-xs text-foam/60">
        © {year} {siteConfig.name}. {t("rights")}
      </div>
    </footer>
  );
}
