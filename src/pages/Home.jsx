import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Instagram, Radio } from "lucide-react";
import CircuitGrid from "@/components/CircuitGrid";
import SectionHeading from "@/components/SectionHeading";
import OfficerCard from "@/components/OfficerCard";
import { OFFICERS, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/data/officers";
import { EVENTS } from "@/data/events";
import { ANNOUNCEMENTS } from "@/data/announcements";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6a6d6283d21d0a7faa38be17/515c72c2c_generated_image.png";

export default function Home() {
  const logoRef = useRef(/** @type {HTMLDivElement | null} */ (null));

  // mouse-move parallax on the SE-10 logo
  const handleMove = (
    /** @type {React.MouseEvent<HTMLElement>} */ e
  ) => {
    const el = logoRef.current;
    if (!el) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 18;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  return (
    <div>
      {/* ============================ THE NEXUS ============================ */}
      <section
        onMouseMove={handleMove}
        className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden"
      >
        <CircuitGrid variant="hero" />
        {/* hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMG}
            alt=""
            fittingType="fill"
            className="h-full w-full opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono-tech text-[11px] md:text-xs tracking-[0.5em] uppercase text-accent mb-6"
          >
            DLSL Batch 2028 // Class Portal
          </motion.span>

          <div ref={logoRef} className="transition-transform duration-300 ease-out will-change-transform">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, stiffness: 100, damping: 20 }}
              className="font-display text-[18vw] md:text-[14rem] leading-none tracking-tighter-2 text-stark text-glow-blue"
            >
              SE<span className="text-accent text-glow-cyan">10</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-xl font-mono-tech text-sm md:text-base text-muted-foreground"
          >
            Official Class of SE-10 — the Neural Grid 10. Students, by the students, for the students.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to="/officers"
              className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 font-mono-tech text-xs tracking-[0.25em] uppercase text-stark glow-blue hover:bg-primary/90 transition-colors min-h-[44px]"
            >
              Meet the Roster
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 font-mono-tech text-xs tracking-[0.25em] uppercase text-stark hover:border-accent hover:text-accent transition-colors min-h-[44px]"
            >
              <Instagram size={15} />
              {INSTAGRAM_HANDLE}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-accent animate-flicker"
        >
          <ArrowDown size={20} />
        </motion.div>
      </section>

      {/* ============================ ABOUT ============================ */}
      <section className="relative py-24 md:py-32 border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="// 01 — Identity"
            title="Who We Are"
            subtitle="A section. A collective. A grid."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 text-lg leading-relaxed text-foreground/90"
            >
              SE-10 is a class of De La Salle Lipa Integrated School, Batch 2028. We move as one
              network — officers, members, and mission all wired into a single signal. This portal is
              our digital command center: the place where the roster lives, the mission log updates,
              and the class connects to the world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="border-l border-primary/30 pl-6"
            >
              <span className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-accent">Status</span>
              <p className="mt-2 font-display text-3xl text-stark uppercase">Online</p>
              <ul className="mt-4 space-y-2 font-mono-tech text-xs text-muted-foreground">
                <li>• 12 Active Officers</li>
                <li>• 1 Official Channel</li>
                <li>• ∞ Class Spirit</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ MISSION & VISION ============================ */}
      <section className="relative py-24 md:py-32 border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="// 02 — DLSL Core"
            title="Mission & Vision"
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative p-8 bg-card border border-foreground/10 clip-corner"
            >
              <span className="absolute left-2 top-2 h-5 w-5 border-l-2 border-t-2 border-primary/60" />
              <span className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-accent">Mission</span>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                Inspired by our faith in God, by our Catholic traditions, and by the charism of St. John
                Baptist De La Salle, educational innovator par excellence, we, together and by
                association, are committed to giving quality and human Christian education to all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="relative p-8 bg-card border border-foreground/10 clip-corner"
            >
              <span className="absolute right-2 top-2 h-5 w-5 border-r-2 border-t-2 border-accent/60" />
              <span className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-accent">Vision</span>
              <p className="mt-4 text-foreground/85 leading-relaxed">
                A Lasallian educational institution that builds a society founded on equity and justice,
                and on sustainable and inclusive development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ LATEST ============================ */}
      <section className="relative py-24 md:py-32 border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="// 03 — Mission Log"
            title="Latest Transmissions"
            subtitle="Events and announcements from the grid."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {/* Events */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-primary">Events</span>
                <Link to="/events" className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors">
                  View all →
                </Link>
              </div>
              <div className="space-y-3">
                {EVENTS.slice(0, 3).map((e) => (
                  <div key={e.id} className="group flex items-start gap-4 p-4 border border-foreground/10 hover:border-primary/40 transition-colors">
                    <div className="font-mono-tech text-[10px] text-accent border border-accent/40 px-2 py-1">{e.tag}</div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-stark text-sm group-hover:text-accent transition-colors">{e.title}</h4>
                      <span className="font-mono-tech text-[10px] text-muted-foreground">{e.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Announcements */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-tech text-xs tracking-[0.3em] uppercase text-accent">Intel</span>
                <Link to="/announcements" className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors">
                  View all →
                </Link>
              </div>
              <div className="space-y-3">
                {ANNOUNCEMENTS.slice(0, 3).map((a) => (
                  <div key={a.id} className="group flex items-start gap-4 p-4 border border-foreground/10 hover:border-accent/40 transition-colors">
                    <div className="font-mono-tech text-[10px] text-primary border border-primary/40 px-2 py-1">{a.tag}</div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-stark text-sm group-hover:text-accent transition-colors">{a.title}</h4>
                      <span className="font-mono-tech text-[10px] text-muted-foreground">{a.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ OFFICER SPOTLIGHT ============================ */}
      <section className="relative py-24 md:py-32 border-t border-foreground/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading eyebrow="// 04 — The Roster" title="Officer Spotlight" />
            <Link
              to="/officers"
              className="group inline-flex items-center gap-2 font-mono-tech text-xs tracking-[0.25em] uppercase text-stark border border-primary/50 px-5 py-3 hover:bg-primary/10 transition-colors min-h-[44px] w-fit"
            >
              Meet All Officers
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {OFFICERS.slice(0, 4).map((o, i) => (
              <OfficerCard key={o.id} officer={o} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CONNECT ============================ */}
      <section className="relative py-24 md:py-32 border-t border-foreground/10 overflow-hidden">
        <CircuitGrid />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 text-center">
          <span className="font-mono-tech text-[11px] tracking-[0.4em] uppercase text-accent">// 05 — Connect</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl uppercase tracking-tighter-2 text-stark text-glow-blue">
            Join the Signal
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Follow the official class channel for updates, behind-the-scenes, and the full SE-10 frequency.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono-tech text-sm tracking-[0.25em] uppercase text-stark glow-blue hover:bg-primary/90 transition-colors min-h-[44px]"
          >
            <Instagram size={18} />
            Follow {INSTAGRAM_HANDLE}
          </a>
          <div className="mt-6 inline-flex items-center gap-2 font-mono-tech text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            <Radio size={12} className="text-accent animate-flicker" />
            Broadcasting live
          </div>
        </div>
      </section>
    </div>
  );
}