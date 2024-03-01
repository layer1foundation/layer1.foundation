import React from 'react'

export default function Projects() {
  return (
    <div className='grid grid-cols-1 w-full py-12'>
        <div className='flex flex-col h-80  items-center justify-center border'>
            <img className='m-auto' src='/chest.jpg'/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src='/OYL.svg'/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src="/OKX.svg"/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src='/allium.svg'/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src='/hiro.svg'/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src='/unisat.svg'/>
        </div>
    </div>
  )
}
