import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "flemme — animated starter",
  description:
    "Next.js + Tailwind + GSAP starter, wired for the design-gallery stack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
