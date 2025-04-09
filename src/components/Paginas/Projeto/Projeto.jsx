import React from 'react'
import CaixadeProjeto from './CaixadeProjeto.jsx'

const Projeto = ({ProjetoData}) => {
  return (
    <div className='h-full page-shadow bg-white px-10'>
      <div className='flex flex-col items-center'>
        <h1 className='inline-block text-3xl text-center font-bold mb-3 border-b-2 border-[#150184] pb-1'>Projetos</h1> 
        <p className='text-sm text-slate-500 text-center md: w-[80%] mx-auto'>Aqui Alguns Projetos Que Eu Fiz Usando meus Conhecimentos  de Full Stack Developer Junior e Game Developer </p>
      </div>

      {/* seção de Projetos */}
      <div>
        <CaixadeProjeto  ProjetoData={ProjetoData}/>
      </div>
    </div>
  )
}

export default Projeto