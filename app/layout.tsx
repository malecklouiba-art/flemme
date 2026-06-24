import type { Metadata, Viewport } from "next";
import "./globals.css";
import NativeInit from "@/components/NativeInit";

export const metadata: Metadata = {
  title: "flemme — animated starter",
  description:
    "Next.js + Tailwind + GSAP starter, wired for the design-gallery stack.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  viewportFit: "cover", // expose safe-area insets on notched devices
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body>
        <NativeInit />
        {children}
      </body>
    </html>
  );
}
