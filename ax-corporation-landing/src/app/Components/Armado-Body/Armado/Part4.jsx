"use client";

import { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
  nombre: "",
  email: "", // 🔹 Cambiado para coincidir con Google Script
  empresa: "",
  cargo: "",
  mensaje: ""
});
  const [loading, setLoading] = useState(false);

  // ⚠️ IMPORTANTE: Reemplaza esta URL con la URL de tu Apps Script desplegado
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzeb7YpLI3j7EpKobwGcrpYKPMsHs6M4B_iyhcH28z34yti3FT_-bCuma2m1SM7hBsN/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Campo requerido",
        text: "Por favor, ingresa tu nombre completo.",
        confirmButtonColor: "#007AFF",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' // Importante para Google Apps Script
      });

      // Con mode: 'no-cors', no podemos leer la respuesta
      // Asumimos que funcionó si no hay error
      

      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "¡Enviado!",
        text: "Tu mensaje fue enviado correctamente. Te contactaremos pronto.",
        confirmButtonColor: "#007AFF",
      });
      
      // Limpiar formulario
      setFormData({ 
        nombre: "", 
        email: "", 
        empresa: "", 
        mensaje: "", 
        cargo: "" 
      });

    } catch (error) {
      setLoading(false);
      

      Swal.fire({
        icon: "error",
        title: "Error de conexión",
        text: "Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.",
        confirmButtonColor: "#007AFF",
      });
    }
  };

  return (
    <section id="contacto" className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        
        {/* Formulario */}
        <div className="w-full md:w-1/2">
  <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-snug mb-8">
    <span className="block border-b-4 border-[#00C4B4] w-24 mb-4"></span>
    CONTÁCTANOS
  </h2>

  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Nombre */}
    <div>
      <label className="block text-black mb-1 text-sm md:text-base">
        Nombre completo <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00C4B4]"
        required
        placeholder="Ingresa tu nombre completo"
      />
    </div>

    {/* Correo */}
    <div>
      <label className="block text-black mb-1 text-sm md:text-base">
        Correo electrónico <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00C4B4]"
        required
        placeholder="ejemplo@correo.com"
      />
    </div>

    {/* Empresa */}
    <div>
      <label className="block text-black mb-1 text-sm md:text-base">
        Empresa / Organización
      </label>
      <input
        type="text"
        name="empresa"
        value={formData.empresa}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00C4B4]"
        placeholder="Nombre de tu empresa"
      />
    </div>

    {/* Cargo */}
    <div>
      <label className="block text-black mb-1 text-sm md:text-base">
        Cargo / Puesto
      </label>
      <input
        type="text"
        name="cargo"
        value={formData.cargo}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00C4B4]"
        placeholder="Tu cargo o posición"
      />
    </div>

    {/* Mensaje */}
    <div>
      <label className="block text-black mb-1 text-sm md:text-base">
        Mensaje
      </label>
      <textarea
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        rows="4"
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#00C4B4] resize-vertical"
        placeholder="Cuéntanos en qué podemos ayudarte..."
      ></textarea>
    </div>

    


            <button
              type="submit"
              className={`w-full bg-[#007AFF] text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200 flex justify-center items-center ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                "ENVIAR MENSAJE"
              )}
            </button>
          </form>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/Contact us.gif"
            alt="Contacto"
            width={350}
            height={350}
            className="rounded-md w-full max-w-xs md:max-w-md gif-pause-after-5s"
          />
        </div>
      </div>

      {/* Sección promocional AX */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* Contenido de texto */}
          <div className="flex-1 text-white z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Únete a AX ahora y obtén un 35% de descuento
            </h3>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-md">
              Creamos sitios web y aplicaciones que destacan en cualquier dispositivo
            </p>
            <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 shadow-lg  select-none inline-block">
  ÚNETE A AX CORPORATION →
</div>

          </div>

          {/* Imagen/Ilustración */}
          <div className="flex-shrink-0 mt-8 md:mt-0 md:ml-8">
            <div className="relative">
              {/* Mockup de dispositivos */}
              <div className="bg-white rounded-xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 w-64 h-40">
                  {/* Simulación de interfaz web */}
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-blue-100 rounded w-full"></div>
                    <div className="h-4 bg-blue-100 rounded w-5/6"></div>
                  </div>
                  
                  {/* Figura profesional simplificada */}
                  <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Patrón de fondo decorativo */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}