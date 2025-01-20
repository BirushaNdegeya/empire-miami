"use client";
import { ReactNode } from "react";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Impression sur tout support",
    description:
      "Impression grand format sur bâches, banderoles, et autres supports publicitaires.",
    icon: (
      <Image
        src={require("../public/icons/all-supports.jpeg")}
        alt="All supports icon"
        // className="w-full"
        // width={380}
        // height={200}
      />
    ),
  },
  {
    id: 2,
    title: "Personnalisation de produits",
    description:
      "Impression sur T-shirts, polos (Lacoste) et autres produits sublimés.",
    icon: (
      <Image
        src={require("../public/icons/target.jpeg")}
        alt="Personalization icon"
        // width={200}
        // height={200}
      />
    ),
  },
  {
    id: 3,
    title: "Conceptions graphiques",
    description:
      "Réalisées en interne pour garantir des designs uniques et de haute qualité.",
    icon: (
      <Image
        src={require("../public/icons/graphic.jpeg")}
        alt="Graphic design icon"
        // width={200}
        // height={200}
      />
    ),
  },
  {
    id: 4,
    title: "Développement numérique",
    description: "Développement de sites web, applications mobiles et desktop.",
    icon: (
      <Image
        src={require("../public/icons/development.jpeg")}
        alt="Development icon"
        // width={200}
        // height={200}
      />
    ),
  },
  {
    id: 5,
    title: "Installation de systèmes",
    description:
      "Installation et configuration de machines avec systèmes d'exploitation.",
    icon: (
      <Image
        src={require("../public/icons/computer.jpeg")}
        alt="System installation icon"
        // width={200}
        // height={200}
      />
    ),
  },
  {
    id: 6,
    title: "Impression de documents",
    description:
      "Photos passeport, cartes de service, invitations, stickers, autocollants, etc.",
    icon: (
      <Image
        src={require("../public/icons/documents.jpeg")}
        alt="Document printing icon"
        // className="w-[200px] h-[200px] object-cover"
        // width={200}
        // height={200}
      />
    ),
  },
];

export function Services() {
  return (
    <section
      className="bg-background text-foreground border-b border-border py-20"
      id="services"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Nos Services</h2>
        <p className="text-muted-foreground mt-4">
          Chez Empire de Miami, nous excellons dans la fourniture de solutions
          de conception centrées sur l'utilisateur et engageantes. Voici un
          aperçu de nos compétences clés :
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ id, icon, title, description }: Service) => (
            <div key={id} className="flex justify-center">
              <div className="bg-background text-foreground shadow-lg rounded-lg hover:shadow-2xl transition border border-border cursor-pointer overflow-hidden">
                <div className="flex justify-center mb-6">{icon}</div>
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-muted-foreground mt-4">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
