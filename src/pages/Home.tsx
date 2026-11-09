import { profile } from "../data/profile";
import { usePageMeta } from "../lib/usePageMeta";
import { Hero } from "../sections/Hero";
import { Work } from "../sections/Work";
import { Experience } from "../sections/Experience";
import { Research } from "../sections/Research";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";

export function Home() {
  usePageMeta(
    `${profile.name} · ${profile.role}`,
    `${profile.name}, ${profile.role}. ${profile.positioning} Available from ${profile.availableFrom}.`,
  );

  return (
    <div className="mx-auto max-w-page px-5 sm:px-8">
      <Hero />
      {/* Varied rhythm: biggest gap after the hero, tighter between reference sections. */}
      <div className="mt-28 md:mt-40">
        <Work />
      </div>
      <div className="mt-28 md:mt-section-lg">
        <Experience />
      </div>
      <div className="mt-24 md:mt-section">
        <Research />
      </div>
      <div className="mt-24 md:mt-section-lg">
        <About />
      </div>
      <div className="mt-28 md:mt-section-lg">
        <Contact />
      </div>
    </div>
  );
}
