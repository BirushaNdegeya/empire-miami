"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Mail, Loader2 } from "lucide-react";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send the data to an API or email service).

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
            subject: `YOUR SUBJECT`,
            text: "YOUR TEXT",
            html: `
               <html>
                  <head></head>
                  <body>
                     <p>Hello user</p>
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
        });
        return;
      }
      toast({
        title: "Message envoyé avec succès.",
        description: result.message,
      });
      // alert(result.message); // You can also add route instead of alert  route.push() add you own page.
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Erreur lors de l'envoi de l'email.",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }

    // console.log("Form submitted:", formData);
  };

  return (
    <section
      className="bg-background text-foreground border border-border py-20"
      id="contact"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Contactez-Nous
        </h2>
        <p className="text-gray-600 mt-4 text-center">
          Nous serions ravis de vous entendre. N'hésitez pas à nous contacter
          pour toute question ou demande.
        </p>

        <div className="mt-12 max-w-3xl mx-auto bg-white p-8 shadow-lg border border-border rounded-lg">
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
                placeholder="Type your message here."
                onChange={handleChange}
                required={true}
                value={formData.message}
              />
            </div>

            <div>
              <Button disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" /> Veuillez patienter...{" "}
                  </>
                ) : (
                  <>
                    <Mail /> Envoyez un Message{" "}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
