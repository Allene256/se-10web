import React from "react";

// Reusable atmospheric background: data-grid + glow nodes + animated scanline.
export default function CircuitGrid({ variant = "default", className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-0 data-grid opacity-60" />
      {/* radial vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 30%, hsl(225 100% 59% / 0.10), transparent 60%)" }}
      />
      {variant === "hero" && (
        <>
          {/* scanning horizontal line */}
          <div className="absolute left-0 right-0 h-px bg-accent/60 blur-[1px] animate-scanline" />
          {/* floating nodes */}
          <div className="absolute top-[22%] left-[12%] h-2 w-2 rounded-full bg-primary/70 blur-[1px] animate-flicker" />
          <div className="absolute top-[68%] left-[78%] h-2 w-2 rounded-full bg-accent/70 blur-[1px] animate-flicker" />
          <div className="absolute top-[45%] left-[44%] h-1.5 w-1.5 rounded-full bg-primary/50 animate-flicker" />
        </>
      )}
    </div>
  );
}