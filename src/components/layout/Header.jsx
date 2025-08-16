import React from 'react'

function Header() {
  return (
    <>
      <header className="bg-blue-500 text-white fixed top-0 w-full h-18 flex m-0 p-0 flex-col z-50">
        <div
          id='notch'
          className='fixed left-1/2 -translate-x-1/2 top-0 flex items-center justify-center'
        >
          <div className='bg-[var(--primary-color)] w-70 h-[10px] rounded-b-[50px] z-55'></div>
        </div>
        <section className='flex mx-5 gap-10 justify-between items-center h-full'>
            <h1 className='p-4 bg-amber-600'>logo</h1>
            <h1 className='p-4 bg-amber-600'>menu</h1>
        </section>
      </header>
    </>
  )
}

export default Header