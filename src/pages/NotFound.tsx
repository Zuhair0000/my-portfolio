import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export function NotFound() {
  usePageMeta("Page not found · Zuhair Ahmed", "This page doesn't exist.");

  return (
    <div className="mx-auto max-w-page px-5 pt-24 sm:px-8">
      <p className="num text-xs text-muted">404</p>
      <h1 className="mt-3 text-2xl">This page doesn’t exist.</h1>
      <p className="mt-6">
        <Link to="/" className="link">
          Back to the home page
        </Link>
      </p>
    </div>
  );
}
