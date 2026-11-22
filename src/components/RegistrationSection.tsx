import { motion } from "framer-motion";
import { BadgeCheck, CreditCard, UsersRound } from "lucide-react";
import { RegistrationForm } from "./RegistrationForm";
import catiaEngine from "@/assets/assemblage motor.jpg";

const RegistrationSection = () => {
    return (
        <section id="register" className="relative overflow-hidden bg-surface-elevated py-24">
            <img src={catiaEngine} alt="" className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.26] sm:object-right sm:opacity-[0.45]" />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-elevated/88 via-surface-elevated/80 to-surface-elevated/90 sm:bg-gradient-to-r sm:from-surface-elevated sm:via-surface-elevated/78 sm:to-surface-elevated/35" />
            {/* Decorative blobs */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                        Session du 28 novembre 2026
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                        Votre place en <span className="text-gradient-primary">formation</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        Réservez votre participation à la formation CATIA V5. Le règlement s&apos;effectue le jour de la formation.
                    </p>
                </motion.div>

                <div className="mx-auto mb-10 grid max-w-2xl gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5">
                        <div className="mb-3 flex items-center gap-2 text-primary"><UsersRound className="h-5 w-5" /><span className="text-sm font-bold uppercase tracking-wider">Membres Robotech</span></div>
                        <p className="font-heading text-3xl font-black">20 DH</p>
                    </div>
                    <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-5">
                        <div className="mb-3 flex items-center gap-2 text-secondary"><CreditCard className="h-5 w-5" /><span className="text-sm font-bold uppercase tracking-wider">Non-membres</span></div>
                        <p className="font-heading text-3xl font-black">30 DH</p>
                    </div>
                    <p className="sm:col-span-2 flex items-center justify-center gap-2 text-sm text-muted-foreground"><BadgeCheck className="h-4 w-4 text-primary" /> Inscription individuelle, informations traitées pour l&apos;organisation de la session.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <RegistrationForm />
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationSection;
