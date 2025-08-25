"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Función para scroll suave
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Cierra menú móvil si está abierto
  };

  return (
    <nav className="w-full bg-white text-gray-800 shadow-md px-6 py-3 flex items-center h-16 justify-between fixed top-0 left-0 z-50">
      {/* Logo + Nombre */}
      <div className="flex items-center gap-x-2 ml-4">
        <Image 
          src="/AX-logo-SinFodno.png"   
          alt="Logo AX"
          width={62}
          height={62}
        />
        <span className="font-bold text-gray-800 text-lg">
          AX CORPORATION
        </span>
      </div>

      {/* Lema */}
      <div className="hidden md:flex text-gray-600 font-medium">
        Conectando el futuro
      </div>

      {/* Links de escritorio */}
      <div className="hidden md:flex space-x-6 font-semibold text-gray-700">
        <button onClick={() => handleScroll("Servicios")} className="hover:text-blue-600">Servicios</button>
        <button onClick={() => handleScroll("nosotros")} className="hover:text-blue-600">Nosotros</button>
        <button onClick={() => handleScroll("contacto")} className="hover:text-blue-600">Contáctanos</button>
      </div>

      {/* Botón hamburguesa */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú móvil */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex px-6 flex-col items-left space-y-4 py-4 font-semibold text-gray-700 md:hidden z-50">
          <button onClick={() => handleScroll("Servicios")} className="hover:text-blue-600">Servicios</button>
          <button onClick={() => handleScroll("nosotros")} className="hover:text-blue-600">Nosotros</button>
          <button onClick={() => handleScroll("contacto")} className="hover:text-blue-600">Contáctanos</button>
        </div>
      )}
    </nav>
  );
}
