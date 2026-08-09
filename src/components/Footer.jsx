import React from "react";
import { Instagram, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/data/officers";

export default function Footer() {
  return (
    <footer className="relative border-t border-foreground/10 bg-background">
      {/* The Terminal — Instagram preview tiles */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono-tech text-[11px] tracking-[0.4em] uppercase text-accent">// The Terminal</span>
            <h3 className="mt-2 font-display text-2xl md:text-3xl uppercase tracking-tighter-2 text-stark">
              Connect to the Grid
            </h3>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-primary/50 px-5 py-3 font-mono-tech text-xs tracking-[0.2em] uppercase text-stark hover:bg-primary/10 transition-colors min-h-[44px]"
          >
            <Instagram size={16} className="text-primary" />
            {INSTAGRAM_HANDLE}
            <ArrowUpRight size={14} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* IG preview tiles with scanline overlay */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[0, 1, 2, 3].map((i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-card border border-foreground/10"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, #0a1a3f, #2E5BFF33)"
                      : "linear-gradient(135deg, #0a1a3f, #00F2FF22)",
                }}
              />
              <div className="absolute inset-0 data-grid opacity-40" />
              <div className="absolute inset-0 scanlines opacity-50" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-2xl text-stark/30 group-hover:text-stark/60 transition-colors">
                  SE 10
                </span>
              </div>
              <div className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-primary/50" />
            </a>
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="relative overflow-hidden border-t border-foreground/10 py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-mono-tech text-xs tracking-[0.3em] uppercase text-muted-foreground/40 mx-8">
              DLSL BATCH 2028 — SE-10 CLASS OFFICIAL PORTAL —
            </span>
          ))}
        </div>
      </div>

      {/* bottom strip */}
      <div className="border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <span className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            © 2026 SE-10 // Neural Grid 10
          </span>
          <div className="flex items-center gap-5">
            <Link to="/officers" className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-stark transition-colors">
              Roster
            </Link>
            <Link to="/events" className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-stark transition-colors">
              Events
            </Link>
            <Link to="/announcements" className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-stark transition-colors">
              Intel
            </Link>
            <Link to="/references" className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-stark transition-colors">
              Refs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}