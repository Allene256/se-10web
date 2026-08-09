import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Palette, Globe, Sparkles, ImageIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CircuitGrid from "@/components/CircuitGrid";
import { Image } from "@/components/ui/image";
import { REFERENCES } from "@/data/references";

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   description: string;
 *   url: string | null;
 *   type: "external" | "ai" | "design";
 *   cover: string | null;
 * }} Reference
 */

/** @typedef {import("lucide-react").LucideProps} LucideProps */
/** @type {Record<"external" | "ai" | "design", React.ComponentType<LucideProps>>} */
const ICON_FOR = { external: Globe, ai: Sparkles, design: Palette };

export default function References() {
  const canva = /** @type {Reference | undefined} */ (
    REFERENCES.find((r) => r.id === "ref-canva")
  );
  const others = REFERENCES.filter((r) => r.id !== "ref-canva");

  return (
    <div className="relative min-h-screen pt-24 pb-20 overflow-hidden">
      <CircuitGrid variant="hero" />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="// SOURCE ARCHIVE"
          title="References"
          subtitle="Design assets, content sources, and credited materials that power the SE-10 Neural Grid portal."
        />

        {/* Official Canva Design Pack — featured banner */}
        {canva && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-12 relative border border-primary/40 bg-card/60 backdrop-blur-sm clip-corner overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] overflow-hidden border-b md:border-b-0 md:border-r border-foreground/10">
                {canva.cover ? (
                  <Image
                    src={canva.cover}
                    alt={canva.label}
                    fittingType="fill"
                    className="h-full w-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/40 text-stark/60">
                    <span className="font-mono-tech uppercase tracking-[0.3em]">No cover image</span>
                  </div>
                )}
                <div className="absolute inset-0 scanlines opacity-25" />
              </div>
              <div className="relative flex flex-col justify-center p-6 md:p-10">
                <div className="flex items-center gap-3">
                  <Palette size={18} className="text-accent" />
                  <span className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-accent">
                    // DESIGN SOURCE
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl uppercase tracking-tighter-2 text-stark leading-tight">
                  {canva.label}
                </h3>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {canva.description}
                </p>
                <a
                  href={canva.url ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 self-start border border-primary/50 px-5 py-3 font-mono-tech text-[11px] tracking-[0.2em] uppercase text-stark hover:bg-primary/10 transition-colors min-h-[44px]"
                >
                  Visit Source
                  <ExternalLink size={14} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.section>
        )}

        {/* Other references — compact list */}
        <div className="mt-6 space-y-6">
          {others.map((ref, i) => {
            const Icon = ICON_FOR[ref.type] ?? ImageIcon;
            return (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative border border-foreground/10 bg-card/60 backdrop-blur-sm clip-corner overflow-hidden grid sm:grid-cols-[160px_1fr] gap-0 min-h-[200px]"
              >
                {/* cover */}
                <div className="relative h-40 sm:h-full w-full overflow-hidden border-b sm:border-b-0 sm:border-r border-foreground/10 bg-secondary/40">
                  {ref.cover ? (
                    <Image src={ref.cover} alt={ref.label} fittingType="fill" className="h-full w-full" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center data-grid">
                      <Icon size={40} className="text-primary/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 scanlines opacity-25" />
                </div>

                {/* body */}
                <div className="relative flex flex-col p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 grid place-items-center h-9 w-9 border border-primary/50 text-primary">
                      <Icon size={16} />
                    </div>
                    <span className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-accent">
                      {ref.type === "ai" ? "// AI-GENERATED" : ref.type === "external" ? "// WEB REFERENCE" : "// DESIGN SOURCE"}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg md:text-2xl uppercase tracking-tighter-2 text-stark leading-tight">
                    {ref.label}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                    {ref.description}
                  </p>

                  {ref.url ? (
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-5 inline-flex items-center gap-2 self-start border border-primary/50 px-4 py-2.5 font-mono-tech text-[11px] tracking-[0.2em] uppercase text-stark hover:bg-primary/10 transition-colors min-h-[40px]"
                    >
                      Visit Source
                      <ExternalLink size={13} className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span className="mt-5 inline-flex items-center gap-2 self-start font-mono-tech text-[10px] tracking-[0.2em] uppercase text-muted-foreground/70">
                      <Sparkles size={12} className="text-accent" />
                      Generated in-app
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-center font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          SE-10 // Neural Grid 10 // DLSL Batch 2028
        </p>
      </div>
    </div>
  );
}