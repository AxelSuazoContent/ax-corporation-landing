"use client";
import { motion } from "framer-motion";

export default function HeroSection() {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -64; // Altura de la navbar si es fija
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden">
          
          {/* Izquierda */}
          <div
            className="md:col-span-5 p-8 flex flex-col justify-center space-y-6 
                       bg-[#00C4B4] border border-gray-200 relative
                       bg-[url('/topografia.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Innovar para <br /> crecer cada día
              </h1>
              <p className="text-lg text-gray-700">
                Desarrollando habilidades para dar forma a un futuro mejor
              </p>
              <button
                onClick={() => handleScroll("contacto")}
                className="self-start bg-white border border-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
              >
                Contáctanos
              </button>
            </div>
          </div>

          {/* Derecha con animación */}
          <div className="md:col-span-7 bg-[#f3c82d] flex items-center justify-center">
            <motion.img
              src="/Website designer-amico.svg"
              alt="Ilustración innovar"
              className="w-full h-full max-h-[480px] object-contain"
              loading="eager"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
