import React from 'react'

export default function 
({tool}:any) {
   
  return (
    <div className='md:flex mb-20'>
        <div className='md:w-1/3 mb-4 space-y-4'>
        <h6 className='font-mono text-smoke40'>{tool.subheading}</h6>
        <h1>{tool.heading}</h1>
        </div>
        <h4 className='md:w-2/3 font-suisse pr-16'>{tool.text}</h4>
    </div>
  )
}
