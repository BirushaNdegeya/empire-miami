import Image from "next/image";

const galleryImages = [
  "/images/gallery-01.png",
  "/images/gallery-02.jpeg",
  "/images/gallery-03.jpeg",
  "/images/gallery-04.jpeg",
  "/images/gallery-05.jpeg",
  "/images/gallery-06.jpeg",
];

export function Gallery() {
  return (
    <section
      className="bg-background text-foreground border-b border-border py-20"
      id="gallery"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Notre Galerie</h2>
        <p className="text-muted-foreground mt-4">
          Découvrez notre collection de moments et d’expériences à couper le
          souffle.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group border border-border"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                layout="responsive"
                width={600}
                height={400}
                className="object-cover group-hover:scale-110 transition-transform duration-300 w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-background font-medium">Contactez-Nous</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
