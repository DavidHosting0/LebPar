import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { WhatsAppLink } from "@/components/layout/StickyWhatsApp";

type Props = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  primaryHref = "/booking",
  primaryLabel = "Book now",
  secondaryHref = "/tours",
  secondaryLabel = "View tours",
}: Props) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden text-foam">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="animate-hero-zoom object-cover"
        sizes="100vw"
      />
      <div className="hero-scrim absolute inset-0" />
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col px-4 pb-16 pt-28 md:px-6 md:pb-20">
        <p className="animate-fade-up relative z-10 font-display text-lg font-bold uppercase tracking-[0.18em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-xl">
          LebPar · Lebanon tours
        </p>
        <div className="mt-auto">
          <h1 className="animate-fade-up-delay max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="animate-fade-up-delay-2 mt-4 max-w-xl text-base text-foam/90 md:text-lg">
              {subtitle}
            </p>
          )}
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <Link
              href={primaryHref}
              className="rounded-full bg-sunset px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-full border border-foam/40 bg-foam/10 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-foam/20"
            >
              {secondaryLabel}
            </Link>
            <WhatsAppLink className="rounded-full border border-[#25D366]/50 bg-[#25D366]/20 px-6 py-3 text-sm font-semibold text-foam transition hover:bg-[#25D366]/35">
              WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
