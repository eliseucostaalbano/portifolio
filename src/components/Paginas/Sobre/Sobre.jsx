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
          <a href='#'>
           <MdFacebook className='social-btn'/>
          </a>
          <a href='https://www.linkedin.com/in/eliseu-costa-a84255314/'>
           <FaLinkedin className='social-btn'/>
          </a>
          <a href='https://github.com/eliseucostaalbano'>
           <FaGithub className='social-btn'/>
          </a>
         </div> 
      </div>
    </div>
  )
}

export default Sobre