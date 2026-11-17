import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject, projectNumber, projects, type Project } from "../data/projects";
import { profile, research } from "../data/profile";
import { usePageMeta } from "../lib/usePageMeta";
import { Figure } from "../components/Figure";
import { DataPanel } from "../components/DataPanel";
import { ResultsTable } from "../components/ResultsTable";
import { NotFound } from "./NotFound";

export function CaseStudy() {
  const { slug } = useParams();
  const found = getProject(slug);
  if (!found) return <NotFound />;
  // Keyed so per-page state (meta, scroll) resets cleanly between projects.
  return <CaseStudyBody key={found.project.slug} {...found} />;
}

type BodyProps = NonNullable<ReturnType<typeof getProject>>;

function CaseStudyBody({ project: p, index, prev, next }: BodyProps) {
  usePageMeta(`${p.title} · ${profile.name}`, `${p.summary} Case study by ${profile.name}, ${profile.role}.`);

  const [hero, ...rest] = p.screenshots;
  const paper = p.paper ? research.find((r) => r.id === p.paper) : undefined;

  return (
    <article className="mx-auto max-w-page px-5 sm:px-8">
      {/* ---------- Header ---------- */}
      <header className="pt-14 md:pt-20">
        <Link
          to={{ pathname: "/", hash: "#work" }}
          className="text-xs text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden="true">← </span>All work
        </Link>

        <p className="num mt-12 text-xs text-muted">
          <span className="sr-only">Project </span>
          {projectNumber(index)} / {projectNumber(projects.length - 1)}
        </p>
        <h1 className="mt-3 max-w-[48rem] text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.05] tracking-[-0.02em]">
          {p.title}
        </h1>
        <p className="mt-5 max-w-[38rem] text-lg leading-[1.45]">{p.summary}</p>

        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-5 border-t border-rule pt-5 text-sm">
          {p.role && (
            <MetaItem label="Role">
              <span>{p.role}</span>
            </MetaItem>
          )}
          <MetaItem label="Stack" className="min-w-[16rem] flex-1">
            <span className="text-ink">{p.stack.join(" · ")}</span>
          </MetaItem>
          <MetaItem label="Code">
            <a href={p.github} target="_blank" rel="noreferrer" className="link whitespace-nowrap">
              GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only"> repository (opens in a new tab)</span>
            </a>
          </MetaItem>
        </dl>
      </header>

      {/* ---------- Main visual ---------- */}
      <div className="mt-14 md:mt-20">
        {hero ? (
          <Figure shot={hero} label="Fig. 1" eager />
        ) : p.dataPanel ? (
          <figure>
            <DataPanel figures={p.dataPanel} />
            <figcaption className="mt-3 text-xs text-muted">
              The dataset at a glance.
            </figcaption>
          </figure>
        ) : null}
      </div>

      {/* ---------- Write-up ---------- */}
      <div className="mt-20 space-y-16 md:mt-28 md:space-y-20">
        {p.problem && (
          <Block title="The problem">
            <p className="text-base">{p.problem}</p>
          </Block>
        )}

        <Block title="What I built">
          <BulletList items={p.built} />
        </Block>

        {p.results && <Results results={p.results} title={p.title} />}

        {p.tradeoffs && (
          <Block title="Trade-offs">
            <BulletList items={p.tradeoffs} />
          </Block>
        )}

        {p.next && (
          <Block title="What I’d improve next">
            <BulletList items={p.next} />
          </Block>
        )}

        {paper && (
          <Block title="Research">
            <p className="text-base">
              {paper.status} paper:{" "}
              <Link to={{ pathname: "/", hash: `#${paper.id}` }} className="link">
                {paper.title}
              </Link>
              <span className="text-muted">
                {" "}
                ({paper.venue}
                {paper.year && <>, <span className="num">{paper.year}</span></>})
              </span>
            </p>
          </Block>
        )}

        {rest.length > 0 && (
          <Block title="More screens">
            <div className="space-y-14">
              {rest.map((shot, i) => (
                <Figure key={shot.src} shot={shot} label={`Fig. ${i + 2}`} />
              ))}
            </div>
          </Block>
        )}
      </div>

      {/* ---------- Prev / next ---------- */}
      <nav aria-label="More projects" className="mt-28 border-t border-rule-strong pt-6">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>{prev && <Adjacent project={prev} direction="prev" />}</div>
          <div className="sm:text-right">{next && <Adjacent project={next} direction="next" />}</div>
        </div>
        <p className="mt-12">
          <Link to={{ pathname: "/", hash: "#work" }} className="link text-sm">
            Back to all work
          </Link>
        </p>
      </nav>
    </article>
  );
}

/* ------------------------------------------------------------------ */

function MetaItem({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-w-0 ${className}`}>
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

/** Asymmetric write-up block: small heading in the left column, prose on the right. */
function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-12">
      <h2 className="font-serif text-lg md:pt-0.5">{title}</h2>
      <div className="min-w-0 max-w-[42rem]">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (items.length === 1) return <p className="text-base">{items[0]}</p>;
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-6 text-base before:absolute before:left-0 before:text-muted before:content-['–']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Results({ results, title }: { results: NonNullable<Project["results"]>; title: string }) {
  return (
    <Block title="Results">
      {results.context && <p className="mb-6 text-sm text-muted">{results.context}</p>}
      {results.table && <ResultsTable table={results.table} caption={`${title}: results`} />}
      {results.notes && (
        <div className={results.table ? "mt-6" : ""}>
          <BulletList items={results.notes} />
        </div>
      )}
    </Block>
  );
}

function Adjacent({ project, direction }: { project: Project; direction: "prev" | "next" }) {
  const i = projects.indexOf(project);
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <span className="text-xs text-muted">
        {direction === "prev" ? "← Previous" : "Next →"}
      </span>
      <span className="mt-2 block font-serif text-lg text-ink transition-colors group-hover:text-accent">
        <span className="num mr-3 text-xs text-muted">{projectNumber(i)}</span>
        {project.title}
      </span>
    </Link>
  );
}
