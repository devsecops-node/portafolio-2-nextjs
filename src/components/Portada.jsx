import React, { useState } from 'react'
import Modal from './Modal'

const Portada = ({ scrolProyects }) => {
  const [modal, setModal] = useState(false)
  const showModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  const srolPro = () => {
    scrolProyects()
  }

  return (
    <div className='h-screen flex justify-center items-center relative'>
      <section className='flex justify-center flex-col items-center gap-4'>
        <p>I am <span className='text-[20px] font-bold'>Jordan Huaman</span> and I am <span className='text-[20px] font-bold'>Software Develovper</span></p>
        <p>If you want, you can see my description</p>
        <button onClick={showModal} className='bg-blue-600 p-2 rounded-md text-white hover:scale-105 duration-150 ease-in-out'>Descripcion</button>
        {modal ? <Modal setModal={closeModal}  /> : <></>}
        <p className='text-sky-500 font-bold tracking-tighter text-[15px] transition-all duration-150 hover:scale-105 ease-in-out cursor-pointer' onClick={srolPro}>See My Proyects <span>↘️</span></p>
      </section>
    </div>
  )
}

export default Portada