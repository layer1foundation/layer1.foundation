import React from 'react'
import Glossary from '@/components/Glossary'
import Segment from '@/components/Segment'
import Chapter from '@/components/Chapter'
import copy from '@/constants/copy/home'
import Projects from '@/components/Projects'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
        <Image className='hidden md:block px-6 md:px-10' width={1300} height={300} alt="Computer in a bed of flowers" src='/img/l1f-image-1.png'></Image>
        <Image className='md:hidden w-full px-6 md:px-10' width={400} height={300} alt="Computer in a bed of flowers" src='/img/l1f-image-1-mobi.png'></Image>
        <div className='w-full px-6 md:px-10'>
            <div className='mt-2 mb-12 font-mono text-2xl leading-8'><div className='font-mono leading-6 flex flex-wrap space-x-1 '><h6 className='mr-1'>THE REALIZATION</h6> <h6 className='text-smoke50'> OF A DECENTRALIZED</h6><h6 className='text-smoke50'> ECONOMY ON BITCOIN</h6></div></div>
            <h1 className='font-suisse advancing border-b pb-8 mb-6 md:max-w-5xl text-4xl'>Advancing the development of <em className='metaprotocols font-sans'>Metaprotocols</em> on Bitcoin.</h1>
            <Glossary />
        </div>
        <Segment bg=" md:pt-2 md:pb-10">
            <Chapter chapter={copy.home.chapter0} />
        </Segment>
        <Segment bg='bg-smoke10' id="mission">
            <Chapter chapter={copy.home.chapter1}/>
        </Segment>
        <Segment bg="pt-8" scroll={false} id="partners">
            <Chapter chapter={copy.home.chapter2} />
        </Segment>
        <Projects /> 
        <Segment bg="" scroll={false} title='THE FOLLOWING PROJECTS ARE KEY PRIORITIES FOR L1F IN 2024 AND BEYOND:'>
            <Chapter chapter={copy.home.chapter3}/>
        </Segment>
        <Segment bg="" scroll={false}>
            <Chapter chapter={copy.home.chapter4}/>
        </Segment>
        <Segment bg="md:pb-32" scroll={false}>
            <Chapter chapter={copy.home.chapter5}/>
        </Segment>
    </div>
  )
}
