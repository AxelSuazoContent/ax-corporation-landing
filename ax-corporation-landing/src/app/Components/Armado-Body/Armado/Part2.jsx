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
      "Diseñamos ilustraciones profesionales, gráficas vectoriales y material visual de alta calidad para tu marca o proyecto, utilizando Adobe Illustrator.",
    price: "$250.00",
    oldPrice: "$300.00",
    rating: "★ ★ ★ ★ ★ (2.1k)",
    badge: "Más solicitado",
    discount: "15% OFF",
    image: "/527-adobe_logo.webp", // 👈 Pon aquí tu imagen de Illustrator
  },
  {
    id: 2,
    title: "Autocad",
    studio: "AX Studio",
    description:
      "Servicios de diseño técnico y modelado en 2D y 3D con AutoCAD. Creamos planos arquitectónicos, industriales y estructurales con precisión profesional.",
    price: "$400.00",
    oldPrice: "$480.00",
    rating: "★ ★ ★ ★ ☆ (1.5k)",
    badge: "Más solicitado",
    discount: "20% OFF",
    image: "/AutoCad_new_logo.svg.png", // 👈 Pon aquí tu imagen de AutoCAD
  },
  {
    id: 3,
    title: "Figma Studio",
    studio: "AX Studio",
    description:
      "Diseño de interfaces modernas y prototipos interactivos con Figma. Creamos experiencias digitales atractivas y funcionales para páginas web y apps.",
    price: "$350.00",
    oldPrice: "$420.00",
    rating: "★ ★ ★ ☆ ☆ (480)",
    image: "/figma_logo.webp", // 👈 Pon aquí tu imagen de Figma
  },
  {
    id: 4,
    title: "Programación web",
    studio: "AX Studio",
    description:
      "Desarrollamos páginas web modernas, responsivas y optimizadas. Desde sitios corporativos hasta aplicaciones web completas a la medida de tu negocio.",
    price: "$1500.00",
    oldPrice: "$1800.00",
    rating: "★ ★ ★ ★ ☆ (1.8k)",
    badge: "Más solicitado",
    discount: "15% OFF",
    image: "/Desarrolladores-web.png", // 👈 Pon aquí tu imagen de Programación Web
  },
  {
    id: 5,
    title: "Programación móvil",
    studio: "AX Studio",
    description:
      "Creamos aplicaciones móviles personalizadas para Android e iOS, optimizadas para rendimiento y experiencia de usuario.",
    price: "$1800.00",
    oldPrice: "$2100.00",
    rating: "★ ★ ★ ★ ☆ (1.1k)",
    discount: "15% OFF",
    image: "/movil1.png", // 👈 Pon aquí tu imagen de Programación Móvil
  },
  {
    id: 6,
    title: "Diseñar Logo",
    studio: "AX Studio",
    description:
      "Diseñamos logotipos únicos y memorables que reflejan la identidad y valores de tu marca, garantizando impacto visual y profesionalismo.",
    price: "$200.00",
    oldPrice: "$250.00",
    badge: "Más solicitado",
    discount: "20% OFF",
    rating: "★ ★ ★ ☆ (230)",
    image: "/AX-logo-SinFodno.png", // 👈 Pon aquí tu imagen de Diseño de Logo
  },
];

export default function ServicesSection() {
  return (
    <section  className=" w-full bg-white py-16 px-6" id="Servicios">
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
              {/* Imagen del servicio */}
              <div className="flex justify-center items-center mb-4 h-32">
                <Image
                  src={service.image}
                  alt={`${service.title} - ${service.studio}`}
                  width={service.id === 2 ? 200 : service.id === 6 ? 120 : 150}
                  height={service.id === 2 ? 100 : service.id === 6 ? 120 : 80}
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