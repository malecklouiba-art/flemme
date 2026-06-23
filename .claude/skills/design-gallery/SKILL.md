---
name: design-gallery
description: "Curated animation, 3D, and component libraries for building modern, animated, high-end web UIs. Use when building or styling a frontend, landing page, hero section, portfolio, or any site that needs motion, 3D, scroll effects, micro-interactions, or premium copy-paste components. Covers GSAP, Three.js, Anime.js, Spline, Animate UI, UIverse, Forge UI, and Vengeance UI, plus motionsites.ai for inspiration."
---

# Design Gallery — animation, 3D & component stack

A curated toolkit for building **animated, modern, premium** web interfaces. Reach
for these when a task involves motion, 3D, scroll-driven storytelling, hero
sections, landing pages, or polished micro-interactions. Pairs with the
`ui-ux-pro-max` and `frontend-design` skills (which cover layout, color,
typography, and UX reasoning).

## Quick decision guide

| Need | Use |
|------|-----|
| Complex timelines, scroll animations, the gold standard | **GSAP** (best overall) |
| Lightweight property/SVG animation, tiny footprint | **Anime.js** |
| Real 3D / WebGL scenes, shaders, particles | **Three.js** |
| No-code 3D scenes designed visually, then embedded | **Spline** |
| Drop-in animated React components (shadcn-style) | **Animate UI**, **Forge UI**, **Vengeance UI** |
| Copy-paste CSS/HTML snippets (buttons, loaders, cards) | **UIverse** |
| Inspiration / references for motion-heavy sites | **motionsites.ai** |

Default stack for a premium animated React landing page:
**GSAP (+ ScrollTrigger)** for motion, **Three.js / Spline** for 3D accents,
**Animate UI / Forge UI** for components, **Tailwind** for styling.

---

## Animation

### GSAP — GreenSock (BEST ⭐⭐⭐⭐)
Industry-standard animation engine. Best-in-class for timelines, scroll-driven
animation (ScrollTrigger), SVG morphing, and complex sequencing. Now **fully free**
including all former premium plugins (ScrollTrigger, SplitText, MorphSVG…).

```bash
npm install gsap          # React helper: npm install @gsap/react
# CDN: https://cdnjs.cloudflare.com/ajax/libs/gsap/3/gsap.min.js
```
```jsx
// React
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);
```
Use for: hero reveals, scroll storytelling, staggered entrances, pinned sections.
Docs: https://gsap.com/docs/

### Anime.js
Lightweight, elegant animation library (v4 is ESM, tree-shakeable). Great for SVG,
simple property tweens, and staggered effects when GSAP is overkill.

```bash
npm install animejs       # CDN: https://cdn.jsdelivr.net/npm/animejs/lib/anime.esm.min.js
```
```js
import { animate, stagger } from "animejs";
animate(".box", { translateY: [0, 40], delay: stagger(100) });
```
Docs: https://animejs.com/

---

## 3D / WebGL

### Three.js
The de-facto WebGL/3D library. Use for custom 3D scenes, shaders, particles,
interactive product views. In React, pair with **@react-three/fiber** + **drei**.

```bash
npm install three
npm install @react-three/fiber @react-three/drei   # React renderer + helpers
```
Use for: 3D hero scenes, product configurators, particle backgrounds, shaders.
Docs: https://threejs.org/docs/

### Spline
Design 3D scenes **visually in the browser**, then embed them — no shader code
needed. Ideal for interactive 3D accents shipped fast.

```bash
npm install @splinetool/react-spline @splinetool/runtime
```
```jsx
import Spline from "@splinetool/react-spline";
<Spline scene="https://prod.spline.design/XXXX/scene.splinecode" />
```
Editor + embeds: https://spline.design/

---

## Component libraries (copy-paste / registry)

These ship component **source** into your project (you own and edit the code).
Most use **Tailwind CSS + Framer Motion**, so set those up first.

### Animate UI (⭐⭐)
Fully animated, open-source component distribution (React + TS + Tailwind + Motion),
installed through the **shadcn CLI** registry.
```bash
npx shadcn@latest add @animate-ui/components-<name>
```
Browse: https://animate-ui.com/ · Repo: https://github.com/imskyleen/animate-ui

### Forge UI (⭐⭐)
Open-source React component library — copy-paste components built with Tailwind +
Framer Motion. Browse and copy the pieces you need (not a single npm dependency).
Browse: https://forgeui.in/
> Note: "Forge UI" is also the name of Atlassian's `@forge/ui` and 3Squared's
> Vue `@3squared/forge-ui-3`. The animated design library above is **forgeui.in**.

### Vengeance UI (⭐⭐)
Animated React/Next.js components (displacement hovers, animated tooltips,
scroll-driven cards) using Framer Motion. CLI copies editable TS source into your
project (shadcn-style), no runtime npm dependency.
Browse: https://www.vengenceui.com/ · Repo: https://github.com/Ashutoshx7/VengenceUI

### UIverse
Largest open-source community of **copy-paste UI elements** (buttons, loaders,
cards, toggles) in plain CSS/HTML and Tailwind. No install — copy the snippet.
Browse: https://uiverse.io/

---

## Inspiration

### motionsites.ai
Curated gallery of motion-rich / animated websites. Use to find references and
patterns before building a motion-heavy page. https://motionsites.ai

---

## Setup notes
- Most component libraries assume **Tailwind CSS** + **Framer Motion** (`motion`).
  Initialize the project with them before adding components.
- Respect motion accessibility: honor `prefers-reduced-motion` and keep animations
  purposeful. The `ui-ux-pro-max` skill has UX guidance for this.
- For React 3D, prefer `@react-three/fiber` over raw Three.js for composability.
