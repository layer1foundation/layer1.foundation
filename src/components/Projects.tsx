import React from 'react'

export default function Projects() {
  return (
    <div className='grid grid-cols-1 w-full py-12 md:grid-cols-3'>
        <div className='flex flex-col h-80  items-center justify-center border'>
            <img className='m-auto' src='/img/chest.jpg'/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src='/img/OYL.svg'/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src="/img/OKX.svg"/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src='/img/allium.svg'/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src='/img/hiro.svg'/>
        </div>
        <div className='flex flex-col h-80 items-center justify-center border'>
            <img src='/img/unisat.svg'/>
        </div>
    </div>
  )
}
