import React from 'react'
import Glossary from '@/components/Glossary'
import Segment from '@/components/Segment'
import Chapter from '@/components/Chapter'
import Projects from '@/components/Projects'
import copy from '@/constants/copy/BRC20'

export default function BRC20() {
  const glossContent = {
    chapters:[
      {
      heading:"LAYER 1 FOUNDATION GOVERNANCE FOR THE BRC20 PROTOCOL"
      }
    ]
  }
  return (
    <div className='flex flex-col items-center'>
      <img className='hidden md:block' src='/BRC20-dt.png'></img>
      <img className='md:hidden' src='/BRC20-mobi.png'></img>
      <div className='w-full'>
        <div className='mt-2 mb-8 font-mono text-2xl leading-8 border-b'>
          <h6 className='font-mono leading-6'>METAPROTOCOLS IN BITCOIN</h6>
          <h1 className='font-suisse advancing pb-8 mb-6 md:max-w-lg mt-8'>Protocol Governance For BRC20</h1>
        </div>
        <Glossary content={glossContent} chapters={false}></Glossary>
      </div>
      <Segment bg={"mb-20"}>
        <Chapter chapter={copy.BRC20.chapter0}></Chapter>
      </Segment>
      <Segment scroll={false} bg={"bg-smoke10"}>
        <Chapter chapter={copy.BRC20.chapter1}></Chapter>
      </Segment>
      <Segment>
        <Chapter chapter={copy.BRC20.chapter2}></Chapter>
      </Segment>
      <Segment>
        <Chapter chapter={copy.BRC20.chapter3}></Chapter>
      </Segment>
      <Segment>
        <Chapter chapter={copy.BRC20.chapter4}></Chapter>
       <Projects></Projects>
      </Segment>
    </div>
  )
}
