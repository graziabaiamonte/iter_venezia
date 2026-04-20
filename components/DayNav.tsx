"use client";

import { useEffect, useState } from "react";

const DAYS = [
  { id: "giorno-1", num: "24", month: "APR", tag: "Mestre" },
  { id: "giorno-2", num: "25", month: "APR", tag: "Venezia" },
  { id: "giorno-3", num: "26", month: "APR", tag: "Mestre + rientro" },
];

export default function DayNav() {
  const [active, setActive] = useState<string>("giorno-1");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 200);
      const positions = DAYS.map((d) => {
        const el = document.getElementById(d.id);
        if (!el) return { id: d.id, top: Infinity };
        const r = el.getBoundingClientRect();
        return { id: d.id, top: Math.abs(r.top - 120) };
      });
      const nearest = positions.sort((a, b) => a.top - b.top)[0];
      if (nearest) setActive(nearest.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
          <span
            className={`hidden sm:block font-mono text-[11px] tracking-[0.2em] uppercase text-ink/60 pr-2 transition-opacity ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            Venezia →
          </span>
          {DAYS.map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              data-active={active === d.id}
              className="day-pill flex-1 sm:flex-none min-w-[110px] inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-ink/15 bg-cream/70 text-ink transition-all hover:border-terracotta hover:-translate-y-0.5"
              aria-label={`Giorno ${d.num} Aprile`}
            >
              <div className="flex flex-col items-center leading-none">
                <span className="display text-2xl font-semibold">{d.num}</span>
                <span className="font-mono text-[9px] tracking-widest opacity-70 mt-0.5">{d.month}</span>
              </div>
              <span className="font-body text-sm font-medium">{d.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
