# flemme

Animated **Next.js** app — App Router + TypeScript + Tailwind v4 + GSAP — wired for the
`design-gallery` stack (Three.js, Spline, Anime.js, Animate UI, Forge UI, Vengeance UI,
UIverse), and packaged as native **iOS + Android** apps via **Capacitor**.

## Run (web)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

## Mobile (iOS + Android via Capacitor)

The web app is wrapped with **Capacitor**: Next.js static export (`output: "export"` →
`out/`) is bundled into native shells in `android/` and `ios/`.

```bash
npm run mobile         # next build (export) + cap sync into native projects
npm run open:android   # open in Android Studio  (needs Android SDK)
npm run open:ios       # open in Xcode           (needs macOS + Xcode)
```

- App id `com.flemme.app`, name `flemme` (see `capacitor.config.ts`).
- Re-run `npm run mobile` after any web change to re-sync assets.
- Building the actual **APK/IPA** requires Android Studio / Xcode on a dev machine —
  it cannot be done in a headless Linux environment.

## Stack
- **Next.js 15** App Router, React 19, TypeScript.
- **Tailwind CSS v4** (`@import "tailwindcss";` + `@tailwindcss/postcss`).
- **GSAP 3** + `@gsap/react` (`useGSAP`) — Hero timeline + `ScrollTrigger` reveals.

## Structure
```
app/
  layout.tsx        root layout + globals
  page.tsx          hero + scroll-reveal sections
  globals.css       Tailwind + dark theme tokens
components/
  Hero.tsx          GSAP timeline intro (client)
  ScrollReveal.tsx  ScrollTrigger reveal wrapper (client)
```

## Add the design-gallery libraries
```bash
npm i three @react-three/fiber @react-three/drei   # 3D / WebGL
npm i @splinetool/react-spline @splinetool/runtime # Spline scenes
npm i animejs                                       # lightweight animation
npx shadcn@latest add @animate-ui/components-buttons-liquid # Animate UI registry
```

**shadcn/ui is pre-initialised** (`components.json`, `lib/utils.ts`, theme tokens in
`app/globals.css`, `@animate-ui` registry namespace). An **Animate UI liquid button**
is already vendored under `components/animate-ui/` and wired into the hero CTA — add
more components with the command above once the registry is reachable.

See `.claude/skills/design-gallery/SKILL.md` for when-to-use guidance, and the
`ui-ux-pro-max` / `frontend-design` plugins for design intelligence.

## Claude Code tooling
This repo ships a curated Claude Code toolset (plugins + skills). See `CLAUDE.md`.
