import React from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CircuitGrid from "@/components/CircuitGrid";
import { EVENTS } from "@/data/events";
import { INSTAGRAM_URL } from "@/data/officers";

export default function Events() {
  return (
    <div className="relative">
      {/* header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-foreground/10">
        <CircuitGrid variant="hero" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="// Mission Log — External"
            title="Events"
            subtitle="External actions. Operations, gatherings, and the moments the grid goes public."
          />
        </div>
      </section>

      {/* split-timeline */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="relative">
            {/* central glowing line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/60 to-primary/10 shadow-[0_0_12px_rgba(46,91,255,0.6)]" />

            <div className="space-y-12">
              {EVENTS.map((e, i) => (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, stiffness: 100, damping: 20 }}
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
                >
                  {/* node */}
                  <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_rgba(0,242,255,0.8)]" />

                  <div className={`md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <div className="relative p-6 bg-card/60 backdrop-blur-sm border border-primary/20 hover:border-accent/50 transition-colors clip-corner">
                      <span className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-primary/60" />
                      <span className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-primary/60" />
                      <span className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-accent">{e.tag} · {e.date}</span>
                      <h3 className="mt-3 font-display text-xl md:text-2xl uppercase tracking-tighter-2 text-stark leading-tight">
                        {e.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
              // Full coverage on our channel
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-primary/50 px-6 py-3 font-mono-tech text-xs tracking-[0.25em] uppercase text-stark hover:bg-primary/10 transition-colors min-h-[44px]"
            >
              <Instagram size={15} className="text-primary" />
              More on Instagram
              <ArrowUpRight size={14} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}