import React from 'react'
import Perfil from "../../../assets/perfil.png";

const PrimeiraPagina = () => {
  return (
    <div className='h-full'>
      <main className='h-full w-full bg-[#f3f3f3] page-shadow'>
      <div className='p-10 space-y-4'>
        {/* container de imagem */}
        <div >
          <img src={Perfil} alt="Perfil" className='w-[300px] mx-auto' />
        </div>
        {/* container de texto */}
        <div>
            <div className="space-y-3">
              <p className="uppercase">Olá</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80">
                Eu sou Eliseu
              </p>
              <p className="text-black/75 text-left">Full Stack Developer Junior e Game Developer</p>
              <p className="text-black/75">
              Tenho experiência de 2 anos em Full Stack focando mais na criação de jogos usando HTML, CSS, JS 
              e 1 ano em Game Developer .
              </p>
              <a
                className="inline-block primary-btn "
                href="mailto:eliseualbano57@gmail.com"
              >
              Me Contate
              </a>
            </div>
        </div>
      </div>
      </main>
    </div>
  )
}

export default PrimeiraPagina