import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex mx-3 justify-between items-center h-full pt-3">
      <div className="flex items-center justify-between w-full">
        <Link to="/"><img src="/imgs/isologo.svg" alt="Isologo de Luz y Vida" className="w-14 h-14" /></Link>
        <h1 className='text-[var(--primary-color)] font-bold'>LUZ Y VIDA</h1>
        <button onClick={toggleMenu} className="w-14 h-14">
          {isOpen ? (
            <img src="/imgs/close.svg" alt="Cerrar menú" className="w-full h-full bg-none" />
          ) : (
            <img src="/imgs/menu.svg" alt="Abrir menú" className="w-full h-full bg-none" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full shadow-lg p-4 bg-white">
            <div className="flex flex-col mt-4 space-y-4 text-[var(--primary-color)] items-center bg-white">
                <Link to="/" onClick={toggleMenu} className="w-full text-center hover:text-white hover:bg-[var(--primary-color)]">Inicio</Link>
                <Link to="/servicios" onClick={toggleMenu} className="w-full text-center hover:text-white hover:bg-[var(--primary-color)]">Servicios</Link>
                <Link to="/contacto" onClick={toggleMenu} className="w-full text-center hover:text-white hover:bg-[var(--primary-color)]">Nuestro Equipo</Link>
                <Link to="/contacto" onClick={toggleMenu} className="w-full text-center hover:text-white hover:bg-[var(--primary-color)]">Estadías</Link>
                <Link to="/faq" onClick={toggleMenu} className="w-full text-center hover:text-white hover:bg-[var(--primary-color)]">FAQ</Link>
            </div>
        </div>
      )}
    </nav>
  );
}

export default MobileNavbar;