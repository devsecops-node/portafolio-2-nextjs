import React from 'react'
import Card from './Card';
import styles from '@/styles/proyectos.module.css'

export const proyectos = [
  {
    id:1,
    semana: 1,
    tecnologias_usadas: [
      "Fundamentos de tecnologías web",
      "DNS",
      "Protocolo TCP/IP",
      "Protocolo HTTP"
    ],
    reflexion: "Roles en el desarrollo de Aplicaciones para Internet",
    proyecto: "Desarrollo de una aplicación web",
    resumen_de_clase: "Herramienta de desarrollo - Visual Studio Code",
    imagen: "https://cdn.thenewstack.io/media/2021/10/4f0ac3e0-visual_studio_code.png"
  },
]

export const planDeEstudios = [
  {
    id:1,
    semana: 1,
    tecnologias_usadas: [
      "Fundamentos de tecnologías web",
      "DNS",
      "Protocolo TCP/IP",
      "Protocolo HTTP"
    ],
    reflexion: "Roles en el desarrollo de Aplicaciones para Internet",
    proyecto: "Desarrollo de una aplicación web",
    resumen_de_clase: "Herramienta de desarrollo - Visual Studio Code",
    imagen: "https://cdn.thenewstack.io/media/2021/10/4f0ac3e0-visual_studio_code.png"
  },
  {
    id:2,
    semana: 2,
    tecnologias_usadas: ["HTML", "XML", "SEO", "CSS3"],
    reflexion: "Estructura HTML y XML, Árbol DOM, Renderizado de Árbol",
    imagen: "https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png",
    proyecto: "Diseño de una página web",
    resumen_de_clase: "Diseño flexbox, diseño fluido y diseño responsivo"
  },
  {  id:3,
    semana: 3,
    tecnologias_usadas: ["Bootstrap", "Tailwind"],
    imagen: "https://miro.medium.com/v2/resize:fit:1400/1*_6ooq0R60ba3UT5c-QVemA.png",
    reflexion: "Desarrollo de una página web Front-End con Librerías CSS",
    proyecto: "Práctica Calificada 01: Desarrollo de un sitio web con framework",
    resumen_de_clase: "Tipografía, Layout, Flexbox, Application UI"
  },
  {
    id:4,
    semana: 4,
    tecnologias_usadas: ["Javascript", "DOM", "Canvas"],
    imagen: "https://static.javatpoint.com/javascriptpages/images/canvasjs.png",
    reflexion: "Desarrollo de una página web Front-End con Javascript",
    proyecto: "Trabajo 01: Manejar el DOM con Javascript y Canvas",
    resumen_de_clase: "Funciones, Clases, Arrays, Objetos Map y Set"
  },
  {
    id:5,
    semana: 5,
    tecnologias_usadas: ["Framework JS"],
    imagen: "https://gabrielchavez.me/storage/2022/06/vitejs-que-es.png",
    reflexion: "Estructura y operación de Framework – Client Side Rendering",
    proyecto: "Laboratorio 05A: Pasar datos con props y children y mostrar en un componente hijo",
    resumen_de_clase: "Gestión de dependencias, Desarrollo basado en componentes"
  },
  {
    id:6,
    semana: 6,
    tecnologias_usadas: ["Eventos", "Condicionales", "Bucles", "APIs"],
    imagen: "https://media.geeksforgeeks.org/wp-content/uploads/20200418174636/GFG108-1.png",
    reflexion: "Desarrollo con Eventos, Condicionales y Bucles con Framework JS",
    proyecto: "Laboratorio 06A: Eventos y Renderizado Condicional e iterativo con datos de una API",
    resumen_de_clase: "Promesas, Async await, Consumo de APIs con Axios"
  },
  {
    id:7,
    semana: 7,
    tecnologias_usadas: ["Hooks"],
    imagen: "https://www.aluracursos.com/blog/assets/react-hooks/img2.png",
    reflexion: "Uso de Hooks",
    proyecto: "Laboratorio 09: Uso de hooks",
    resumen_de_clase: "UseState, UseEffect, UseContext, UseRef, UseReducer, UseCallback, useMemo"
  },
  {
    id:8,
    semana: 9,
    tecnologias_usadas: ["Next JS", "Typescript"],
    imagen: "https://res.cloudinary.com/practicaldev/image/fetch/s--3KGtx8dm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/yo35aymkgnlgfk6t5fcf.png",
    reflexion: "Next JS – CSR / SSR, Typescript",
    proyecto: "Laboratorio 10: Caso práctico consumo de API",
    resumen_de_clase: "De javascript a typescript"
  },
  {
    id:9,
    semana: 10,
    imagen: "https://miro.medium.com/v2/1*jJkEQpgZ8waQ5P-W5lhxuQ.png",
    tecnologias_usadas: ["Next JS", "Typescript", "Static Generate", "Incremental Static Generation"],
    reflexion: "Next JS – CSR / SSR, Static Generate – Static Regeneratión, Incremental Static Regeneration (ISR)",
    proyecto: "Laboratorio 10: Caso práctico consumo de API",
    resumen_de_clase: "Incremental Static Generation (ISG)"
  },
  {
    id:10,
    semana: 11,
    tecnologias_usadas: ["Server Side Props", "Next Auth"],
    imagen: "https://next-auth.js.org/img/social-media-card.png",
    reflexion: "Server Side Props, Next Auth",
    proyecto: "Laboratorio 11: Subsistema de autenticación con Next JS",
    resumen_de_clase: "getServerSideProps, Next Auth, Middlewares"
  },
  {
    id:11,
    semana: 13,
    tecnologias_usadas: ["Spring", "HTTP", "MVC", "API Rest"],
    imagen: "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png",
    reflexion: "Desarrollar API Rest con Spring",
    proyecto: "Laboratorio 13: Desarrollo de una API Rest y Despliegue.",
    resumen_de_clase: "Arquitectura API Rest"
  },
  {
    id:12,
    semana: 14,
    tecnologias_usadas: ["Eureka", "Microservicios", "Configuración avanzada en Eureka", "Configuración en la nube"],
    imagen: "https://miro.medium.com/v2/resize:fit:596/1*WxZgzV2MgMwgovBs4wGP2Q.png",
    reflexion: "Registro de Microservicios en Eureka",
    proyecto: "Resumen del registro de microservicio",
    resumen_de_clase: "Consumo de un Microservicio"
  }
];
const Proyects = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <p className='text-sky-500 font-bold text-[20px]  tracking-tighter'>Proyectos realizados durante las 12 semanas</p>
      <div className={styles.proyectos}>
        {planDeEstudios.map(proyec => <Card key={proyec.id} proyect={proyec} />)}
      </div>
    </div>
  )
}

export default Proyects