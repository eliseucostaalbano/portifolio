import React from 'react'

const Header = ({titulo, subtitulo}) => {
  return (
      <div className="flex flex-col items-center">
      <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1 ">
        {titulo}
      </h1>
      <p className="text-sm text-slate-500 text-center md:w-[80%] mx-auto">
        {subtitulo}
      </p>
    </div>
  )
}

export default Header