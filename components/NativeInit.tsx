"use client";

import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";

/**
 * Native-only setup: status bar style + hide the splash screen once the
 * web view is ready. No-op on the web (guarded by isNativePlatform).
 */
export default function NativeInit() {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) return;
    (async () => {
      try {
        const { StatusBar, Style } = await import("@capacitor/status-bar");
        await StatusBar.setStyle({ style: Style.Dark }); // light text on dark bg
        if (Capacitor.getPlatform() === "android") {
          await StatusBar.setBackgroundColor({ color: "#0a0a0f" });
        }
      } catch {
        /* status bar plugin unavailable */
      }
      try {
        const { SplashScreen } = await import("@capacitor/splash-screen");
        await SplashScreen.hide();
      } catch {
        /* splash plugin unavailable */
      }
    })();
  }, []);

  return null;
}
