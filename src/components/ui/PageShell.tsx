import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { CtaBand } from "@/components/ui/Section";

type Props = {
  crumbs: Crumb[];
  h1: string;
  intro?: string;
  children: React.ReactNode;
  showCta?: boolean;
};

export function PageShell({ crumbs, h1, intro, children, showCta = true }: Props) {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-10 md:px-6">
        <Breadcrumbs items={crumbs} />
        <h1 className="font-display text-4xl font-bold text-sea-deep md:text-5xl">{h1}</h1>
        {intro && <p className="mt-4 max-w-3xl text-lg text-ink/85">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
      {showCta && <CtaBand />}
    </>
  );
}
