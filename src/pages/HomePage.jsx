function HomePage() {
  return (
    <>
      <article className="h-dvh lg:flex lg:pt-[10vh]">
        <div className="flex flex-col lg:h-full lg:w-[50vw] lg:justify-center lg:items-center lg:px-5">
          <section className='pt-30 px-5 text-[var(--primary-color)] h-80 mb-8 lg:w-full lg:h-[50vh] lg:flex-col lg:pt-0 lg:px-0 lg:mb-0'>
              <p className="mt-4 text-md lg:text-2xl lg:pb-3">Más que un residencial</p>
              <h1 className="text-[2.1rem] font-(family-name:--font-rubik) font-bold py-0 lg:text-[2.8rem]">Un hogar hecho con <br /> mucho amor</h1>
              <h2 className='text-md w-75 lg:w-full lg:text-2xl'>Donde el cuidado se convierte <br /> en calidad de vida</h2>
          </section>
          <section className="items-center justify-center flex h-[10vh] lg:flex-col lg:w-full lg:bottom-0">
            <button className='bg-[var(--primary-color)] block px-8 py-4 rounded-xl text-[var(--secondary-color)] w-90 font-bold text-2xl lg:flex-col lg:w-full lg:rounded-2xl lg:text-2xl lg:h-full'>¡CONTÁCTANOS!</button>
          </section>
        </div>
        <section className="w-full h-[40vh] flex items-center justify-center px-5 my-10 lg:h-full lg:w-[50vw] lg:justify-center lg:items-center lg:m-0">
          <div className="w-full h-full grid grid-cols-3 md:grid-cols-5 grid-rows-2 md:grid-rows-4 gap-2 md:gap-2 lg:h-[60vh] lg:w-[50vw] lg:gap-5">
            <div className="col-start-1 row-start-1 col-span-2 bg-gray-300 rounded-md h-full
                            md:col-start-1 md:row-start-1 md:col-span-3 md:row-span-2 lg:rounded-2xl">
              <img src="/imgs/vento-img-inicio-1.webp" alt="Empleadas de Luz Y Vida posando para una foto en conjunto" className="w-full h-full object-cover rounded-md lg:rounded-2xl"/>
            </div>
            <div className="col-start-1 row-start-2 col-span-2 md:col-start-1 md:row-start-3 md:col-span-3 md:row-span-2 bg-gray-300 rounded-md h-full lg:rounded-2xl">
              <img src="/imgs/vento-img-inicio-2.webp" alt="Mano de una persona mayor con un oxímetro de pulso en el dedo" className="w-full h-full object-cover rounded-md lg:rounded-2xl"/>
            </div>
            <div className="col-start-3 row-start-1 row-span-2 md:col-start-4 md:row-start-1 md:col-span-2 md:row-span-4 bg-gray-300 rounded-md h-full lg:rounded-2xl">
              <img src="/imgs/vento-img-inicio-3.webp" alt="Fachada de las instalaciones de Luz Y Vida" className="w-full h-full object-cover rounded-md lg:rounded-2xl"/>
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