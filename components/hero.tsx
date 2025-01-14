import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative bg-background text-foreground border-b border-border">
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center py-20">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Discover Luxury at <span className="text-primary">Empire Miami</span>
        </h1>
        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-secondary-foreground">
          Unparalleled services and unforgettable experiences tailored to your
          desires.
        </p>
        {/* Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <Button>
            <Link href="#services">Explore Services</Link>
          </Button>
          <Button variant="outline">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
