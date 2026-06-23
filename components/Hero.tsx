"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

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
      id="hero"
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
      >
        <Hero3D />
      </div>
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
        <div className="hero-cta mt-8 flex items-center justify-center gap-5">
          <LiquidButton asChild size="lg">
            <a href="https://gsap.com/docs/">Démarrer →</a>
          </LiquidButton>
          <a
            href="#stack"
            className="text-sm font-semibold text-neutral-300 underline-offset-4 transition hover:text-white hover:underline"
          >
            Voir le stack
          </a>
        </div>
      </div>
    </section>
  );
}
