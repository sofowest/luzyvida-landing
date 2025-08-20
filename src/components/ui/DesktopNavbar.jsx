import { Link } from 'react-router-dom';

function DesktopNavbar() {
  return (
    <nav className="flex mx-10 justify-between items-center h-full text-white text-xl font-light">
      <section className="flex items-center space-x-8">
        <Link to="/"><img src="/imgs/isologo-white.svg" alt="Isologo de Luz y Vida" className="w-16 h-16" /></Link>
        <h1 className='text-white font-bold font-(family-name:--font-rubik)'>LUZ Y VIDA</h1>
      </section>
      <div className="flex space-x-20">
        <Link to="/" className="hover:text-[var(--secondary-color)]">Inicio</Link>
        <Link to="/servicios" className="hover:text-[var(--secondary-color)]">Servicios</Link>
        <Link to="/contacto" className="hover:text-[var(--secondary-color)]">Nuestro Equipo</Link>
        <Link to="/contacto" className="hover:text-[var(--secondary-color)]">Estadías</Link>
        <Link to="/faq" className="hover:text-[var(--secondary-color)]">FAQ</Link>
      </div>
    </nav>
  );
}

export default DesktopNavbar;