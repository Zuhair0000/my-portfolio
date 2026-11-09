import type { DataFigure } from "../data/projects";

type Props = {
  figures: DataFigure[];
  /** "compact" for the home hover preview, "large" for the case study. */
  size?: "compact" | "large";
  className?: string;
};

/** Typeset figures standing in for a screenshot on projects that have none. */
export function DataPanel({ figures, size = "large", className = "" }: Props) {
  const large = size === "large";
  return (
    <dl
      className={`grid grid-cols-2 border border-rule bg-paper-sunk ${
        large ? "gap-x-8 gap-y-8 p-6 sm:p-10" : "gap-x-6 gap-y-5 p-6"
      } ${className}`}
    >
      {figures.map((f) => (
        <div key={f.label} className="border-t border-rule-strong pt-3">
          <dt className="text-xs text-muted">{f.label}</dt>
          <dd
            className={`num mt-1 text-ink ${
              large ? "text-xl sm:text-2xl" : "text-lg"
            } leading-tight`}
          >
            {f.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
