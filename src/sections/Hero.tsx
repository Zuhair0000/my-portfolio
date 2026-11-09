import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { stagger } from "../lib/stagger";

/** ["a", "b", "c"] → "a, b and c" */
const joinAnd = (items: readonly string[]) =>
  items.length < 2
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid gap-12 pt-20 pb-4 md:pt-32 lg:grid-cols-[1fr_17rem] lg:gap-16"
    >
      <div>
        <h1 id="hero-title" className="rise-in" style={stagger(0)}>
          <span className="block text-[clamp(2.75rem,8vw,4rem)] leading-[1.02] tracking-[-0.02em]">
            {profile.name}
          </span>
          <span className="mt-2 block text-[clamp(1.75rem,4.6vw,2.75rem)] leading-[1.1] text-accent">
            {profile.role}
          </span>
        </h1>

        <p
          className="rise-in mt-8 max-w-[34rem] text-lg leading-[1.45] text-ink"
          style={stagger(1)}
        >
          {profile.positioning}
        </p>

        <p
          className="rise-in mt-6 flex max-w-[36rem] gap-3 text-sm text-muted"
          style={stagger(2)}
        >
          <span
            aria-hidden="true"
            className="mt-[0.55em] size-2 shrink-0 rounded-full bg-accent"
          />
          <span>
            Available from{" "}
            <span className="text-ink">{profile.availableFrom}</span> for
            full-time AI/ML roles. Based in {profile.location}, open to
            relocating to {joinAnd(profile.relocation)}.
          </span>
        </p>

        <div
          className="rise-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          style={stagger(3)}
        >
          <Link
            to={{ hash: "#work" }}
            className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            View work
            <span aria-hidden="true">↓</span>
          </Link>
          <a href={profile.resumeUrl} download className="link text-sm">
            Download resume <span className="text-xs text-muted">(PDF)</span>
          </a>
        </div>
      </div>

      {/* Margin note: what I'm doing right now. */}
      <aside
        aria-label="Currently"
        className="rise-in self-end border-l border-rule-strong pl-5 text-xs text-muted lg:mb-2"
        style={stagger(4)}
      >
        <p className="font-serif text-sm italic text-ink">Currently</p>
        <p className="mt-2 leading-relaxed">
          Industrial training on a client AI onboarding platform: a bilingual
          Arabic/English RAG assistant and a passport OCR service, through{" "}
          <span className="num">Jan 2027</span>.
        </p>
      </aside>
    </section>
  );
}
