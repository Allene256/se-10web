import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "HOME" },
  { to: "/officers", label: "ROSTER" },
  { to: "/events", label: "EVENTS" },
  { to: "/announcements", label: "INTEL" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* scroll progress bar */}
      <div className="h-0.5 w-full bg-foreground/5">
        <div
          className="h-full bg-primary shadow-[0_0_10px_rgba(46,91,255,0.8)] transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <nav className="backdrop-blur-[20px] bg-background/70 border-b border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
          {/* logo */}
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="grid place-items-center h-8 w-8 border border-primary/60 text-primary font-display text-xs glow-blue">
              SE
            </span>
            <span className="font-display text-sm tracking-tighter-2 text-stark uppercase">
              10<span className="text-accent">.</span>
            </span>
          </Link>

          {/* desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => {
              const active = location.pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`relative px-4 py-2 font-mono-tech text-[11px] tracking-[0.2em] uppercase transition-colors ${
                      active ? "text-accent" : "text-muted-foreground hover:text-stark"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent shadow-[0_0_8px_rgba(0,242,255,0.8)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-10 w-10 text-stark"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="md:hidden border-t border-foreground/10 bg-background/95 backdrop-blur-xl">
            <ul className="px-5 py-4 flex flex-col gap-1">
              {LINKS.map((l) => {
                const active = location.pathname === l.to;
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className={`block px-3 py-3 font-mono-tech text-xs tracking-[0.2em] uppercase border-l-2 ${
                        active ? "border-accent text-accent" : "border-transparent text-muted-foreground"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}