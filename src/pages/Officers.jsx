import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import OfficerCard from "@/components/OfficerCard";
import AdviserCard from "@/components/AdviserCard";
import CircuitGrid from "@/components/CircuitGrid";
import { OFFICERS } from "@/data/officers";
import { ADVISER } from "@/data/adviser";

export default function Officers() {
  return (
    <div className="relative">
      {/* header */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-foreground/10">
        <CircuitGrid variant="hero" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="// The Roster"
            title="Meet the Officers"
            subtitle="The twelve nodes that keep the Neural Grid 10 operational. Each role is a circuit; together they form the class command structure."
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
          >
            <Stat label="Officers" value="12" />
            <Stat label="Roles" value="9" />
            <Stat label="Batch" value="2028" />
            <Stat label="Section" value="SE-10" />
          </motion.div>
        </div>
      </section>

      {/* adviser */}
      <section className="relative py-16 md:py-24 border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="// The Faculty"
            title="Meet the Adviser"
            subtitle="The mentor who keeps the Neural Grid 10 aligned in and out of the classroom."
          />
          <div className="mt-10">
            <AdviserCard adviser={ADVISER} />
          </div>
        </div>
      </section>

      {/* grid */}
      <section className="relative py-16 md:py-24 border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {OFFICERS.map((o, i) => (
              <OfficerCard key={o.id} officer={o} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            // Portraits update as official photos come online
          </p>
        </div>
      </section>
    </div>
  );
}

/**
 * @param {{ label: string; value: string | number }} props
 */
function Stat({ label, value }) {
  return (
    <div className="border border-foreground/10 p-4 bg-card/50">
      <span className="font-mono-tech text-[10px] tracking-[0.3em] uppercase text-accent">{label}</span>
      <p className="mt-1 font-display text-2xl text-stark">{value}</p>
    </div>
  );
}