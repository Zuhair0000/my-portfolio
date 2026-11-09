import { useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { profile, sections } from "../data/profile";

export function Layout() {
  useScrollManager();

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <header className="mx-auto flex max-w-page flex-wrap items-baseline justify-between gap-x-8 gap-y-3 px-5 pt-6 sm:px-8 md:pt-8">
        <Link
          to="/"
          className="font-serif text-base font-medium tracking-tight text-ink"
        >
          {profile.name}
        </Link>
        <nav aria-label="Sections">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
            {sections.map((s) => (
              <li key={s.id}>
                <Link
                  to={{ pathname: "/", hash: `#${s.id}` }}
                  className="transition-colors hover:text-ink"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>

      <footer className="mx-auto mt-24 max-w-page px-5 pb-10 sm:px-8">
        <div className="flex flex-col gap-2 border-t border-rule pt-5 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © <span className="num">{new Date().getFullYear()}</span>{" "}
            {profile.name}
          </p>
          <p>Set in Source Serif 4, IBM Plex Sans and IBM Plex Mono.</p>
        </div>
      </footer>
    </div>
  );
}

/** Scroll to #hash targets after navigation; otherwise reset to top. */
function useScrollManager() {
  // `key` changes on every navigation, so re-clicking the same #hash still scrolls.
  const { pathname, hash, key } = useLocation();
  const prevPathname = useRef<string | null>(null); // null on first load → instant jump

  useEffect(() => {
    // Smooth only for in-page jumps (e.g. nav click on the home page).
    // Arriving from another page jumps straight there, and reduced-motion
    // users always get an instant jump.
    const samePage = prevPathname.current === pathname;
    prevPathname.current = pathname;

    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        el.scrollIntoView({
          behavior: samePage && !reduceMotion ? "smooth" : "auto",
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, key]);
}
