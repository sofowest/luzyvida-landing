function HomePage() {
  return (
    <>
      <article className="h-dvh flex flex-col">
          <section className='pt-30 px-5 text-[var(--primary-color)] h-80 mb-8'>
              <p className="mt-4 text-md">Más que un residencial</p>
              <h1 className="text-4xl font-bold py-4">Un hogar hecho con mucho amor</h1>
              <h2 className='text-md w-60'>Donde el cuidado se convierte en calidad de vida</h2>
          </section>
          <section className="items-center justify-center flex h-[10vh]">
            <button className='bg-[var(--primary-color)] block px-8 py-4 rounded-xl text-[var(--secondary-color)] w-90 font-medium text-2xl'>¡CONTÁCTANOS!</button>
          </section>
          <section className="w-full h-[40vh] flex items-center justify-center px-5 my-10">
              <div className="w-full h-full grid grid-cols-3 md:grid-cols-5 grid-rows-2 md:grid-rows-4 gap-2 md:gap-2">
                <div className="col-start-1 row-start-1 col-span-2 md:col-start-1 md:row-start-1 md:col-span-3 md:row-span-2 bg-gray-300 rounded-md h-full">
                  <img src="imgs/auxiliar/vento-img-inicio-1-a.webp" alt="" className="w-full h-full object-cover rounded-md"/>
                </div>
                <div className="col-start-1 row-start-2 col-span-2 md:col-start-1 md:row-start-3 md:col-span-3 md:row-span-2 bg-gray-300 rounded-md h-full">
                  <img src="imgs/auxiliar/vento-img-inicio-2.jpg" alt="" className="w-full h-full object-cover rounded-md"/>
                </div>
                <div className="col-start-3 row-start-1 row-span-2 md:col-start-4 md:row-start-1 md:col-span-2 md:row-span-4 bg-gray-300 rounded-md h-full">
                  <img src="imgs/auxiliar/vento-img-inicio-3.jpg" alt="" className="w-full h-full object-cover rounded-md"/>
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
    </>
  )
}

export default HomePage