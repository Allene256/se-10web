import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { GraduationCap } from "lucide-react";

/**
 * @typedef {Object} AdviserCardAdviser
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} [nickname]
 * @property {string | null} [photo]
 * @property {string} [role]
 * @property {string} [quote]
 * @property {string} [color]
 */

/**
 * @param {{ adviser: AdviserCardAdviser, index?: number }} props
 */
export default function AdviserCard({ adviser, index = 0 }) {
  const initials =
    (adviser.nickname?.[0] ?? "") + (adviser.lastName?.[0] ?? "");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, stiffness: 100, damping: 20 }}
      className="group relative w-full overflow-hidden bg-card border border-primary/30 clip-corner grid md:grid-cols-[280px_1fr] min-h-[360px]"
    >
      {/* circuit frame */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <span className="absolute left-2 top-2 h-6 w-6 border-l-2 border-t-2 border-primary/50 transition-colors duration-300 group-hover:border-accent" />
        <span className="absolute right-2 top-2 h-6 w-6 border-r-2 border-t-2 border-primary/50 transition-colors duration-300 group-hover:border-accent" />
        <span className="absolute left-2 bottom-2 h-6 w-6 border-l-2 border-b-2 border-primary/50 transition-colors duration-300 group-hover:border-accent" />
        <span className="absolute right-2 bottom-2 h-6 w-6 border-r-2 border-b-2 border-primary/50 transition-colors duration-300 group-hover:border-accent" />
      </div>

      {/* ghosted name */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <span
          className="font-display text-6xl md:text-8xl font-bold uppercase leading-none text-stark opacity-[0.05] tracking-tighter-2"
          style={{ whiteSpace: "nowrap" }}
        >
          {adviser.lastName}
        </span>
      </div>

      {/* portrait area */}
      <div className="relative z-10 flex items-center justify-center px-6 py-10 md:border-r md:border-primary/20 md:bg-secondary/30">
        <div className="relative">
          {/* halo */}
          <div
            className="absolute -inset-4 rounded-full opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90"
            style={{ background: `radial-gradient(circle, ${adviser.color}55, transparent 70%)` }}
          />
          <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden border border-primary/40 transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_40px_rgba(46,91,255,0.6)]">
            {adviser.photo ? (
              <div className="absolute inset-0 grayscale transition-all duration-500 group-hover:grayscale-0">
                <Image
                  src={adviser.photo}
                  alt={`${adviser.nickname} ${adviser.lastName}`}
                  fittingType="fill"
                  className="h-full w-full"
                />
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-secondary to-background" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <GraduationCap size={36} className="text-stark/40 transition-all duration-500 group-hover:text-stark/80" />
                  <span className="font-display text-4xl text-stark/40 transition-all duration-500 group-hover:text-stark/80">
                    {initials}
                  </span>
                </div>
              </>
            )}
            {/* scanlines overlay */}
            <div className="absolute inset-0 scanlines opacity-40" />
          </div>
        </div>
      </div>

      {/* info area */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-10 py-10 md:py-12">
        <span className="font-mono-tech text-[11px] md:text-xs tracking-[0.3em] uppercase text-accent">
          // The Adviser
        </span>
        <h3 className="mt-3 font-display text-2xl md:text-4xl uppercase tracking-tighter-2 text-stark leading-none">
          {adviser.lastName}
        </h3>
        <p className="mt-2 font-mono-tech text-sm text-muted-foreground">
          {adviser.firstName}
          {adviser.nickname && (
            <span className="text-stark/70"> · {adviser.nickname}</span>
          )}
        </p>
        <span className="mt-5 self-start font-mono-tech text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-primary border border-primary/40 px-3 py-2">
          {adviser.role}
        </span>
        {adviser.quote && (
          <p className="mt-6 max-w-md text-sm text-muted-foreground/80 italic leading-relaxed">
            “{adviser.quote}”
          </p>
        )}
        {!adviser.photo && (
          <p className="mt-6 font-mono-tech text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60">
            // Portrait pending — official photo to be uploaded
          </p>
        )}
      </div>
    </motion.article>
  );
}