import logoRobotech from "@/assets/logo-robotech.png";
import { ArrowUpRight, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface-elevated">
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="container relative z-10 mx-auto px-4 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div>
            <a href="https://robotech-fstt.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-5 inline-flex items-center gap-3" aria-label="Site officiel ROBOTECH FSTT">
              <img src={logoRobotech} alt="Robotech" className="h-11 w-11 object-contain" />
              <span className="font-heading text-xl font-bold tracking-wider text-foreground">ROBO<span className="text-primary">TECH</span></span>
            </a>
            <p className="max-w-md leading-relaxed text-muted-foreground">Club scientifique et technologique de la FSTT, où les étudiants construisent, programment et innovent ensemble.</p>
            <a href="https://robotech-fstt.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80">
              <Globe className="h-4 w-4" />
              Visiter le site officiel
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h2 className="mb-5 font-heading text-sm font-bold uppercase tracking-[0.16em] text-foreground">Explorer</h2>
            <nav className="flex flex-col items-start gap-3" aria-label="Liens de formation">
              <a className="text-sm text-muted-foreground transition-colors hover:text-primary" href="#register">S&apos;inscrire à la formation</a>
              <a className="text-sm text-muted-foreground transition-colors hover:text-primary" href="#edition-2025">Découvrir l&apos;édition 2025</a>
              <a className="text-sm text-muted-foreground transition-colors hover:text-primary" href="#downloads">Préparer son ordinateur</a>
              <a className="text-sm text-muted-foreground transition-colors hover:text-primary" href="https://robotech-fstt.vercel.app/" target="_blank" rel="noopener noreferrer">Site du Club Robotech</a>
            </nav>
          </div>

          <div>
            <h2 className="mb-5 font-heading text-sm font-bold uppercase tracking-[0.16em] text-foreground">Suivre Robotech</h2>
            <div className="flex gap-3">
              <a className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground" href="https://web.facebook.com/profile.php?id=100087185894367" target="_blank" rel="noopener noreferrer" aria-label="ROBOTECH FSTT sur Facebook" title="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1 .28-1.75 1.77-1.75H17.2V2.36A25.8 25.8 0 0 0 14.42 2C11.67 2 9.8 3.68 9.8 6.77V9.5H6.7V13h3.1v9h3.7Z" /></svg>
              </a>
              <a className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:-translate-y-1 hover:border-secondary hover:bg-secondary hover:text-secondary-foreground" href="https://www.instagram.com/robotech.fstt/" target="_blank" rel="noopener noreferrer" aria-label="ROBOTECH FSTT sur Instagram" title="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
              </a>
              <a className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground" href="https://www.linkedin.com/company/robotechfstt/" target="_blank" rel="noopener noreferrer" aria-label="ROBOTECH FSTT sur LinkedIn" title="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current"><path d="M5.34 7.5A2.17 2.17 0 1 1 5.3 3.16a2.17 2.17 0 0 1 .04 4.34ZM3.45 9.2h3.78V21H3.45V9.2Zm6.08 0h3.62v1.61h.05c.5-.95 1.74-1.96 3.57-1.96 3.82 0 4.53 2.51 4.53 5.78V21h-3.77v-5.65c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21H9.53V9.2Z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Club Robotech. Tous droits réservés.</p>
          <a href="https://loukili-mohameding.netlify.app/#contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-primary/80">
            Conception : Loukili Mohamed
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
