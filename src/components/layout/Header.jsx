function Header() {
  return (
    <>
      <header className="bg-[var(--background-opacity-color)] backdrop-blur-sm text-white fixed top-0 w-[100vw] h-18 flex m-0 p-0 flex-col z-50">
        <div
          id='notch'
          className='fixed left-1/2 -translate-x-1/2 top-0 flex items-center justify-center'
        >
          <div className='bg-[var(--primary-color)] w-70 h-[10px] rounded-b-[15px] z-55'></div>
        </div>
        <section className='flex mx-3 justify-between items-center h-full pt-3'>
          <img src="/imgs/isologo.svg" alt="Isologo de Luz y Vida" className="w-15" />
          <h1 className='text-[var(--primary-color)] font-bold'>LUZ Y VIDA</h1>
          <img src="/imgs/menu.svg" alt="Icono de Menu" className='w-15'/>
        </section>
      </header>
    </>
  )
}

export default Header