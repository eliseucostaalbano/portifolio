import React from 'react'
import LevelHablidade from './LevelHablidade'

const Habilidades = () => {
  return (
    <div className='h-full page-shadow bg-white px-10'>
      <div>
        {/* cabeçalho */}
        <div>
          <div className="relative">
            <div className='text-center text-6xl xl:text-8xl font-bold text-black/5'>Habilidades</div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl'>Habilidades</h1> 
          </div>
        </div>
        {/* seção de hablidades */}
        <div className='space-y-10'>
        <LevelHablidade habilidadeNome="HTML" porcentagem = {"90%"}/>
        <LevelHablidade habilidadeNome="CSS" porcentagem = {"70%"}/>
        <LevelHablidade habilidadeNome="JavaScript" porcentagem = {"80%"}/>
        <LevelHablidade habilidadeNome="React & Tailwind" porcentagem = {"40%"}/>
        <LevelHablidade habilidadeNome="Backend" porcentagem = {"30%"}/>
        <LevelHablidade habilidadeNome="C#" porcentagem = {"25%"}/>
        <LevelHablidade habilidadeNome="Unity" porcentagem = {"25%"}/>
        </div>
      </div>
    </div>

 )
}

export default Habilidades