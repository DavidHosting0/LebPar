import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-sea-deep">Page not found</h1>
      <p className="mt-4 text-ink/80">That route does not exist on LebPar.com.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-sea-deep px-6 py-3 text-sm font-semibold text-foam"
      >
        Back home
      </Link>
    </div>
  );
}
