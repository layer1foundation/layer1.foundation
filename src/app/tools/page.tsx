import React from 'react'
import Glossary from '@/components/Glossary'
import Segment from '@/components/Segment'
import Chapter from '@/components/Chapter'
import Tool from '@/components/Tool'
import copy from '@/constants/copy/tools'

export default function Tools() {
  const glossContent = {
    chapters:[
      {
      heading:"LAYER 1 FOUNDATION ENABLES PUBLIC TOOLING FOR USERS AND BUILDERS"
      }
    ]
  }
  return (
    <div className='flex flex-col items-center'>
        <img className='hidden md:block' src='/tools-dt.png'></img>
        <img className='md:hidden' src='/tools-mobi.png'></img>
        <div className='w-full'>
          <div className='mt-2 mb-8 font-mono text-2xl leading-8 border-b'>
            <h6 className='font-mono leading-6'>BUILDING THE TOOLS FOR A BITCOIN ECOSYSTEM</h6>
            <h1 className='font-suisse advancing pb-8 mb-6 md:max-w-lg mt-8'>Public Tooling For <em className='metaprotocols'>Users &</em> <em>Builders</em></h1>
          </div>
          
          {/* <p className='font-mono text-smoke40 pr-8 mb-4'>LAYER 1 FOUNDATION ENABLES PUBLIC TOOLING FOR USERS AND BUILDERS</p> */}
          <Glossary content={glossContent} chapters={false}/>
        </div>
        <Segment>
          <Chapter chapter={copy.tools.chapter0}></Chapter>
        </Segment>
        <Segment>
          <Chapter chapter={copy.tools.chapter1}>
            
          </Chapter>
          <img src="/tools-hero-mobi.svg" className='md:hidden'/>
          <img src="/tools-hero-dt.svg" className='hidden md:flex'/>
        </Segment>
        <Segment scroll={false} bg='bg-smoke10'>
          <Chapter chapter={copy.tools.chapter2}></Chapter>
        </Segment>
        <Segment scroll={false} bg="border-b mb-20 md:mb-0">
          <Tool tool={copy.tools.tool1}></Tool>
          <Chapter chapter={copy.tools.chapterMeta}></Chapter>
        </Segment>
        <Segment scroll={false} bg="border-b mb-20 md:mb-0">
          <Chapter chapter={copy.tools.chapterSand}></Chapter>
        </Segment>
        <Segment scroll={false} bg="border-b mb-20 md:mb-0">
          <Tool tool={copy.tools.tool2}></Tool>
          <Chapter chapter={copy.tools.chapterOpi}></Chapter>
        </Segment>
        <Segment scroll={false} bg="border-b mb-20 md:mb-0">
          <Tool tool={copy.tools.tool3}></Tool>
          <Chapter chapter={copy.tools.chapterChisel}></Chapter>
        </Segment >
        <Segment scroll={false} bg="border-b mb-20 md:mb-0">
          <Chapter chapter={copy.tools.chapterOrdinalsBot}></Chapter>
        </Segment>
        <Segment scroll={false} bg='border-b mb-20 md:mb:0'>
          <Tool tool={copy.tools.tool4}></Tool>
          <Chapter chapter={copy.tools.chapterScan}></Chapter>
        </Segment>
        <Segment scroll={false} bg="border-b mb-20 md:mb-0">
          <Chapter chapter={copy.tools.chapterOrdIo}></Chapter>
        </Segment>
        <Segment scroll={false} bg="border-b mb-20 md:mb-0">
          <Tool tool={copy.tools.tool5}></Tool>
          <Chapter chapter={copy.tools.chapterOYL} />
        </Segment>
    </div>
  )
}
