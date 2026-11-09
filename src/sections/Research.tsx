import { research } from "../data/profile";
import { Section } from "../components/SectionHeading";

export function Research() {
  return (
    <Section n="03" label="Research" id="research">
      <ol className="max-w-prose space-y-10">
        {research.map((paper, i) => (
          <li key={i} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3">
            <span className="num pt-[0.3rem] text-xs text-muted">[{i + 1}]</span>
            <div>
              <h3 className="font-serif text-lg">
                {paper.title ? (
                  paper.url ? (
                    <a href={paper.url} className="link" target="_blank" rel="noreferrer">
                      {paper.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    paper.title
                  )
                ) : (
                  // TODO(Zuhair): replaced automatically once `title` is set in src/data/profile.ts.
                  <span className="italic text-muted">Title forthcoming</span>
                )}
              </h3>
              <p className="mt-1.5 text-sm">
                {paper.venue}
                <span className="text-muted"> · {paper.role}</span>
              </p>
              <p className="text-sm text-muted">{paper.status}</p>
              {paper.summary && <p className="mt-4 text-sm">{paper.summary}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
