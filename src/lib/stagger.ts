import type { CSSProperties } from "react";

/** Inline style for the `.rise-in` load animation: step i of the stagger. */
export const stagger = (i: number) => ({ "--i": i }) as CSSProperties;
