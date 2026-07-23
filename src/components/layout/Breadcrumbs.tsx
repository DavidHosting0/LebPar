import { Link } from "@/i18n/navigation";

export type Crumb = { name: string; href?: string };

type Props = {
  items: Crumb[];
};

export function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-stone">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-sea transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className={isLast ? "text-ink font-medium" : ""}>{item.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
