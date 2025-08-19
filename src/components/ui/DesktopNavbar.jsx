import React from 'react';
import { Link } from 'react-router-dom';

function DesktopNavbar() {
  return (
    <nav className="flex mx-3 justify-between items-center h-full pt-3 text-[var(--primary-color)]">
      <Link to="/"><img src="/imgs/isologo.svg" alt="Isologo de Luz y Vida" className="w-14 h-14" /></Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-gray-300">Inicio</Link>
        <Link to="/servicios" className="hover:text-gray-300">Servicios</Link>
        <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
      </div>
    </nav>
  );
}

export default DesktopNavbar;