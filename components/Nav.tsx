"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const LINKS = [
  ["Stack", "#stack"],
  ["3D", "#hero"],
  ["Docs GSAP", "https://gsap.com/docs/"],
];

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]";

export default function Nav() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(root.current, {
          y: -24,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.2,
        });
      });
    },
    { scope: root },
  );

  return (
    <header
      ref={root}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md pt-[env(safe-area-inset-top)]"
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        <a
          href="#hero"
          className={`rounded text-sm font-black tracking-widest ${focus}`}
        >
          FLEMME
        </a>
        <ul className="flex items-center gap-6 text-sm text-neutral-300">
          {LINKS.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className={`rounded transition hover:text-white ${focus}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
