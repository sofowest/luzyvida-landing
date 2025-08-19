function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center h-[100vh] bg-white">
      <h1 className="text-4xl font-bold text-red">Error 404</h1>
      <p className="mt-4 text-xl font-bold text-red-400">Oops! Esta página no existe burrito.</p>
    </section>
  );
}

export default NotFoundPage;