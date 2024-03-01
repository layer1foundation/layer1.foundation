import React from 'react'
import Glossary from '@/components/Glossary'
import Segment from '@/components/Segment'
import Chapter from '@/components/Chapter'
import copy from '@/constants/copy'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
        <img className='hidden md:block px-4' src='/l1f-image-1.png'></img>
        <img className='md:hidden px-4' src='/l1f-image-1-mobi.png'></img>
        <div className='w-full px-4'>
            <p className='mt-6 mb-12 font-mono text-2xl leading-8'><span className='font-mono text-lg leading-6'>THE REALIZATION</span><span className='font-mono text-lg leading-6'> OF A DECENTRALIZED ECONOMY ON BITCOIN</span></p>
            <h1 className='font-suisse advancing border-b pb-8 mb-6'>Advancing the development of <em className='metaprotocols'>Metaprotocols</em> on Bitcoin</h1>
            <Glossary />
            
            
        </div>
        <Segment bg="px-4">
            <Chapter chapter={copy.home.chapter0} />
        </Segment>
        <Segment bg='bg-smoke10 px-4'>
            <Chapter chapter={copy.home.chapter1}/>
        </Segment>
        <Segment bg="px-4">
            <Chapter chapter={copy.home.chapter2}>
                <Projects /> 
            </ Chapter>
        </Segment>
        <Segment bg="px-4" scroll={false} title='THE FOLLOWING PROJECTS ARE KEY PRIORITIES FOR L1F IN 2024 AND BEYOND'>
            <Chapter chapter={copy.home.chapter3}/>
        </Segment>
        <Segment bg="px-4" scroll={false}>
            <Chapter chapter={copy.home.chapter4}/>
        </Segment>
        <Segment bg="px-4">
            <Chapter chapter={copy.home.chapter5}/>
        </Segment>
    </div>
    
  )
}
