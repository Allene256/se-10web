import React from "react";
import { motion } from "framer-motion";

// Heading block with optical corner brackets + technical eyebrow label.
export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col ${alignClass} gap-3`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-mono-tech text-[11px] tracking-[0.4em] uppercase text-accent"
        >
          {eyebrow}
        </motion.span>
      )}
      <div className="relative">
        {/* corner brackets */}
        <span className="absolute -left-3 -top-2 h-4 w-4 border-l-2 border-t-2 border-primary/70" />
        <span className="absolute -right-3 -bottom-2 h-4 w-4 border-r-2 border-b-2 border-primary/70" />
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, stiffness: 100, damping: 20 }}
          className="font-display text-3xl md:text-5xl tracking-tighter-2 text-stark uppercase leading-tight"
        >
          {title}
        </motion.h2>
      </div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}