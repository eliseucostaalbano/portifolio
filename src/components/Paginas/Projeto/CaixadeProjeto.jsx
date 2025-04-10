import React from 'react'

const CaixadeProjeto = ({ProjetoData}) => {
  return (
    <div>
        <div className='grid grid-cols-2 gap-4 mt-10'>
            {ProjetoData.map((projeto, index) => (
            <div key={index} className='h-[160px] rounded-xl' >
               <div>
                 <img src={projeto.imagem} alt="" className='w-full h-full object-cover rounded-xl'/>
                 {/* seção de detalhes */}
                 <div>
                  <h1 className='text-2xl font-semibold'>{projeto.nome}</h1>
                  <p className='line-clamp-3'>{projeto.descrição}</p>
                  <a href={projeto.previewLink} className='primary-btn mt-3'>Ver projeto</a>
                 </div>
               </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default CaixadeProjeto