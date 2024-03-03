"use client";

import React from 'react'
import Link from 'next/link'

interface GlossaryProps {
  content?: any;
  chapters?: boolean
}

export default function Glossary({content, chapters = true}: GlossaryProps) {
  return (
    <div className='flex flex-col w-full md:flex-row justify-between md:justify-start'>
      
        {content?.heading ? <h6 className='text-smoke50 mb-8 font-mono'>{content.heading}</h6> : null}
        <div className='md:w-1/3 text-smoke40 font-mono mb-12'>
            {content?.chapters ? 
            content.chapters.map((chapter: any, i: number) => {
                return (
                    <p key={i} className='flex justify-between md:mr-20'>{chapter.heading}</p>
                )
            }) : chapters ?
            <div>
              <p>00 / OVERVIEW</p>
              <p>01 / MISSION</p>
              <p>02 / PROTOCOL GOVERNANCE</p>
              <p>03 / PUBLIC TOOLING FOR DEVELOPERS</p>
              <p>04 / DEVELOPMENT DISCOURSE FORUM</p>
            </div>
            : null
          }
        </div>
        <div className='md:w-1/3 space-y-3'>
            <Link href='/' className='flex justify-between font-mono'>GITHUB<img src='arrow-top-right.svg'/></Link>
            <Link href='/' className='flex justify-between font-mono'>TOOLS<img src='arrow-top-right.svg'/></Link>
            <Link href='/' className='flex justify-between font-mono'>FORM<img src='arrow-top-right.svg'/></Link>
        </div>
        
    </div>
  )
}
