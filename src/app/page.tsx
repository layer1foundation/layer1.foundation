import React from 'react'
import Glossary from '@/components/Glossary'
import Segment from '@/components/Segment'
import Chapter from '@/components/Chapter'
import copy from '@/constants/copy/home'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
        <img className='hidden md:block ' src='/img/l1f-image-1.png'></img>
        <img className='md:hidden ' src='/img/l1f-image-1-mobi.png'></img>
        <div className='w-full'>
            <div className='mt-2 mb-12 font-mono text-2xl leading-8'><h6 className='font-mono leading-6'>THE REALIZATION OF A DECENTRALIZED ECONOMY ON BITCOIN</h6></div>
            <h1 className='font-suisse advancing border-b pb-8 mb-6 md:max-w-3xl'>Advancing the development of <em className='metaprotocols'>Metaprotocols</em> on Bitcoin</h1>
            <Glossary />
        </div>
        <Segment bg=" md:pt-2">
            <Chapter chapter={copy.home.chapter0} />
        </Segment>
        <Segment bg='bg-smoke10'>
            <Chapter chapter={copy.home.chapter1}/>
        </Segment>
        <Segment bg="">
            <Chapter chapter={copy.home.chapter2} />
        </Segment>
        <Projects /> 
        <Segment bg="" scroll={false} title='THE FOLLOWING PROJECTS ARE KEY PRIORITIES FOR L1F IN 2024 AND BEYOND:'>
            <Chapter chapter={copy.home.chapter3}/>
        </Segment>
        <Segment bg="" scroll={false}>
            <Chapter chapter={copy.home.chapter4}/>
        </Segment>
        <Segment bg="" scroll={false}>
            <Chapter chapter={copy.home.chapter5}/>
        </Segment>
    </div>
    
  )
}
