import React from 'react'
import CaixaServiços from "./CaixaServiços.jsx"

const Serviços = () => {
  return (
    <div className='h-full page-shadow bg-white px-10'>
      {/* cabeçalho */}
      <div className='flex flex-col items-center'>
        <h1 className='inline-block text-3xl text-center font-bold mb-3 border-b-2 border-[#150184] pb-1'>Serviços</h1> 
        <p className='text-sm text-slate-500 text-center md: w-[80%] mx-auto'>Aqui Algumas Coisas Que Consigo Fazer com as minhas Hablidades de Developer</p>
      </div>
      {/* seção de serviços */}
      <div>
      <CaixaServiços/>
      </div>
    </div>
    
  )
}

export default Serviços