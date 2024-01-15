import React from 'react'
import stles from "@/styles/dashboard.module.css"
import Portada from './Portada'
import { useRef } from 'react'
import Proyects from './Proyects'

const Dashboard = () => {

  const scrollToPortada = () => {
    const portada = document.getElementById('portada')

    if (portada) {
      console.log('ejecutando id')
      portada.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProyects = () => {
    const portada = document.getElementById('proyects')

    if (portada) {
      console.log('ejecutando id')
      portada.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={stles.home_view}>
      <div className='h-screen flex justify-center items-center flex-col'>
        <div className={stles.home_view_principal}>
          <p className={stles.animar_text} id='detec'> Hey, I am <span className="animacion-bolder">Jordan
            Huaman</span>, I am asphiring to <span className={stles.detect}>Software Enginiering</span>
          </p>
        </div>
        <div className={stles.home_view_links}>
          <a onClick={scrollToPortada} className={stles.animar_abajo}>
            <p className='animate-bounce transition-all hover:font-bold duration-150 hover:scale-105'>Portada</p>
          </a>
          {/* <a href="" className={stles.animar_abajo}>
            <p>Bienvenida Introduccion</p>
          </a>
          <a href="" className={stles.animar_arriba}>
            <p>Tabla de contenido</p>
          </a><a href="" className={stles.animar_arriba}>
            <p>Informacion sobre mi</p>
          </a> */}
          <a  onClick={scrollToProyects} className={stles.animar_abajo}>
            <p className='animate-bounce transition-all hover:font-bold duration-150 hover:scale-105'>Trabajos realizados</p>
          </a>

        </div>
        <div>
        </div>
      </div>
      <div id='portada'>
        <Portada scrolProyects={scrollToProyects}/>
      </div>
      <div id='proyects'>
        <Proyects/>
      </div>
    </section>
  )
}

export default Dashboard