import React from 'react'
import MeuLivro from './components/MeuLivro'
import BgTextura from './assets/Textura-de-madeira.jpg'

const BgTextureStyle = {
  backgroundImage: `url(${BgTextura})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};

function App() {
  return (
    <div style={BgTextureStyle} className='w-full h-full flex items-center justify-center'>
      <MeuLivro />
    </div>
  )
}

export default App
