"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Narvar() {
  const [open, setOpen] = useState(false);

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

      <div className="hidden md:flex text-gray-600 font-medium">
        Conectando el futuro
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-6 font-semibold text-gray-700">
        <a href="#contacto" className="hover:text-blue-600">Contáctanos</a>
        <a href="#soluciones" className="hover:text-blue-600">Soluciones</a>
        <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
      </div>

      {/* Botón hamburguesa */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú móvil */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex px-6 flex-col items-left space-y-4 py-4 font-semibold text-gray-700 md:hidden z-50">
          <a href="#contacto" className="hover:text-blue-600">Contáctanos</a>
          <a href="#soluciones" className="hover:text-blue-600">Soluciones</a>
          <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
        </div>
      )}
    </nav>
  );
}
