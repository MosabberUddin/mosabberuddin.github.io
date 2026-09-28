"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Large stat numeral with a count-up on first scroll into view.
 *
 * SSR-safe and screenshot-safe: the initial render always shows the final
 * value, the animation is a progressive enhancement, and prefers-reduced-motion
 * users (and non-JS renders) simply keep the static number.
 */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (!started && entries.some((entry) => entry.isIntersecting)) {
          started = true;
          const start = performance.now();
          const duration = 1100;

          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(value * eased));
            if (progress < 1) {
              raf = requestAnimationFrame(tick);
            }
          };

          raf = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span className="pf-stat-num" ref={ref}>
      {display}
      {suffix ? <small>{suffix}</small> : null}
    </span>
  );
}