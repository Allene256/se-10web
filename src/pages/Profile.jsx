import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { Image } from "@/components/ui/image";
import CircuitGrid from "@/components/CircuitGrid";
import { OFFICERS } from "@/data/officers";
import { ADVISER } from "@/data/adviser";

// Individual roster node — looks up an officer or the adviser by URL id and
// renders a full profile: large photo, role, quote, and a credentials grid.
export default function Profile() {
  const { id } = useParams();
  const person = [...OFFICERS, ADVISER].find((p) => String(p.id) === String(id));
  const isAdviser = !!person && person.id === ADVISER.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!person) {
    return (
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <CircuitGrid />
        <span className="font-mono-tech text-[11px] tracking-[0.4em] uppercase text-accent">// Signal Lost</span>
        <h1 className="mt-4 font-display text-4xl md:text-6xl uppercase tracking-tighter-2 text-stark text-glow-blue">
          Node Not Found
        </h1>
        <p className="mt-4 text-muted-foreground max-w-md">
          No roster entry matches this identifier. The node may be offline or mislinked.
        </p>
        <Link
          to="/officers"
          className="mt-10 inline-flex items-center gap-2 border border-primary/50 px-5 py-3 font-mono-tech text-xs tracking-[0.25em] uppercase text-stark hover:bg-primary/10 transition-colors min-h-[44px]"
        >
          <ArrowLeft size={14} /> Return to Roster
        </Link>
      </section>
    );
  }

  const initials = (person.firstName?.[0] ?? "") + (person.lastName?.[0] ?? "");

  return (
    <section className="relative min-h-screen pt-28 md:pt-32 pb-24 overflow-hidden">
      <CircuitGrid variant="hero" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* back */}
        <Link
          to="/officers"
          className="inline-flex items-center gap-2 font-mono-tech text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to Roster
        </Link>

        <div className="grid md:grid-cols-[400px_1fr] gap-10 md:gap-16 items-start">
          {/* photo pod */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, stiffness: 100, damping: 20 }}
            className="relative aspect-square w-full overflow-hidden bg-card clip-corner"
          >
            <div className="pointer-events-none absolute inset-0 z-20">
              <span className="absolute left-2 top-2 h-6 w-6 border-l-2 border-t-2 border-primary/60" />
              <span className="absolute right-2 top-2 h-6 w-6 border-r-2 border-t-2 border-primary/60" />
              <span className="absolute left-2 bottom-2 h-6 w-6 border-l-2 border-b-2 border-primary/60" />
              <span className="absolute right-2 bottom-2 h-6 w-6 border-r-2 border-b-2 border-primary/60" />
            </div>
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-70 blur-2xl"
              style={{ background: `radial-gradient(circle at 50% 35%, ${person.color}55, transparent 65%)` }}
            />
            {person.photo ? (
              <div className="absolute inset-0 z-10">
                <Image
                  src={person.photo}
                  alt={`${person.firstName} ${person.lastName}`}
                  fittingType="fit"
                  className="h-full w-full"
                />
              </div>
            ) : (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-secondary to-background">
                <GraduationCap size={44} className="text-stark/40" />
                <span className="font-display text-5xl text-stark/40">{initials}</span>
              </div>
            )}
            <div className="absolute inset-0 scanlines opacity-30 z-20 pointer-events-none" />
          </motion.div>

          {/* info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <span className="font-mono-tech text-[11px] tracking-[0.4em] uppercase text-accent">
              {isAdviser ? "// The Adviser" : "// Roster Node"}
            </span>
            <h1 className="mt-3 font-display text-4xl md:text-6xl uppercase tracking-tighter-2 text-stark text-glow-blue leading-none">
              {person.lastName}
            </h1>
            <p className="mt-2 font-mono-tech text-base text-muted-foreground">
              {person.firstName}
              {'nickname' in person && person.nickname && <span className="text-stark/70"> · {person.nickname}</span>}
            </p>

            <span className="mt-6 self-start font-mono-tech text-[11px] tracking-[0.2em] uppercase text-accent border border-accent/40 px-4 py-2.5">
              {person.role}
            </span>

            {person.quote && (
              <blockquote className="mt-8 max-w-xl border-l-2 border-primary/50 pl-5 text-lg italic text-foreground/85 leading-relaxed">
                “{person.quote}”
              </blockquote>
            )}

            {/* credentials */}
            <div className="mt-12">
              <span className="font-mono-tech text-[11px] tracking-[0.3em] uppercase text-primary">// Credentials</span>
              <dl className="mt-5 grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
                <div className="bg-card p-5">
                  <dt className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Designation</dt>
                  <dd className="mt-1 font-heading text-stark">{person.role}</dd>
                </div>
                <div className="bg-card p-5">
                  <dt className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Section</dt>
                  <dd className="mt-1 font-heading text-stark">SE-10</dd>
                </div>
                <div className="bg-card p-5">
                  <dt className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Network</dt>
                  <dd className="mt-1 font-heading text-stark">Neural Grid 10</dd>
                </div>
                <div className="bg-card p-5">
                  <dt className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Status</dt>
                  <dd className="mt-1 font-heading text-stark">{isAdviser ? "Faculty Mentor" : "Active Officer"}</dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}