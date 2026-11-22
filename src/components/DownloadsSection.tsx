import { motion } from "framer-motion";
import { Download, BookOpen, FileText, ArrowUpRight, CheckCircle2, Laptop } from "lucide-react";

const downloads = [
  {
    icon: Download,
    title: "Télécharger CATIA V5",
    description: "Lien de téléchargement du logiciel CATIA V5 (version étudiante/complète).",
    href: "https://drive.google.com/file/d/1TFIljmVDH082aAi5C7hj09GYIL3ZXQS0/view",
    external: true,
    color: "primary" as const,
    step: "01",
    eyebrow: "Le logiciel",
  },
  {
    icon: BookOpen,
    title: "Guide d'Installation",
    description: "Tutoriel pas à pas pour installer CATIA V5. ⚠️ N'oubliez pas d'éteindre votre Wi-Fi / connexion internet avant l'installation.",
    href: "https://www.youtube.com/watch?v=aJWUngyqaMk",
    external: true,
    color: "secondary" as const,
    step: "02",
    eyebrow: "La configuration",
  },
  {
    icon: FileText,
    title: "Exercices PDF",
    description: "Recueil d'exercices pratiques pour s'entraîner sur Part Design, Assembly, et Drafting.",
    href: "/exercises-catia.pdf",
    external: true,
    color: "primary" as const,
    step: "03",
    eyebrow: "La pratique",
  },
];

const DownloadsSection = () => {
  return (
    <section id="downloads" className="py-24 bg-surface-elevated relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.07]" />
      <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Laptop className="h-4 w-4" />
            À préparer avant la formation
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Votre kit de <span className="text-gradient-primary">démarrage</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Préparez votre ordinateur avant la session du samedi 28 novembre 2026 pour profiter pleinement de la pratique.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {downloads.map((item, index) => {
            const isSecondary = item.color === "secondary";
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex min-h-[330px] flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 ${isSecondary
                  ? "border-secondary/30 bg-card hover:border-secondary/70 hover:shadow-[0_24px_55px_-24px_hsl(var(--secondary)/0.8)]"
                  : "border-primary/30 bg-card hover:border-primary/70 hover:shadow-[0_24px_55px_-24px_hsl(var(--primary)/0.8)]"
                  }`}
            >
              <div className={`absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] opacity-50 ${isSecondary ? "bg-secondary/10" : "bg-primary/10"}`} />
              <div className="relative flex items-start justify-between">
                <span className={`font-heading text-xs font-black tracking-[0.25em] ${isSecondary ? "text-secondary" : "text-primary"}`}>{item.step}</span>
                <span className="rounded-full border border-border bg-background/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{item.eyebrow}</span>
              </div>
              <div
                  className={`mb-6 mt-8 flex h-16 w-16 items-center justify-center rounded-2xl ${isSecondary ? "bg-secondary/10" : "bg-primary/10"
                    }`}
              >
                <item.icon className={`h-8 w-8 ${isSecondary ? "text-secondary" : "text-primary"}`} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <span
                  className={`mt-auto inline-flex w-full items-center justify-between rounded-xl px-5 py-3 text-sm font-bold transition-all ${isSecondary
                    ? "bg-secondary text-secondary-foreground group-hover:bg-secondary/90"
                    : "bg-primary text-primary-foreground group-hover:bg-primary/90"
                    }`}
                >
                  <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Accéder à la ressource</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">Conseil : installez CATIA puis consultez le guide avant la formation. Les exercices sont là pour continuer à progresser après la session.</p>
      </div>
    </section>
  );
};

export default DownloadsSection;
