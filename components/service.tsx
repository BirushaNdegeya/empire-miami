import {
  FileText,
  AppWindow,
  PrinterCheck,
  Target,
  Wand,
  LaptopMinimal,
} from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon?: React.JSX.Element;
}

const services: Service[] = [
  {
    id: 1,
    title: "Impression sur tout support",
    description:
      "Impression grand format sur bâches, banderoles, et autres supports publicitaires.",
    icon: <PrinterCheck color="#f97316" size={50} />,
  },
  {
    id: 2,
    title: "Personnalisation de produits",
    description:
      "Impression sur T-shirts, polos (Lacoste) et autres produits sublimés.",
    icon: <Target color="#f97316" size={50} />,
  },
  {
    id: 3,
    title: "Conceptions graphiques",
    description:
      "Réalisées en interne pour garantir des designs uniques et de haute qualité.",
    icon: <Wand color="#f97316" size={50} />,
  },
  {
    id: 4,
    title: "Développement numérique",
    description: "Développement de sites web, applications mobiles et desktop.",
    icon: <AppWindow color="#f97316" size={50} />,
  },
  {
    id: 5,
    title: "Installation de systèmes",
    description:
      "Installation et configuration de machines avec systèmes d'exploitation.",
    icon: <LaptopMinimal color="#f97316" size={50} />,
  },
  {
    id: 6,
    title: "Impression de documents",
    description:
      "Photos passeport, cartes de service, invitations, stickers, autocollants, etc.",
    icon: <FileText color="#f97316" size={50} />,
  },
];

export function Services() {
  return (
    <section
      className="bg-background text-foreground border-b border-border py-20"
      id="services"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Nos Compétences</h2>
        <p className="text-muted-foreground mt-4">
          Chez Empire de Miami, nous excellons dans la fourniture de solutions
          de conception centrées sur l'utilisateur et engageantes. Voici un
          aperçu de nos compétences clés :
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-background text-foreground p-8 shadow-lg rounded-lg hover:shadow-2xl transition border border-border cursor-pointer"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
