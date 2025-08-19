import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='flex mx-3 justify-between items-center h-full pt-3'>
        <ul className='w-[100%] list-none flex justify-end items-center'>
            <li>
                <Link to="/" preventScrollReset className='h-[100%] py-0 px-[30px] no-underline'>Inicio</Link>
            </li>
            <li>
                <Link to="/">Servicios</Link>
            </li>
            <li>
                <Link to="/">Nuestro Equipo</Link>
            </li>
            <li>
                <Link to="/">Estadías</Link>
            </li>
            <li>
                <Link to="/">FAQ</Link>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar

{/* <img src="/imgs/isologo.svg" alt="Isologo de Luz y Vida" className="w-15" />
<h1 className='text-[var(--primary-color)] font-bold'>LUZ Y VIDA</h1>
<img src="/imgs/menu.svg" alt="Icono de Menu" className='w-15'/> */}