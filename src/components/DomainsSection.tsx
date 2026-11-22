import { motion } from "framer-motion";
import { Plane, Car, Cog, Building2, Stethoscope, Ship } from "lucide-react";
import catiaAircraft from "@/assets/Structure Aéronautique.webp";

const domains = [
  { icon: Plane, name: "Aérospatiale", description: "Airbus, Boeing, Dassault Aviation" },
  { icon: Car, name: "Automobile", description: "BMW, Renault, Toyota, Tesla" },
  { icon: Cog, name: "Mécanique Industrielle", description: "Machines, outillage, production" },
  { icon: Building2, name: "Architecture & BTP", description: "Structures métalliques, charpentes" },
  { icon: Stethoscope, name: "Biomédical", description: "Prothèses, équipements médicaux" },
  { icon: Ship, name: "Naval & Énergie", description: "Construction navale, éolien, nucléaire" },
];

const DomainsSection = () => {
  return (
    <section id="domains" className="relative overflow-hidden bg-surface-elevated py-24">
      <img src={catiaAircraft} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.12] sm:object-right sm:opacity-[0.24]" />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated via-surface-elevated/90 to-surface-elevated sm:bg-gradient-to-r sm:from-surface-elevated sm:via-surface-elevated/85 sm:to-surface-elevated/45" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Domaines <span className="text-gradient-secondary">d'Application</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            CATIA V5 est présent dans pratiquement tous les secteurs industriels de pointe.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group cursor-default rounded-2xl border border-border bg-card p-4 text-center transition-all hover:border-secondary/40 hover:glow-secondary sm:p-6"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 sm:mb-4 sm:h-14 sm:w-14">
                <domain.icon className="h-5 w-5 text-secondary sm:h-7 sm:w-7" />
              </div>
              <h3 className="mb-1 font-heading text-xs font-bold text-foreground sm:text-sm">{domain.name}</h3>
              <p className="text-xs text-muted-foreground">{domain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
