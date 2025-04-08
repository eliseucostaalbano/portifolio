import React from 'react'

const LevelHablidade = ({habilidadeNome , porcentagem}) => {
  return (
    <div className='mt-4 space-y-2'>
        <div className='flex items-end justify-between'>
            <p className='font-bold text-xl'>{habilidadeNome}</p>
            <p className='text-sm'>{porcentagem}</p>
        </div>
        <div className='w-full bg-slate-200 h-2 rounded-full'>
            <div style={{width: `${porcentagem}`}} className='h-2 bg-[#150184] rounded-full'></div>
        </div>
    </div>
  )
}

export default LevelHablidade