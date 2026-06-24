"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

const COLS = 12;
const ROWS = 7;
const COUNT = COLS * ROWS;

export default function AnimeGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const el = ref.current;
    if (!el) return;
    const squares = el.querySelectorAll<HTMLElement>(".sq");

    const anim = animate(squares, {
      scale: [0.2, 1],
      opacity: [0.15, 1],
      duration: 1400,
      ease: "inOutQuad",
      loop: true,
      alternate: true,
      delay: stagger(70, { grid: [COLS, ROWS], from: "center" }),
    });

    return () => {
      anim.pause();
    };
  }, []);

  return (
    <section id="anime" className="px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-sm font-mono text-neutral-500">Anime.js</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Animation légère, staggered
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-400">
          Grille animée en boucle via Anime.js (stagger en grille depuis le
          centre). Idéal quand GSAP est surdimensionné.
        </p>

        <div
          ref={ref}
          className="mx-auto mt-14 grid w-fit gap-2.5"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
          aria-hidden
        >
          {Array.from({ length: COUNT }).map((_, i) => (
            <div
              key={i}
              className="sq size-4 rounded-[4px] bg-gradient-to-br from-indigo-400 to-fuchsia-400"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
