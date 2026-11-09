import { experience } from "../data/profile";
import { Section } from "../components/SectionHeading";

export function Experience() {
  return (
    <Section n="02" label="Experience" id="experience">
      {experience.map((role) => (
        <article key={role.title} className="max-w-prose">
          <header>
            <p className="num text-xs text-muted">{role.period}</p>
            <h3 className="mt-2 font-serif text-xl">{role.title}</h3>
            <p className="mt-2 text-sm text-ink">{role.org}</p>
            <p className="text-sm text-muted">{role.context}</p>
          </header>

          <ul className="mt-8 space-y-4">
            {role.bullets.map((b) => (
              <li
                key={b}
                className="relative pl-6 text-sm before:absolute before:left-0 before:text-muted before:content-['–']"
              >
                {b}
              </li>
            ))}
          </ul>

          {role.inProgress && (
            <p className="mt-8 border-l-2 border-accent pl-4 text-sm text-muted">
              {role.inProgress}
            </p>
          )}

          <p className="mt-6 text-xs text-muted">
            Client project: code and screenshots are not public.
          </p>
        </article>
      ))}
    </Section>
  );
}
