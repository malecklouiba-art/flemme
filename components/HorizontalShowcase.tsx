"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PANELS = [
  {
    n: "01",
    title: "GSAP",
    desc: "Timelines + ScrollTrigger. Cette section pinnée défile à l'horizontale — effet GSAP signature.",
    accent: "from-indigo-400 to-sky-400",
  },
  {
    n: "02",
    title: "Three.js / Spline",
    desc: "Scènes 3D / WebGL. Le hero tourne déjà un icosaèdre distordu via React Three Fiber.",
    accent: "from-fuchsia-400 to-pink-400",
  },
  {
    n: "03",
    title: "Animate UI · Forge · Vengeance",
    desc: "Composants animés copy-paste (shadcn-style, Framer Motion). À brancher selon besoin.",
    accent: "from-emerald-400 to-teal-400",
  },
  {
    n: "04",
    title: "Tailwind v4",
    desc: "Styling utilitaire, dark par défaut, tokens CSS. Base de tout le starter.",
    accent: "from-amber-400 to-orange-400",
  },
];

export default function HorizontalShowcase() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");
      if (panels.length < 2) return;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + window.innerWidth * (panels.length - 1),
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      id="stack"
      ref={container}
      className="relative flex h-screen flex-nowrap overflow-hidden"
    >
      {PANELS.map((p) => (
        <div
          key={p.n}
          className="panel flex h-full w-screen shrink-0 items-center justify-center px-8"
        >
          <div className="max-w-md">
            <span className="text-sm font-mono text-neutral-500">{p.n}</span>
            <h3
              className={`mt-3 bg-gradient-to-r ${p.accent} bg-clip-text text-4xl font-black text-transparent sm:text-6xl`}
            >
              {p.title}
            </h3>
            <p className="mt-5 text-neutral-400">{p.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
