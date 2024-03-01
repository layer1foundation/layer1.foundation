import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='pb-6 px-4'>
        <div className='d-fex flex-col '>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className=' flex justify-between md:block'>
                    <img src='/img/l1f-logo-default.svg' width='176' height='24' className='pb-6 md:pb-0'></img>
                    <div className='md:hidden'>
                        <img src='/img/bars-two.svg'/>
                    </div>
                </div>
                <div className='border border-dark flex space-x-3 px-16 py-2 items-center justify-center font-mono'><img src='/img/arrow-top-left.svg' className='w-3'/> <h6>DONATE</h6></div>
            </div>
            <div className='gap-3 space-x-14 hidden md:flex'>
                <Link href='/mission' className='font-mono'>MISSION</Link>
                <Link href='/BRC20' className='font-mono'>METAPROTOCOLS</Link>
                <Link href='/tools' className='font-mono'>TOOLS</Link>
                <Link href='/donate' className='font-mono'>PARTNERS</Link>
                <Link href='/blog' className='font-mono'>BLOG</Link>
            </div>
        </div>
    </div>
  )
}
