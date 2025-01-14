// src/components/Services.tsx
import { FC } from "react";
import React from "react";
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.JSX.Element;
}

const services: Service[] = [
  {
    id: 1,
    title: "Luxury Cars",
    description:
      "Experience the finest luxury cars to make your journey extraordinary.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10l9-9 9 9M4 10v11h16V10M13 21h-2"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Private Yachts",
    description:
      "Sail away in style with our exclusive private yacht services.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M4 21h16v-4H4z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Exclusive Events",
    description:
      "Create unforgettable memories with our bespoke event services.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export const Services: FC = () => {
  return (
    <section
      className="bg-background text-foreground border-b border-border py-20"
      id="services"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Premium Services
        </h2>
        <p className="text-gray-600 mt-4">
          Discover the range of luxurious services tailored to meet your needs.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-background text-foreground p-8 shadow-lg rounded-lg hover:shadow-2xl transition border border-border cursor-pointer"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
