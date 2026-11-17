import { Fragment } from "react";
import { authorNames, research, type Paper } from "../data/profile";
import { Section } from "../components/SectionHeading";

function Authors({ authors }: { authors: string[] }) {
  return (
    <p className="mt-3 text-sm">
      {authors.map((name, i) => (
        <Fragment key={name}>
          {i > 0 && ", "}
          {authorNames.includes(name) ? <strong className="font-semibold">{name}</strong> : name}
        </Fragment>
      ))}
    </p>
  );
}

function Title({ paper }: { paper: Paper }) {
  if (!paper.url) return <>{paper.title}</>;
  return (
    <a href={paper.url} className="link" target="_blank" rel="noopener noreferrer">
      {paper.title}
      <span className="sr-only"> (IEEE Xplore, opens in a new tab)</span>
    </a>
  );
}

export function Research() {
  return (
    <Section n="03" label="Research" id="research">
      <ol className="max-w-prose space-y-10">
        {research.map((paper, i) => (
          <li key={paper.title} id={paper.id} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3">
            <span className="pt-[0.3rem] text-xs tabular-nums text-muted">[{i + 1}]</span>
            <div>
              <p className="text-xs text-muted">{paper.status}</p>
              <h3 className="mt-1 font-serif text-lg">
                <Title paper={paper} />
              </h3>
              {paper.authors && <Authors authors={paper.authors} />}
              <p className="mt-1.5 text-sm text-muted">
                {paper.venue}
                {paper.year && (
                  <>
                    {", "}
                    <span className="num">{paper.year}</span>
                  </>
                )}
              </p>
              <p className="text-sm text-muted">{paper.role}</p>
              {paper.summary && <p className="mt-4 text-sm">{paper.summary}</p>}
              {paper.doi && (
                <p className="mt-3 text-xs text-muted">
                  DOI{" "}
                  <a
                    href={`https://doi.org/${paper.doi}`}
                    className="link num break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {paper.doi}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
