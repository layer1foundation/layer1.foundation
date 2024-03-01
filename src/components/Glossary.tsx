import React from 'react'
import Link from 'next/link'

export default function Glossary() {
  return (
    <div className='flex flex-col w-full md:flex-row justify-between'>
        <div className='md:w-1/3 text-smoke40 font-mono mb-12'>
            <p>00 / OVERVIEW</p>
            <p>01 / MISSION</p>
            <p>02 / PROTOCOL GOVERNANCE</p>
            <p>03 / PUBLIC TOOLING FOR DEVELOPERS</p>
            <p>04 / DEVELOPMENT DISCOURSE FORUM</p>
        </div>
        <div className='md:w-1/3 space-y-3'>
            <Link href='/' className='flex justify-between font-mono'><p>GITHUB</p><img src='arrow-top-right.svg'/></Link>
            <Link href='/' className='flex justify-between font-mono'><p>TOOLS</p><img src='arrow-top-right.svg'/></Link>
            <Link href='/' className='flex justify-between font-mono'><p>FORM</p><img src='arrow-top-right.svg'/></Link>
        </div>
        <div className='md:w-1/3'>

        </div>
    </div>
  )
}
