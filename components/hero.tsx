import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative bg-background text-foreground border-b border-border">
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Découvrez les solutions modernes d'impression
        </h1>

        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          À Empire de Miami, nous combinons technologie de pointe et expertise
          pour offrir des services d'impression et numériques de qualité
          supérieure à Goma. Explorez notre monde où chaque projet devient une
          œuvre d'art.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <Button size="lg">
            <Link href="#services">Explorez</Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="#contact">Contactez</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
