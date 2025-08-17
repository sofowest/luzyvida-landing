
function HomePage() {
  return (
    <>
      <main>
        <article className="h-dvh">
            <section className='pt-30 px-5 text-[var(--primary-color)] h-[60vh]'>
                <p className="mt-4 text-md">Más que un residencial</p>
                <h1 className="text-4xl font-bold py-4">Un hogar hecho con mucho amor</h1>
                <h2 className='text-md w-60'>Donde el cuidado se convierte en calidad de vida</h2>

                <button className='bg-[var(--primary-color)] block mx-auto mt-8 px-8 py-3 rounded-xl text-[var(--secondary-color)] w-[60vw] font-medium'>¡CONTACTANOS!</button>
            </section>
            <section className="w-full h-[40vh] flex items-center justify-center px-5 py-10">
                <div class="w-full grid grid-cols-3 md:grid-cols-5 grid-rows-2 md:grid-rows-4 gap-2 md:gap-2">
                  <div class="col-start-1 row-start-1 col-span-2 md:col-start-1 md:row-start-1 md:col-span-3 md:row-span-2 bg-gray-300 rounded-md p-10">
                    <img src="" alt="" />
                  </div>
                  <div class="col-start-1 row-start-2 col-span-2 md:col-start-1 md:row-start-3 md:col-span-3 md:row-span-2 bg-gray-300 rounded-md p-10">
                    <img src="" alt="" />
                  </div>
                  <div class="col-start-3 row-start-1 row-span-2 md:col-start-4 md:row-start-1 md:col-span-2 md:row-span-4 bg-gray-300 rounded-md p-5">
                    <img src="" alt="" />
                  </div>
              </div>
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