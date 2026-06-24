"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { LiquidButton } from "@/components/animate-ui/components/buttons/liquid";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

gsap.registerPlugin(useGSAP, SplitText);

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = new SplitText(".hero-title-1", { type: "chars" });
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.9 },
        });
        tl.from(split.chars, {
          yPercent: 120,
          opacity: 0,
          stagger: 0.04,
          duration: 0.7,
        })
          .from(".hero-line", { yPercent: 120, opacity: 0 }, "-=0.45")
          .from(".hero-sub", { y: 24, opacity: 0 }, "-=0.4")
          .from(".hero-cta", { y: 16, opacity: 0, scale: 0.96 }, "-=0.5");

        // Ambient drifting glow
        const glow = gsap.to(".hero-glow", {
          scale: 1.25,
          opacity: 0.6,
          xPercent: 8,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        return () => {
          split.revert();
          glow.kill();
        };
      });
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
        className="hero-glow pointer-events-none absolute left-1/2 top-1/3 -z-[5] h-[55vh] w-[55vh] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent)]"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
          <span className="block overflow-hidden">
            <span className="hero-title-1 inline-block">flemme</span>
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
          <LiquidButton
            asChild
            size="lg"
            className="h-12 rounded-full px-8 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 [--liquid-button-background-color:#4f46e5] [--liquid-button-color:#ec4899]"
          >
            <a href="https://gsap.com/docs/">Démarrer →</a>
          </LiquidButton>
          <a
            href="#stack"
            className="rounded text-sm font-semibold text-neutral-300 underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
          >
            Voir le stack
          </a>
        </div>
      </div>
    </section>
  );
}
