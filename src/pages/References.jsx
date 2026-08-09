import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Palette, LayoutGrid } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CircuitGrid from "@/components/CircuitGrid";
import { CANVA_URL, COVER_IMAGE } from "@/data/officers";

export default function References() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <CircuitGrid variant="hero" />

      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="// SOURCE ARCHIVE"
          title="References"
          subtitle="Design assets and source materials powering the SE-10 Neural Grid portal."
        />

        {/* Cover preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-12 relative aspect-square w-full max-w-md mx-auto overflow-hidden border border-primary/30 clip-corner"
        >
          <div className="absolute inset-0 data-grid opacity-40" />
          <img
            src={COVER_IMAGE}
            alt="SE-10 Meet the Officers — cover design"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 scanlines opacity-30" />
        </motion.div>

        {/* Canva reference card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 relative border border-foreground/10 bg-card/60 backdrop-blur-sm p-8 md:p-10 clip-corner"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 grid place-items-center h-12 w-12 border border-primary/50 text-primary">
              <Palette size={22} />
            </div>
            <div className="flex-1">
              <span className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-accent">// DESIGN SOURCE</span>
              <h3 className="mt-1 font-display text-xl md:text-2xl uppercase tracking-tighter-2 text-stark">
                Official Canva Design Pack
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                All officer portraits and the "Meet the Officers" cover artwork were sourced from
                the official SE-10 Canva design file. View the original designs below.
              </p>
              <a
                href={CANVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-2 border border-primary/50 px-5 py-3 font-mono-tech text-xs tracking-[0.2em] uppercase text-stark hover:bg-primary/10 transition-colors min-h-[44px]"
              >
                <LayoutGrid size={16} className="text-primary" />
                Open Canva Design
                <ExternalLink size={14} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        <p className="mt-10 text-center font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          SE-10 // Neural Grid 10 // DLSL Batch 2028
        </p>
      </div>
    </div>
  );
}