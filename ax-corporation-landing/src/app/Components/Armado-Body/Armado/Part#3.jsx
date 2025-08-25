// src/components/AboutUs.jsx
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="nosotros" className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <div className="flex justify-center">
          <Image
            src="/Shared workspace.gif" // coloca tu imagen aquí en public/
            alt="Equipo trabajando"
            width={450}
            height={450}
            className="  rounded-md"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-6xl font-bold text-gray-900 leading-snug">
            <span className="block border-b-4 border-[#00C4B4] w-24 mb-4"></span>
            TODO <br /> SOBRE <br /> NOSOTROS
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            En <b>AX Corporation</b> creemos que cada idea merece tener presencia en el mundo digital.
            Nos especializamos en el desarrollo de sitios web modernos, funcionales y escalables,
            diseñados para adaptarse a las necesidades de empresas, emprendedores y proyectos en crecimiento. 
            Nuestro equipo combina tecnología, diseño y estrategia para ofrecer soluciones digitales completas:
            desde páginas web corporativas y tiendas en línea, hasta plataformas personalizadas y servicios de optimización.
          </p>
        </div>
      </div>

      {/* Métricas */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-gray-900">5+</h3>
          <p className="text-gray-500 mt-2">Años de experiencia</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-gray-900">200+</h3>
          <p className="text-gray-500 mt-2">Clientes Satisfechos</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-gray-900">170+</h3>
          <p className="text-gray-500 mt-2">Proyectos Realizados</p>
        </div>
      </div>
    </section>
  );
}
