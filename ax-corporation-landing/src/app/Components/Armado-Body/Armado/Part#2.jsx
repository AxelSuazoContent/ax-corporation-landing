// src/components/ServicesSection.jsx
"use client";
 import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Adobe Illustrator",
    studio: "AX Studio",
    description:
      "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    price: "$29.90",
    oldPrice: "$39.90",
    rating: "★ ★ ★ ★ ★ (2.1k)",
    badge: "Best Seller",
    discount: "25% OFF",
  },
  {
    id: 2,
    title: "Autocad",
    studio: "AX Studio",
    description:
      "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    price: "$34.50",
    oldPrice: "$45.00",
    rating: "★ ★ ★ ★ ☆ (1.5k)",
    badge: "Best Seller",
    discount: "20% OFF",
  },
  {
    id: 3,
    title: "Figma Studio",
    studio: "AX Studio",
    description: "4/10 Videos Completed",
    price: "$18.75",
    oldPrice: "$24.90",
    rating: "★ ★ ★ ☆ ☆ (480)", // menos rating
  },
  {
    id: 4,
    title: "Adobe Illustrator",
    studio: "AX Studio",
    description:
      "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    price: "$31.20",
    oldPrice: "$42.00",
    rating: "★ ★ ★ ★ ☆ (1.8k)",
    badge: "Best Seller",
    discount: "15% OFF",
  },
  {
    id: 5,
    title: "Autocad",
    studio: "AX Studio",
    description:
      "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
    price: "$27.40",
    oldPrice: "$34.90",
    rating: "★ ★ ★ ★ ☆ (1.1k)",
    
    discount: "20% OFF",
  },
  {
    id: 6,
    title: "Figma Studio",
    studio: "AX Studio",
    description: "4/10 Videos Completed",
    price: "$16.90",
    oldPrice: "$21.50",
    badge: "Best Seller",
    rating: "★ ★ ☆ ☆ ☆ (230)", // rating más bajo
  },
];


export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-16 px-6" id="servicios">
      <div className="max-w-7xl mx-auto text-Left">
        {/* Título */}
        <h2 className="text-6xl font-bold text-gray-900 mb-2">
          Nuestros Servicios
        </h2>
        <p className="text-gray-600 mb-12">
          Un poco de lo nuestro
        </p>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
  key={service.id}
  className="relative bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300"
  whileHover={{ scale: 1.05 }}
>
              {/* Imagen/logo */}
            

        <div className="flex justify-center mb-4">
          <Image
            src="/AX-Logo-FondoBlanco.png"   // 👉 coloca tu ruta aquí (por ejemplo en /public/images/logo-ax.png)
            alt="AX Corporation Logo"
            width={150}   // ajusta el tamaño
            height={80}
            className="object-contain"
          />
        </div>


               {/* Badge */}
  {service.badge && (
    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
      {service.badge} - {service.discount}
    </span>
  )}

              {/* Info */}
              <h3 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-blue-600">{service.studio}</p>
              <p className="text-sm text-gray-600 mt-2">
                {service.description}
              </p>

              {/* Rating */}
              <p className="text-yellow-500 text-sm mt-2">{service.rating}</p>

              {/* Precio */}
              <div className="mt-4">
                <span className="text-xl font-bold text-gray-900">
                  {service.price}
                </span>
                <span className="text-sm text-gray-400 line-through ml-2">
                  {service.oldPrice}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
