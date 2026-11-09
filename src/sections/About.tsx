import { profile, skills } from "../data/profile";
import { Section } from "../components/SectionHeading";

export function About() {
  return (
    <Section n="04" label="About" id="about">
      <div className="max-w-prose space-y-5 text-base">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <dl className="mt-14 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        <div>
          <dt className="font-serif text-sm italic text-muted">Education</dt>
          <dd className="mt-2 text-sm">
            {profile.education.degree}
            <br />
            <span className="text-muted">{profile.education.school}</span>
            <br />
            <span className="num text-xs text-muted">
              {profile.education.details.join(" · ")}
            </span>
          </dd>
        </div>
        <div>
          <dt className="font-serif text-sm italic text-muted">Languages</dt>
          <dd className="mt-2 text-sm">{profile.languages.join(", ")}</dd>
        </div>
      </dl>

      <h3 className="mt-14 font-serif text-lg">Skills</h3>
      <dl className="mt-4 border-t border-rule">
        {skills.map((g) => (
          <div
            key={g.group}
            className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="text-sm font-medium">{g.group}</dt>
            <dd className="text-sm text-muted">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
