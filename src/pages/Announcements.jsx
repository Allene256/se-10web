import React from "react";
import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CircuitGrid from "@/components/CircuitGrid";
import { ANNOUNCEMENTS } from "@/data/announcements";

export default function Announcements() {
  return (
    <div className="relative">
      {/* header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-foreground/10">
        <CircuitGrid variant="hero" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="// Mission Log — Internal"
            title="Intel"
            subtitle="Internal intel. Advisories, reminders, and official word from the SE-10 command."
          />
        </div>
      </section>

      {/* list */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="relative">
            {/* central line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-accent/10 via-accent/60 to-accent/10 shadow-[0_0_12px_rgba(0,242,255,0.5)]" />

            <div className="space-y-10">
              {ANNOUNCEMENTS.map((a, i) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, stiffness: 100, damping: 20 }}
                  className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
                >
                  <span className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 grid place-items-center h-6 w-6 rounded-full bg-background border border-accent/60 shadow-[0_0_12px_rgba(0,242,255,0.6)]">
                    <Megaphone size={11} className="text-accent" />
                  </span>

                  <div className={`md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <div className="relative p-6 bg-card/60 backdrop-blur-sm border border-accent/20 hover:border-accent/50 transition-colors clip-corner">
                      <span className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-accent/60" />
                      <span className="absolute right-2 bottom-2 h-4 w-4 border-r-2 border-b-2 border-accent/60" />
                      <span className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-primary">{a.tag} · {a.date}</span>
                      <h3 className="mt-3 font-display text-lg md:text-xl uppercase tracking-tighter-2 text-stark leading-tight">
                        {a.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}