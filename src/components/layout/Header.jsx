// import { useLocation } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth.js';
import DesktopNavbar from '../ui/DesktopNavbar.jsx';
import MobileNavbar from '../ui/MobileNavbar.jsx';

function Header() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

//   const location = useLocation();

//   if (location.pathname === '/admin') {
//     return null; // Opcional: No mostrar el header en la página de administración
//   }

  return (
    <header className="bg-[var(--background-opacity-color)] backdrop-blur-sm text-white fixed top-0 w-[100vw] h-18 flex m-0 p-0 flex-col z-50 
                       md:bg-[var(--primary-color)] md:backdrop-blur-none md- md:h-20
    ">
        <div id='notch' className='fixed left-1/2 -translate-x-1/2 top-0 flex items-center justify-center w-70 h-[10px] md:hidden'>
          <div className='bg-[var(--primary-color)] w-full h-full rounded-b-[15px] z-55'></div>
        </div>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </header>
  );
}

export default Header;