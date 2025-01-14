// src/components/Gallery.tsx
import Image from "next/image";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export function Gallery() {
  return (
    <section
      className="bg-background text-foreground border-b border-border py-20"
      id="gallery"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Gallery
        </h2>
        <p className="text-gray-600 mt-4">
          Explore our collection of breathtaking moments and experiences.
        </p>

        {/* Image Grid */}
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
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">View More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
