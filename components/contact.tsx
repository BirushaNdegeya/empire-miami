"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Mail, Loader2, MapPin, Phone, AtSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: [process.env.NEXT_PUBLIC_EMAIL_TO],
          cc: [""],
          bcc: [process.env.NEXT_PUBLIC_EMAIL_BCC],
          message: {
            subject: `Contact Form Submission`,
            text: "User Message",
            html: `
               <html>
                  <head></head>
                  <body>
                     <p>Hello,</p>
                     <p><b>Full Name:</b> ${formData.name}</p>
                     <p><b>Email:</b> ${formData.email}</p>
                     <p><b>Message:</b> ${formData.message}</p>
                     <br>
                     <p>Thank you & Regards,<br><b>Team</b></p>
                  </body>
               </html>`,
          },
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        toast({
          title: "Erreur lors de l'envoi de l'email.",
          description: result.message,
          variant: "destructive",
        });
        return;
      }
      toast({
        title: "Message envoyé avec succès.",
        description: result.message,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Erreur lors de l'envoi de l'email.",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className="bg-background text-foreground border border-border py-20"
      id="contact"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Contactez-Nous
        </h2>
        <p className="text-secondary-foreground mt-4 text-center">
          Nous serions ravis de vous entendre. N'hésitez pas à nous contacter
          pour toute question ou demande.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <div className="bg-background text-foreground p-8 shadow-lg border border-border rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  type="text"
                  placeholder="Nom"
                  onChange={handleChange}
                  required={true}
                  value={formData.name}
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required={true}
                  value={formData.email}
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Tapez votre message ici."
                  onChange={handleChange}
                  required={true}
                  value={formData.message}
                />
              </div>

              <div>
                <Button disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin mr-2" /> Veuillez
                      patienter...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2" /> Envoyez un Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Informations de l'entreprise */}
          <div className="bg-background text-foreground p-8 shadow-lg border border-border rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">
              Informations de Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-3 text-primary" />
                <p>Av. du Musee - 435 - HIMBI - GOMA - Nord-Kivu - DRC</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-primary" />
                <p>+243 971 760 538</p>
              </div>
              <div className="flex items-center">
                <AtSign className="mr-3 text-primary" />
                <p>williammasivi@gmail.com</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-primary" />
                <p>williammasivi@gmail.com</p>
              </div>
              <div className="mt-4">
                <p>
                  <b>Horaires :</b> Lundi - Samedi, 8h - 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
