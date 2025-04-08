import React from 'react'

export const Capa = ({ coverImg, title }) => {
    const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="h-full" style={coverImgStyle}>
    <div className='h-full flex items-center justify-center page-shadow'>
    <h1 className='text-[#150184] text-5xl font-bold font-outline-2'>{title}</h1>
    </div>
    </div>
  )
}

export default Capa
