import { useState } from "react";
import { Link } from "react-router-dom";
import { projectNumber, projects } from "../data/projects";
import { SectionHeading } from "../components/SectionHeading";
import { DataPanel } from "../components/DataPanel";

export function Work() {
  // Index of the row being hovered/focused; drives the preview pane.
  const [active, setActive] = useState(0);
  const current = projects[active]!;

  return (
    <section aria-labelledby="work">
      <div className="md:max-w-[11rem]">
        <SectionHeading n="01" label="Work" id="work" />
      </div>

      <div className="mt-8 grid gap-14 lg:grid-cols-[minmax(0,1fr)_30rem]">
        <ol className="border-b border-rule">
          {projects.map((p, i) => (
            <li key={p.slug} className="border-t border-rule">
              <Link
                to={`/work/${p.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_1.5rem] sm:py-7"
              >
                <span className="num pt-[0.3rem] text-xs text-muted">
                  {projectNumber(i)}
                </span>

                <div>
                  <h3 className="font-serif text-lg text-ink transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 max-w-[34rem] text-sm text-muted">
                    {p.summary}
                  </p>
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs">
                    <span className="num text-accent">{p.keyFigure}</span>
                    <span className="text-muted">
                      <span className="sr-only">Stack: </span>
                      {p.mainStack.join(" · ")}
                    </span>
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden pt-1 text-right text-muted opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* Hover preview: desktop with a fine pointer only. Decorative -
            the row link carries all the information. */}
        <div aria-hidden="true" className="hidden lg:can-hover:block">
          <div className="sticky top-8">
            <div className="relative aspect-[16/11] overflow-hidden border border-rule bg-paper-sunk">
              {projects.map((p, i) => {
                const shot = p.screenshots[0];
                return (
                  <div
                    key={p.slug}
                    className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {shot ? (
                      <img
                        src={shot.src}
                        alt=""
                        width={shot.width}
                        height={shot.height}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain p-2"
                      />
                    ) : p.dataPanel ? (
                      <DataPanel
                        figures={p.dataPanel}
                        size="compact"
                        className="h-full content-center border-0"
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
            <p className="mt-3 flex gap-3 text-xs text-muted">
              <span className="num shrink-0">Fig. {projectNumber(active)}</span>
              <span>
                {current.screenshots[0]?.caption ?? "Dataset at a glance."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
