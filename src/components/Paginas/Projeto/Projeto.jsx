import React from 'react'
import Header from "../../Header/Header.jsx";
import CaixadeProjeto from './CaixadeProjeto.jsx'

const Projeto = ({ProjetoData}) => {
  return (
    <div className='h-full page-shadow bg-white px-10'>
      {/* cabeçalho */}
      <Header titulo="Projetos" subtitulo="Aqui Alguns Projetos Que Eu Fiz Usando meus Conhecimentos  de Full Stack Developer Junior e Game Developer "/>

      {/* seção de Projetos */}
      <div>
        <CaixadeProjeto ProjetoData={ProjetoData}/>
      </div>
    </div>
  )
}

export default Projeto