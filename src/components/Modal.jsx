import React from 'react'

const Modal = ({ setModal }) => {
  const close = () => {
    setModal()
  }
  return (
    <div className='absolute z-10 bg-slate-200 h-screen w-[100%] flex flex-col justify-center items-center' onClick={close}>
      <p className='text-[20px] font-bold'>About me</p>
      <div class="card w-[50%]">
        <p className='font-bold text-[15px]'>Educación:</p>
        <ul >
          <li><strong>Educación:</strong> Estudiante de Ingeniería de Sistemas en el 9º ciclo, lo que sugiere un conocimiento sólido en teoría y práctica de la ingeniería de software y sistemas.</li>
          <li><strong>Experiencia Técnica:</strong>
            <ul>
              <li className='tracking-tighter'>Experiencia en el desarrollo de aplicaciones utilizando tecnologías front-end como React y Angular, lo que demuestra habilidades en la creación de interfaces de usuario dinámicas y atractivas.</li>
              <li className='tracking-tighter' >Exposición a diversas tecnologías relacionadas con el desarrollo web y de software.</li>
              <li className='tracking-tighter'>Enfoque específico en tecnologías backend, lo que indica un interés en la lógica empresarial, manipulación de datos y gestión de servidores.</li>
            </ul>
          </li>
          <li><strong>Habilidades Técnicas:</strong>
            <ul>
              <li className='tracking-tighter'>Competencia en el diseño y desarrollo de aplicaciones utilizando lenguajes de programación como JavaScript, y posiblemente otros lenguajes backend como Node.js o Java.</li>
              <li className='tracking-tighter'>Conocimiento de arquitecturas de software y patrones de diseño, lo que sugiere una comprensión de cómo construir sistemas escalables y mantenibles.</li>
              <li className='tracking-tighter'>Familiaridad con bases de datos y la manipulación eficiente de datos.</li>
              <li className='tracking-tighter'>Experiencia en el uso de herramientas de control de versiones como Git.</li>
            </ul>
          </li>
          <li><strong>Soft Skills:</strong>
            <ul>
              <li className='tracking-tighter'>Capacidad para trabajar en equipo, lo que es crucial en entornos de desarrollo de software colaborativos.</li>
              <li className='tracking-tighter'>Buena comunicación y habilidades interpersonales para colaborar eficazmente con otros miembros del equipo.</li>
              <li className='tracking-tighter'>Actitud proactiva y capacidad para aprender rápidamente nuevas tecnologías y conceptos.</li>
            </ul>
          </li>
          <li><strong>Intereses y Enfoque:</strong>
            <ul>
              <li className='tracking-tighter'>Interés específico en el backend y la arquitectura de software, lo que sugiere una inclinación hacia desafíos más orientados a la lógica y la infraestructura.</li>
              <li className='tracking-tighter'>Possible participación en proyectos de código abierto o en actividades extracurriculares relacionadas con la ingeniería de software.</li>
            </ul>
          </li>
        </ul>
        <div className='flex justify-center items-center'>

          <button onClick={close} className='bg-blue-600 p-2 rounded-md text-white hover:scale-105 duration-150 ease-in-out '>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal