import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center h-[100vh] bg-white">
      <h1 className="text-4xl font-bold text-black">Error 404</h1>
      <p className="mt-4 text-xl font-bold text-black">Oops! Esta página no existe.</p>

      <button className="mt-6 px-6 py-3 bg-[var(--primary-color)] text-[var(--secondary-color)] font-bold text-lg rounded-lg hover:bg-[#810081] transition-all"><Link to="/">Volver al Inicio</Link></button>
    </section>
  );
}

export default NotFoundPage;