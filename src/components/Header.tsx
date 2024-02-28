import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='pb-6'>
        <div className='d-fex flex-col '>
            <div className=' flex flex-row mb-4 justify-between'>
                <img src='/l1f-logo-default.svg' width='176' height='24'></img>
                <div className='border border-dark  flex space-x-3 px-16 py-2'><img src='/arrow-left.svg' /> <p>DONATE</p></div>
            </div>
            <div className='flex gap-3 space-x-14'>
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
