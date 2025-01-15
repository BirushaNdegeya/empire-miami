"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export function Contact() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send the data to an API or email service).
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
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
              <Input type="text" placeholder="Nom" />
            </div>

            <div>
              <Input type="email" placeholder="Email" />
            </div>

            <div>
              <Textarea placeholder="Type your message here." />
            </div>

            <div>
              <Button>Envoyez un Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
