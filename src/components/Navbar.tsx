import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Menu, X } from "lucide-react";
import logoRobotech from "@/assets/logo-robotech.png";

const navLinks = [
  { id: "about", label: "À propos" },
  { id: "register", label: "S'inscrire" },
  { id: "domains", label: "Domaines" },
  { id: "edition-2025", label: "Édition 2025" },
  { id: "downloads", label: "Téléchargements" },
  { id: "faq", label: "FAQ" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adding a threshold (e.g., 200) to consider a section "active" when it's near the top
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/75 shadow-[0_12px_35px_-30px_black] backdrop-blur-xl"
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-4 sm:py-4">
          <div className="flex items-center gap-3">
            <img src={logoRobotech} alt="Robotech Logo" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
            <span className="font-heading text-base font-bold tracking-wider text-foreground sm:text-lg">
              ROBO<span className="text-primary">TECH</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href || `#${link.id}`}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`transition-colors whitespace-nowrap ${activeSection === link.id
                  ? "text-primary font-bold"
                  : "hover:text-primary"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-primary"
            >
              <CalendarDays className="h-4 w-4" />
              <span>S&apos;inscrire</span>
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/70 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-background/95 px-5 pb-6 pt-24 backdrop-blur-xl"
          >
            <div className="mx-auto flex max-w-md flex-col gap-2 text-lg font-medium text-foreground">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href || `#${link.id}`}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={toggleMenu}
                  className={`rounded-xl border border-transparent px-4 py-3.5 transition-colors ${activeSection === link.id
                    ? "text-primary font-bold"
                    : "hover:border-border hover:bg-card hover:text-primary"
                    }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="#register"
                  onClick={toggleMenu}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-all hover:opacity-90 glow-primary"
                >
                  <CalendarDays className="h-4 w-4" />
                  <span>S&apos;inscrire</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
