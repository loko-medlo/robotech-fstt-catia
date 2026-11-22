import { motion } from "framer-motion";
import { Users, Camera, Star, CheckCircle2 } from "lucide-react";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";

const SessionStatsSection = () => {
    const stats = [
        { icon: Users, label: "Participants inscrits", value: "+100", color: "text-primary" },
        { icon: CheckCircle2, label: "Séance 1 complétée", value: "100%", color: "text-secondary" },
        { icon: Star, label: "Niveau atteint", value: "Part Design", color: "text-amber-400" },
    ];

    const images = [img1, img2, img3, img4];

    return (
        <section id="edition-2025" className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
                    {/* Colonne Texte & Stats */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
                                Une édition 2025 qui a fait <span className="text-gradient-primary">référence</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                L&apos;année dernière, plus de <b>100 étudiants</b> se sont réunis pour découvrir CATIA V5 et maîtriser les bases du <b>Part Design</b>. Cette dynamique nous pousse à proposer une nouvelle session encore plus structurée.
                            </p>

                            <div className="grid grid-cols-1 gap-3 pt-5 sm:grid-cols-3 sm:gap-4 sm:pt-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="rounded-2xl border border-border bg-card p-4 text-center transition-transform hover:scale-105 sm:p-5"
                                    >
                                        <stat.icon className={`h-6 w-6 mx-auto mb-3 ${stat.color}`} />
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:mt-8 sm:p-6">
                                <p className="text-sm font-medium text-primary flex items-center gap-2">
                                    <Camera className="h-4 w-4" />
                                    Archives 2025 : retour en images sur une séance mémorable.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Colonne Images Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative rounded-2xl overflow-hidden border border-border group ${index === 1 || index === 2 ? "translate-y-4" : ""
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Formation CATIA 2025 - Photo ${index + 1}`}
                                        className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-48 md:h-64"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Décoration d'arrière-plan */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -z-10" />
        </section>
    );
};

export default SessionStatsSection;
