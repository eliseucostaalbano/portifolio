import React from 'react'
import Header from "../../Header/Header.jsx";
import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Sobre = () => {
  return (
    <div className='h-full page-shadow bg-white px-10'>
      {/* cabeçalho */}
       <Header titulo="Sobre" subtitulo="Aqui Algumas Coisas Sobre Mim"/>
       
      {/* seção de detalhes */}
      <div className='mt-10 text-slate-500'>
         <p>
          Começei minha Jornada Em 2022 quando comecei a estudar HTML e CSS, depois disso fui aprendendo mais e mais sobre FrontEnd e BackEnd, hoje em dia tenho conhecimentos em HTML, CSS, JS, React, NodeJS, Express, MongoDB e SQL.
        </p>
        <br />
        <p>
          Tambem tenho conhecimentos em GameDev, com a Game Engine Da Unity, onde crio jogos 2D e 3D usando C#.
        </p>
         {/* Links Sociais  */}
         <div className="flex space-x-4 mt-10">
          <MdFacebook className='social-btn'/>
          <FaLinkedin className='social-btn'/>
          <FaGithub className='social-btn'/>
         </div> 
         {/* Butoes de link  */}
         <div className='flex space-x-4 mt-4'>
          <a href='#' className='primary-btn'>Curriculo</a>
          <a href='#' className='outline-btn'>Contato</a>
         </div>
      </div>
    </div>
  )
}

export default Sobre