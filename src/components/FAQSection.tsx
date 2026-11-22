import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Quel est le tarif de la formation ?",
        answer: "La participation est de 20 DH pour les membres du Club Robotech et de 30 DH pour les non-membres.",
    },
    {
        question: "Quand et où aura lieu la formation ?",
        answer: "La formation aura lieu le samedi 28 novembre 2026 à 13 h, en salle F14.",
    },
    {
        question: "Dois-je déjà connaître CATIA ?",
        answer: "Non. La session est pensée pour vous donner des bases solides et vous permettre de prendre en main l'environnement de conception.",
    },
    {
        question: "Dois-je ramener mon ordinateur ?",
        answer: "Oui, il est fortement recommandé de ramener votre propre ordinateur avec CATIA V5 déjà installé afin de pratiquer en temps réel.",
    },
];

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                        Questions <span className="text-gradient-secondary">Fréquentes</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                        Tout ce que vous devez savoir avant de vous inscrire à la formation CATIA V5.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="surface-panel mx-auto max-w-3xl rounded-2xl p-4 shadow-sm sm:p-6"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;
