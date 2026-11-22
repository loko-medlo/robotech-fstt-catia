import { motion } from "framer-motion";
import { Zap, AlertTriangle, ArrowRight } from "lucide-react";
import catiaElectrical from "@/assets/catia 9 electrical.webp";

const ElectriciensSection = () => {
  return (
    <section id="electriciens" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <img src={catiaElectrical} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-40 sm:object-right sm:opacity-70" />
      <div className="absolute inset-0 bg-background/55 sm:bg-gradient-to-r sm:from-background sm:via-background/80 sm:to-background/10" />
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="surface-panel relative overflow-hidden rounded-3xl border-secondary/30 p-6 sm:p-8 md:p-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full" />

            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="font-heading text-2xl md:text-4xl font-bold">
                <span className="text-gradient-secondary">Électriciens</span>, ceci est pour vous !
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <p>
                  <strong className="text-foreground">Un grand projet ne se réalise jamais seul.</strong> Que vous conceviez 
                  un tableau électrique industriel, un système domotique ou une installation complexe, vous aurez 
                  besoin de <strong className="text-primary">comprendre la mécanique</strong> pour intégrer vos composants.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p>
                  Avec CATIA V5, vous pouvez <strong className="text-foreground">concevoir des boîtiers</strong>, 
                  des supports de câblage, des armoires électriques en 3D, et collaborer efficacement avec les 
                  ingénieurs mécaniciens sur des projets pluridisciplinaires.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p>
                  Le module <strong className="text-foreground">Electrical Harness</strong> de CATIA permet même de 
                  concevoir le routage de câbles et faisceaux directement dans l'assemblage mécanique. 
                  <strong className="text-secondary"> C'est un atout majeur pour votre CV !</strong>
                </p>
              </div>
            </div>

            <a
              href="#register"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 font-bold text-secondary-foreground transition-all hover:scale-105 glow-secondary"
            >
              <Zap className="h-5 w-5" />
              Rejoindre la Formation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElectriciensSection;
