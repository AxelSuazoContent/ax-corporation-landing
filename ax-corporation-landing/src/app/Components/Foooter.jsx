// src/components/Footer.jsx
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 font-['Merriweather_Sans']">
      {/* Desktop / Tablet */}
      <div className="hidden md:grid max-w-7xl mx-auto py-6 px-6 grid-cols-12 gap-x-12 items-start">
        {/* Logo (3/12) */}
        <div className="col-span-3 w-fit">
          <Image
            src="/AX-logo-SinFodno.png"
            alt="Logo AX"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Servicios (5/12) */}
        <div className="col-span-6 grid grid-cols-2 gap-x-20 gap-y-1 text-sm">
          <div className="space-y-2">
            <p className="hover:text-white">Programación web</p>
            <p className="hover:text-white">Programación móvil</p>
            <p className="hover:text-white">Principiante de Java</p>
            <p className="hover:text-white">Principiante en PHP</p>
          </div>
          <div className="space-y-2">
            <p className="hover:text-white">Adobe Illustrator</p>
            <p className="hover:text-white">Adobe Photoshop</p>
            <p className="hover:text-white">Design Logo</p>
            <p className="hover:text-white">Autocad</p>
          </div>
        </div>

        {/* Contacto (4/12) */}
        <div className="col-span-3 flex flex-col justify-between h-full justify-self-end items-end text-right text-sm">
          <div className="space-y-2">
            <p>AX_CORPORATION@gmail.com</p>
            <p>Solucionamos Tus Problemas</p>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <FaXTwitter className="w-6 h-6 cursor-pointer hover:text-white" />
            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-white" />
            <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Móvil */}
      <div className="md:hidden max-w-7xl mx-auto py-4 px-6 flex flex-col items-center space-y-4">
        <Image
          src="/AX-logo-SinFodno.png"
          alt="Logo AX"
          width={120}
          height={120}
          className="object-contain"
        />

        <div className="flex items-center space-x-4">
          <FaXTwitter className="w-6 h-6 cursor-pointer hover:text-white" />
          <FaInstagram className="w-6 h-6 cursor-pointer hover:text-white" />
          <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Copy */}
      <div className="border-t border-gray-700 mt-4 pt-3 text-left text-xs text-gray-500 px-6">
        Copyright © AX Corporation 2025. Todos los derechos reservados.
      </div>
    </footer>
  );

