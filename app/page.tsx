import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HorizontalShowcase from "@/components/HorizontalShowcase";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <HorizontalShowcase />

        <section className="mx-auto max-w-3xl px-6 py-32">
          <ScrollReveal>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Scroll-driven, par défaut
            </h2>
            <p className="mt-4 text-neutral-400">
              Hero animé (GSAP timeline), 3D React Three Fiber, et une section
              pinnée à défilement horizontal — tout est déjà câblé. Remplace les
              blocs par tes sections et branche le reste du stack design-gallery
              (Spline, Anime.js, Animate UI, Forge UI, Vengeance UI, UIverse).
            </p>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
