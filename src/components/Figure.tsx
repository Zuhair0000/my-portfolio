import type { Screenshot } from "../data/projects";

type Props = {
  shot: Screenshot;
  /** Label like "Fig. 1" shown in mono before the caption. */
  label?: string;
  /** Above-the-fold images load eagerly; everything else lazy. */
  eager?: boolean;
  className?: string;
};

export function Figure({ shot, label, eager = false, className = "" }: Props) {
  return (
    <figure className={className}>
      <div className="border border-rule bg-paper-sunk">
        <img
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          // Lowercase attribute: React 18 doesn't know the camelCase prop.
          {...(eager ? { fetchpriority: "high" } : {})}
          // Tall screenshots are capped and centred on the mount.
          className="mx-auto block h-auto max-h-[85vh] w-auto max-w-full"
        />
      </div>
      <figcaption className="mt-3 flex gap-3 text-xs text-muted">
        {label && <span className="num shrink-0">{label}</span>}
        <span>{shot.caption}</span>
      </figcaption>
    </figure>
  );
}
