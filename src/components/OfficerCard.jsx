import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Image } from "@/components/ui/image";

// "Stasis Pod" officer card — vertical, monochrome placeholder portrait with neon halo,
// massive ghosted last name behind, role in cyan mono tag.
/**
 * @param {Object} props
 * @param {any} props.officer
 * @param {number} [props.index=0]
 */
export default function OfficerCard({ officer, index = 0 }) {
  const initials = (officer.firstName?.[0] ?? "") + (officer.lastName?.[0] ?? "");
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, stiffness: 100, damping: 20 }}
      onClick={() => navigate(`/profile/${officer.id}`)}
      role="button"
      tabIndex={0}
      className="group relative aspect-[3/4] w-full overflow-hidden bg-card clip-corner cursor-pointer"
    >
      {/* circuit frame */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <span className="absolute left-2 top-2 h-5 w-5 border-l-2 border-t-2 border-primary/50 transition-colors duration-300 group-hover:border-accent" />
        <span className="absolute right-2 top-2 h-5 w-5 border-r-2 border-t-2 border-primary/50 transition-colors duration-300 group-hover:border-accent" />
        <span className="absolute left-2 bottom-2 h-5 w-5 border-l-2 border-b-2 border-primary/50 transition-colors duration-300 group-hover:border-accent" />
        <span className="absolute right-2 bottom-2 h-5 w-5 border-r-2 border-b-2 border-primary/50 transition-colors duration-300 group-hover:border-accent" />
      </div>

      {/* ghosted last name */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <span
          className="font-display text-5xl md:text-6xl font-bold uppercase leading-none text-stark opacity-[0.06] tracking-tighter-2 transition-all duration-500 group-hover:opacity-[0.12]"
          style={{ transform: "rotate(-90deg) translateX(-8%)", whiteSpace: "nowrap" }}
        >
          {officer.lastName}
        </span>
      </div>

      {/* portrait area */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 pt-16 pb-20">
        <div className="relative">
          {/* halo */}
          <div
            className="absolute -inset-3 rounded-full opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-90"
            style={{ background: `radial-gradient(circle, ${officer.color}55, transparent 70%)` }}
          />
          <div className="relative h-28 w-28 md:h-32 md:w-32 rounded-full overflow-hidden border border-primary/40 transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(46,91,255,0.6)]">
            {officer.photo ? (
              <div className="absolute inset-0 grayscale transition-all duration-500 group-hover:grayscale-0">
                <Image
                  src={officer.photo}
                  alt={`${officer.firstName} ${officer.lastName}`}
                  fittingType="fill"
                  className="h-full w-full"
                />
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-b from-secondary to-background" />
                <div className="absolute inset-0 flex items-center justify-center font-display text-3xl text-stark/40 grayscale transition-all duration-500 group-hover:text-stark/80 group-hover:grayscale-0">
                  {initials}
                </div>
              </>
            )}
            {/* scanlines overlay */}
            <div className="absolute inset-0 scanlines opacity-40" />
          </div>
        </div>

        {/* name */}
        <div className="mt-6 text-center">
          <h3 className="font-display text-lg md:text-xl uppercase tracking-tighter-2 text-stark leading-none">
            {officer.lastName}
          </h3>
          {officer.firstName && officer.firstName !== officer.lastName && (
            <p className="mt-1 font-mono-tech text-xs text-muted-foreground tracking-wide">
              {officer.firstName}
            </p>
          )}
        </div>
      </div>

      {/* role footer */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-primary/20 bg-background/70 backdrop-blur-sm px-4 py-3 text-center">
        <span className="font-mono-tech text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-accent">
          {officer.role}
        </span>
      </div>

      {/* quote tooltip on hover */}
      {officer.quote && (
        <div className="pointer-events-none absolute right-3 top-3 z-30 max-w-[60%] text-right">
          <span className="font-mono-tech text-[10px] italic text-muted-foreground/0 transition-opacity duration-500 group-hover:text-muted-foreground/70">
            “{officer.quote}”
          </span>
        </div>
      )}
    </motion.article>
  );
}