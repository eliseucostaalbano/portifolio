import React from 'react'
import CaixaServiços from "./CaixaServiços.jsx"
import Header from "../../Header/Header.jsx";

const Serviços = () => {
  return (
    <div className='h-full page-shadow bg-white px-10'>
      {/* cabeçalho */}
      <Header titulo="Serviços" subtitulo="Aqui Algumas Coisas Que Consigo Fazer com as minhas Hablidades de Developer"/>
      
      {/* seção de serviços */}
      <div>
      <CaixaServiços/>
      </div>
    </div>
    
  )
}

export default Serviços