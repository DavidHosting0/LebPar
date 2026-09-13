import { Link } from "@/i18n/navigation";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ title, children, className = "" }: Props) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 md:px-6 ${className}`}>
      <h2 className="font-display text-3xl font-bold text-sea-deep md:text-4xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="border-y border-sea-deep/10 bg-sea-deep text-foam">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center md:px-6">
        <div>
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Ready for a Lebanon paragliding tour?
          </h2>
          <p className="mt-2 max-w-xl text-foam/80">
            Tell us whether you want 7, 14, or 21 days — we confirm weather windows, sites, and
            lodging options by WhatsApp.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tours"
            className="rounded-full bg-sunset px-6 py-3 text-sm font-semibold transition hover:brightness-110"
          >
            View tours
          </Link>
          <Link
            href="/booking"
            className="rounded-full border border-foam/30 px-6 py-3 text-sm font-semibold transition hover:bg-foam/10"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl space-y-4 text-base leading-relaxed text-ink/90">{children}</div>;
}
