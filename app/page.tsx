import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ModeToggle } from "@/components/mode-toggle";
import { Services } from "@/components/service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
