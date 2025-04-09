import React from 'react'

const CaixadeProjeto = ({ProjetoData}) => {
  return (
    <div>
        <div className=''>
            {ProjetoData.map((projeto, index) => (
            <div key={index} >

            </div>
            ))}
        </div>
    </div>
  )
}

export default CaixadeProjeto