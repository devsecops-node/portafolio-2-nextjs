import React from 'react'
import Link from 'next/link'

const Card = ({ proyect }) => {
  return (
    <Link href={`/proyect/${proyect.id}`} className='bg-slate-300 p-2 flex flex-col gap-1 rounded-md transition-all duration-150 hover:scale-105 ease-in-out hover:z-20 hover:border cursor-pointer'>
      <img src={proyect.imagen} alt="imagen-semana" width={100} className='bg-slate-400 flex rounded-md' />
      <div className='flex justify-center items-center gap-3'>
        <p className='font-bold'>Semana</p>
        <p className='text-[10px]'>{proyect.semana}</p>
      </div>
      <div>
        <p className='font-bold'>Clase</p>
        <p className='text-[10px]'>{proyect.resumen_de_clase}</p>
      </div>
      <div>
        <p className='font-bold'>Reflexion</p>
        <p className='text-[10px]'>{proyect.reflexion}...</p>
      </div>
      <div className='mt-auto'>
        <p className='font-bold'>Tecnologias Usadas</p>
        <div className='flex gap-2'>
          {proyect.tecnologias_usadas.map(tec => <p className='text-[10px] bg-sky-800 text-white p-1 rounded-full text-center'>{tec}</p>)}
        </div>
      </div>
    </Link>
  )
}

export default Card