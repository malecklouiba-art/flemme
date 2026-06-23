import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section className="mx-auto max-w-3xl px-6 py-32">
        <ScrollReveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Scroll-driven, par défaut
          </h2>
          <p className="mt-4 text-neutral-400">
            Ce bloc apparaît au scroll via GSAP ScrollTrigger. Remplace-le par
            tes sections. Le stack design-gallery (Three.js, Spline, Anime.js,
            Animate UI, Forge UI, Vengeance UI, UIverse) se branche ici.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[
            ["GSAP", "Timelines + ScrollTrigger (déjà câblé)"],
            ["Three.js / Spline", "Scènes 3D / WebGL pour accents premium"],
            ["Animate UI / Forge UI", "Composants animés (shadcn-style)"],
            ["Tailwind v4", "Styling utilitaire, dark par défaut"],
          ].map(([title, desc]) => (
            <ScrollReveal key={title}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
