export default function HeroSection() {
  return (
    <section className="w-full bg-white pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Contenedor unido */}
        <div className="grid md:grid-cols-12 gap-0 rounded-2xl overflow-hidden">
          
          {/* Izquierda con fondo color + imagen topo */}
          <div
            className="md:col-span-5 p-8 flex flex-col justify-center space-y-6 
                       bg-[#00C4B4] border border-gray-200 relative
                       bg-[url('/topografia.png')] bg-cover bg-center bg-no-repeat"
          >
            {/* Capa de color semitransparente por encima para mantener contraste */}
            <div className="absolute inset-0 "></div>

            {/* Contenido encima del overlay */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Innovar para <br /> crecer cada día
              </h1>
              <p className="text-lg text-gray-700">
                Desarrollando habilidades para dar forma a un futuro mejor
              </p>
              <button className="self-start bg-white border border-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
                Contáctanos
              </button>
            </div>
          </div>

          {/* Derecha (más ancha) */}
          <div className="md:col-span-7 bg-[#f3c82d] flex items-center justify-center">
            <img
              src="/Website designer-amico.svg"
              alt="Ilustración innovar"
              className="w-full h-full max-h-[480px] object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
