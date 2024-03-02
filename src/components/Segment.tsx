import React, {ReactNode} from 'react'

interface SegmentProps {
    children: ReactNode;
    bg?: string;
    scroll?: boolean;
    title?: string;
  }

export default function Segment({ children, bg, scroll = true, title }: SegmentProps) {
  return (
    <div className={bg}>
        { scroll ? <div className='flex justify-end pb-2 pt-12 text-smoke60 border-b border-smoke20'><p>SCROLL TO EXPLORE</p></div> : null}
        {title ? <div className='md:flex md:justify-between'><div></div><h6 className='border-b border-smoke20 pb-10 text-smoke60 leading-7 font-mono md:w-2/3'>{title}</h6></div> : null}
        <div className='pt-8 pb-6'>
        {children}
        </div>
    </div>
  )
}
