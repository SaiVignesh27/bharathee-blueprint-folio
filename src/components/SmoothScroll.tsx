import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";

const NAV_OFFSET = 72;

export const LenisContext = createContext<Lenis | null>(null);

export function useLenisOptional() {
  return useContext(LenisContext);
}

type SmoothScrollProps = {
  children: ReactNode;
};

/**
 * Lenis smooth scrolling + in-page anchor handling (respects fixed navbar offset).
 * Disabled when the user prefers reduced motion.
 */
const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const reduced = globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.style.scrollBehavior = "smooth";
      return;
    }

    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(instance);

    let rafId = 0;
    let alive = true;
    const raf = (time: number) => {
      if (!alive) return;
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest("a[href]");
      if (!el) return;
      const href = el.getAttribute("href");
      if (!href?.startsWith("#")) return;

      if (href === "#") {
        e.preventDefault();
        instance.scrollTo(0, { duration: 1.1 });
        return;
      }

      const target = document.querySelector(href);
      if (target instanceof HTMLElement) {
        e.preventDefault();
        instance.scrollTo(target, { offset: -NAV_OFFSET, duration: 1.15 });
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
};

export default SmoothScroll;
