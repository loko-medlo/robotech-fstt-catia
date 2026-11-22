import { motion } from "framer-motion";
import { ArrowDown, CalendarDays, Clock3, MapPin, ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover object-[62%_center] opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Formation 2026
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-5 py-2 text-sm font-bold text-secondary">
            CATIA V5 · Initiation pratique
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-heading mx-auto max-w-5xl text-center text-4xl font-bold leading-[1.04] sm:text-6xl md:text-7xl lg:text-8xl mb-6"
        >
          Passez de l&apos;idée
          <br />
          à la <span className="text-gradient-primary">conception 3D.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mb-9 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
        >
          Une immersion concrète dans CATIA V5 pour apprendre les fondamentaux de la conception mécanique et construire vos premières pièces professionnelles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href="#register"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition-all hover:-translate-y-1 glow-primary"
          >
            Réserver ma place
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a
            href="#edition-2025"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-border bg-card/70 px-7 py-4 text-base font-bold text-foreground transition-all hover:border-primary/50 hover:-translate-y-1"
          >
            Découvrir l&apos;édition précédente
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="surface-panel mx-auto mt-10 grid max-w-4xl grid-cols-1 divide-y divide-border/70 overflow-hidden rounded-2xl sm:mt-14 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          <div className="flex items-center gap-4 px-6 py-5"><CalendarDays className="h-5 w-5 text-primary" /><div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Date</p><p className="font-semibold">Samedi 28 novembre 2026</p></div></div>
          <div className="flex items-center gap-4 px-6 py-5"><Clock3 className="h-5 w-5 text-secondary" /><div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Horaire</p><p className="font-semibold">13 h 00</p></div></div>
          <div className="flex items-center gap-4 px-6 py-5"><MapPin className="h-5 w-5 text-primary" /><div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Lieu</p><p className="font-semibold">Salle F14</p></div></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 text-center sm:mt-14"
        >
          <a href="#about" className="inline-block animate-float">
            <ArrowDown className="h-8 w-8 text-primary animate-pulse-glow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
