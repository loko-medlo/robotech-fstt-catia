import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Define the validation schema using Zod
const formSchema = z.object({
    lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
    firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères."),
    email: z.string().email("Adresse email invalide."),
    phone: z.string().min(10, "Le numéro doit contenir au moins 10 caractères."),
    studyLevel: z.string().min(1, "Veuillez sélectionner un niveau d'étude."),
    studyField: z.string().min(2, "Ce champ est obligatoire."),
    status: z.enum(["membre", "non_membre"], {
        required_error: "Veuillez sélectionner votre statut.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

// The Google Apps Script Web App URL provided by the user
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxtVufD5e367XFJx90jzami52AF1tpHDrDptEOHTJJkjGwTWxxXJ4vg5ghjziQ_GlBu/exec";

export function RegistrationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    // Initialize the form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            lastName: "",
            firstName: "",
            email: "",
            phone: "",
            studyLevel: "",
            studyField: "",
            status: "non_membre",
        },
    });

    // Handle form submission
    const onSubmit = async (values: FormValues) => {
        setIsSubmitting(true);
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 20000);
        try {
            // Prepend a single quote to force Google Sheets to treat the phone number as text
            const submissionValues = {
                ...values,
                phone: `'${values.phone}`
            };

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                // Using "text/plain" bypasses strict CORS preflight checks for Google Apps Script
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(submissionValues),
                signal: controller.signal,
            });

            if (!response.ok) throw new Error(`Réponse HTTP ${response.status}`);
            const result = await response.json();

            if (result.result === "success") {
                toast({
                    title: "Inscription enregistrée !",
                    description: "Votre place pour la formation CATIA V5 est réservée.",
                });
                form.reset();
            } else {
                throw new Error(result.message || "Erreur inconnue");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi :", error);
            toast({
                variant: "destructive",
                title: "Erreur d'envoi",
                description: error instanceof DOMException && error.name === "AbortError" ? "Le délai d'envoi est dépassé. Veuillez réessayer." : "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.",
            });
        } finally {
            window.clearTimeout(timeout);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="surface-panel mx-auto max-w-2xl rounded-3xl p-5 shadow-2xl sm:p-7 md:p-9">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Votre nom" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Votre prénom" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="votre.email@exemple.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Téléphone (WhatsApp)</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="+212 6..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                        <FormField
                            control={form.control}
                            name="studyLevel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Niveau d'étude</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="h-12 rounded-xl bg-background/70 px-4">
                                                <SelectValue placeholder="Sélectionnez un niveau" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Bac+1">Bac+1</SelectItem>
                                            <SelectItem value="Bac+2">Bac+2</SelectItem>
                                            <SelectItem value="Bac+3">Bac+3</SelectItem>
                                            <SelectItem value="Bac+4">Bac+4</SelectItem>
                                            <SelectItem value="Bac+5">Bac+5</SelectItem>
                                            <SelectItem value="Autre">Autre</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="studyField"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Filière</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex : Génie Mécanique, Industriel..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Statut</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        className="grid gap-4"
                                    >
                                        <FormItem className="relative flex flex-col items-start justify-between gap-3 rounded-2xl border border-border bg-card/50 p-4 transition-all hover:border-primary/40 hover:bg-muted sm:flex-row sm:items-center">
                                            <div className="flex items-center space-x-3">
                                                <FormControl>
                                                    <RadioGroupItem value="membre" className="border-muted-foreground" />
                                                </FormControl>
                                                <FormLabel className="font-bold cursor-pointer text-sm sm:text-base">
                                                    Membre du Club Robotech
                                                </FormLabel>
                                            </div>
                                            <div className="flex items-center self-end sm:self-auto">
                                                <span className="px-3 py-1 bg-muted-foreground/10 text-muted-foreground text-[10px] font-black uppercase tracking-widest rounded-lg border border-muted-foreground/20">
                                                    20 DH
                                                </span>
                                            </div>
                                        </FormItem>

                                        <FormItem className="relative flex flex-col items-start justify-between gap-3 rounded-2xl border border-secondary/30 bg-secondary/10 p-4 transition-all hover:border-secondary/60 hover:bg-secondary/15 sm:flex-row sm:items-center">
                                            <div className="flex items-center space-x-3">
                                                <FormControl>
                                                    <RadioGroupItem value="non_membre" className="text-secondary border-secondary/50" />
                                                </FormControl>
                                                <FormLabel className="font-bold cursor-pointer text-sm sm:text-base text-white">
                                                    Non-membre du Club Robotech
                                                </FormLabel>
                                            </div>
                                            <div className="flex items-center self-end sm:self-auto">
                                                <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest rounded-lg glow-primary">
                                                    30 DH
                                                </span>
                                            </div>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="space-y-4 pt-4">
                        <p className="text-center text-sm text-muted-foreground animate-pulse">
                            ⚠️ Veuillez vérifier vos informations avant de vous inscrire.
                        </p>
                        <Button type="submit" className="h-14 w-full rounded-xl text-base font-bold glow-primary" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Envoi en cours...
                                </>
                            ) : (
                                "S'inscrire à la formation"
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
