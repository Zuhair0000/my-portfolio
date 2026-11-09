import { links, profile } from "../data/profile";
import { Section } from "../components/SectionHeading";

const external = [
  { label: "LinkedIn", href: links.linkedin, detail: "in/zuhairhassan52" },
  { label: "GitHub", href: links.github, detail: "Zuhair0000" },
  { label: "ORCID", href: links.orcid, detail: "0009-0004-7595-6848" },
];

export function Contact() {
  return (
    <Section n="05" label="Contact" id="contact">
      <p className="max-w-prose text-sm text-muted">{profile.availability}</p>

      <a
        href={`mailto:${links.email}`}
        className="mt-6 inline-block break-all font-serif text-[clamp(1.5rem,5vw,2.75rem)] leading-tight text-ink underline decoration-rule-strong decoration-1 underline-offset-[0.18em] transition-colors hover:text-accent hover:decoration-accent"
      >
        {links.email}
      </a>

      <ul className="mt-12 max-w-prose border-t border-rule">
        {external.map((l) => (
          <li key={l.label} className="border-b border-rule">
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-baseline justify-between gap-6 py-4 text-sm"
            >
              <span className="text-ink transition-colors group-hover:text-accent">
                {l.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
              <span className="num truncate text-xs text-muted">
                {l.detail} <span aria-hidden="true">↗</span>
              </span>
            </a>
          </li>
        ))}
        <li className="border-b border-rule">
          <a
            href={profile.resumeUrl}
            download
            className="group flex items-baseline justify-between gap-6 py-4 text-sm"
          >
            <span className="text-ink transition-colors group-hover:text-accent">
              Resume
            </span>
            <span className="num text-xs text-muted">
              PDF <span aria-hidden="true">↓</span>
            </span>
          </a>
        </li>
      </ul>
    </Section>
  );
}
