import { useEffect, useState } from "react";

import type { Slide } from "@/portfolio-data";

export function Carousel({ slides, label }: { slides: Slide[]; label: string }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((v) => (v + 1) % slides.length), 4200);
    return () => window.clearInterval(timer);
  }, [slides.length]);
  if (slides.length === 0) return null;
  return (
    <div className="pf-carousel" aria-roledescription="carousel" aria-label={label}>
      <div className="pf-carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, k) => (
          <figure className="pf-slide" key={slide.caption} aria-hidden={k !== index}>
            {slide.src ? (
              <img src={slide.src} alt={slide.caption} loading="lazy" />
            ) : (
              <div className="pf-slide-ph">
                <span className="pf-slide-ph-icon" aria-hidden="true">&#9673;</span>
                <span>Photo coming soon</span>
              </div>
            )}
            <figcaption>{slide.caption}</figcaption>
          </figure>
        ))}
      </div>
      {slides.length > 1 ? (
        <div className="pf-dots">
          {slides.map((slide, k) => (
            <button
              key={slide.caption}
              type="button"
              aria-label={`Show photo ${k + 1}`}
              className={k === index ? "on" : ""}
              onClick={() => setIndex(k)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
