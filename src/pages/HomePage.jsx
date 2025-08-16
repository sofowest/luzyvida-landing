
function HomePage() {
  return (
    <>
      <main>
        <article className="h-dvh">
            <section className='pt-20 pb-10 px-5 text-[var(--primary-color)]'>
                <p className="mt-4 text-md">Más que un residencial</p>
                <h1 className="text-4xl font-bold py-4">Un hogar hecho con mucho amor</h1>
                <h2 className='text-md w-60'>Donde el cuidado se convierte en calidad de vida</h2>

                <button className='bg-[var(--primary-color)] block mx-auto mt-8 px-8 py-3 rounded-xl text-[var(--secondary-color)] w-[60vw] font-medium'>¡CONTACTANOS!</button>
            </section>
            <section>
                
            </section>
        </article>

        <article className="h-dvh flex items-center justify-center bg-red-200">
            Contenedor Fait 2
        </article>

        <article className="h-dvh flex items-center justify-center bg-red-400">
            Contenedor Fait 3
        </article>
      </main>
    </>
  )
}

export default HomePage