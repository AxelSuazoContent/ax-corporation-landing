



export default function Home() {
  
  return (
    <main className="bg-axbg text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-axdark">
        <h1 className="text-2xl font-bold text-axblue">AX CORPORATION</h1>
        <ul className="flex gap-6">
          <li><a href="#services" className="hover:text-axneon">Servicios</a></li>
          <li><a href="#clients" className="hover:text-axneon">Clientes</a></li>
          <li><a href="#contact" className="hover:text-axneon">Contacto</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32">
        <h2 className="text-5xl font-extrabold text-axblue">
          Innovación Tecnológica para tu Futuro
        </h2>
        <p className="mt-6 text-lg max-w-2xl">
          En <span className="text-axturquoise font-semibold">AX Corporation</span> 
          desarrollamos soluciones digitales modernas para empresas que buscan crecer.
        </p>
        <button className="mt-8 px-6 py-3 bg-axblue hover:bg-axturquoise rounded-xl shadow-lg">
          Contáctanos
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-axdark text-center py-6">
        <p>© 2025 AX Corporation - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}
