import React from 'react'

export default function Projects() {
  return (
    <div className='grid grid-cols-1 w-full py-12 md:grid-cols-3 px-6 md:px-10'>

        <a href="https://bestinslot.xyz/" className='flex flex-col h-80  items-center justify-center border relative hover:border-2 hover:border-dark group'>
            <div className='hidden absolute top-0 group-hover:flex justify-between w-full pr-4 pl-6'>
                <div className='flex justify-start items-center'>
                    <img className='m-auto scale-50' src='/img/chest.jpg'/>
                    <p className='font-mono'>BEST IN SLOT</p>
                </div>
                <img src='/arrow-top-right.svg'/>
            </div>
            <img className='m-auto group-hover:hidden' src='/img/chest.jpg'/>
            <div className='hidden absolute bottom-0 left-0 pb-3 pl-10 group-hover:block'>
                <p className='font-mono'>THE BEST ORDINALS [AGGREGATOR]</p>
                <p className='font-mono w-52 pt-4'>BUILDING WEB3 ON BITCOIN ONE PSBT* AT A TIME</p>
            </div>
        </a>

        <a href="https://www.oyl.io/" className='flex flex-col h-80  items-center justify-center border relative hover:border-2 hover:border-dark group'>
            <div className='hidden absolute top-0 group-hover:flex justify-between w-full pr-4 pt-4'>
                <div className='flex justify-start items-center '>
                    <img className='scale-50 w-32 ml-0' src='/img/OYL.svg'/>
                    <p className='font-mono'>OYL</p>
                </div>
                <img src='/arrow-top-right.svg'/>
            </div>
            <img className='m-auto group-hover:hidden' src='/img/OYL.svg'/>
            <div className='hidden absolute bottom-0 left-0 pb-3 pl-10 group-hover:block'>
                <p className='font-mono'>Text for OYL</p>
                <p className='font-mono w-52 pt-4'>More Text for OYL</p>
            </div>
        </a>

        <a href="https://www.okx.com/" className='flex flex-col h-80 items-center justify-center border relative hover:border-2 hover:border-dark group'>
            <div className='hidden absolute top-0 group-hover:flex justify-between w-full pr-4 pt-4'>
                <div className='flex items-center'>
                <img className='m-auto scale-50 w-32' src='/img/OKX.svg'/>
                <p className='font-mono'>OKX</p>
                </div>
                <img src='/arrow-top-right.svg'/>
            </div>
            <img className='m-auto group-hover:hidden' src='/img/OKX.svg'/>
            <div className='hidden absolute bottom-0 left-0 pb-3 pl-10 group-hover:block'>
                <p className='font-mono'>Text for OKX</p>
                <p className='font-mono w-52 pt-4'>More text for OKX</p>
            </div>
        </a>
        <a href="https://www.allium.so/" className='flex flex-col h-80 items-center justify-center border relative hover:border-2 hover:border-dark group'>
            <div className='hidden absolute top-0 group-hover:flex justify-between w-full pr-4 pt-4'>
                <div className='flex items-center'>
                <img className='m-auto scale-50 w-32' src='/img/allium.svg'/>
                <p className='font-mono'>Text for Allium</p>
                </div>
                <img src='/arrow-top-right.svg'/>
            </div>
            <img className='m-auto group-hover:hidden' src='/img/allium.svg'/>
            <div className='hidden absolute bottom-0 left-0 pb-3 pl-10 group-hover:block'>
                <p className='font-mono'>Text for Allium</p>
                <p className='font-mono w-52 pt-4'>More text for Allium</p>
            </div>
        </a>
        <a href="https://www.hiro.so/" className='flex flex-col h-80 items-center justify-center border relative hover:border-2 hover:border-dark group'>
            <div className='hidden absolute top-0 group-hover:flex justify-between w-full pr-4 pt-4'>
                <div className='flex items-center'>
                <img className='m-auto scale-50 w-32' src='/img/hiro.svg'/>
                <p className='font-mono'>Text for Hiro</p>
                </div>
                <img src='/arrow-top-right.svg'/>
            </div>
            <img className='m-auto group-hover:hidden' src='/img/hiro.svg'/>
            <div className='hidden absolute bottom-0 left-0 pb-3 pl-10 group-hover:block'>
                <p className='font-mono'>Text for Hiro</p>
                <p className='font-mono w-52 pt-4'>More text for Hiro</p>
            </div>
        </a>
        <a href="https://unisat.io/" className='flex flex-col h-80 items-center justify-center border relative hover:border-2 hover:border-dark group'>
            <div className='hidden absolute top-0 group-hover:flex justify-between w-full pr-4 pt-4'>
                <div className='flex items-center'>
                <img className='m-auto scale-50 w-32' src='/img/unisat.svg'/>
                <p className='font-mono'>Text for Unisat</p>
                </div>
                <img src='/arrow-top-right.svg'/>
            </div>
            <img className='m-auto group-hover:hidden' src='/img/unisat.svg'/>
            <div className='hidden absolute bottom-0 left-0 pb-3 pl-10 group-hover:block'>
                <p className='font-mono'>Text for Unisat</p>
                <p className='font-mono w-52 pt-4'>More text for Unisat</p>
            </div>
        </a>
    </div>
  )
}
