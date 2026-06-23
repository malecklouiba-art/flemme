"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });
      tl.from(".hero-line", { yPercent: 120, opacity: 0, stagger: 0.12 })
        .from(".hero-sub", { y: 24, opacity: 0 }, "-=0.4")
        .from(".hero-cta", { y: 16, opacity: 0, scale: 0.96 }, "-=0.5");
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent)]"
      />
      <div className="relative text-center">
        <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
          <span className="block overflow-hidden">
            <span className="hero-line inline-block">flemme</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line inline-block bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              en mouvement
            </span>
          </span>
        </h1>
        <p className="hero-sub mx-auto mt-6 max-w-xl text-neutral-400">
          Starter Next.js + Tailwind + GSAP. Prêt pour le stack design-gallery.
        </p>
        <a
          href="https://gsap.com/docs/"
          className="hero-cta mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
        >
          GSAP docs →
        </a>
      </div>
    </section>
  );
}
