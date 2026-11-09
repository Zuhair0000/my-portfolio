import type { ReactNode } from "react";

type HeadingProps = { n: string; label: string; id: string };

/** Numbered section label, e.g. "01 Work", on a thin rule. */
export function SectionHeading({ n, label, id }: HeadingProps) {
  return (
    <h2
      id={id}
      className="flex items-baseline gap-3 border-t border-rule-strong pt-4 font-serif text-lg text-ink"
    >
      <span className="num text-xs text-muted">{n}</span>
      {label}
    </h2>
  );
}

type SectionProps = HeadingProps & { children: ReactNode; className?: string };

/**
 * Asymmetric section: narrow sticky label column on the left, content on
 * the right. Collapses to a single column below md.
 */
export function Section({ n, label, id, children, className = "" }: SectionProps) {
  return (
    <section
      aria-labelledby={id}
      className={`grid gap-8 md:grid-cols-[11rem_1fr] md:gap-12 ${className}`}
    >
      <div>
        <div className="md:sticky md:top-8">
          <SectionHeading n={n} label={label} id={id} />
        </div>
      </div>
      <div className="min-w-0 md:border-t md:border-rule md:pt-4">{children}</div>
    </section>
  );
}
