import React, {ReactNode} from 'react'

interface Paragraph {
    text: string;
    bullets?: string[];
    color?: string;
  }

export default function Chapter({chapter, children}: {chapter: any, children?: React.ReactNode}) {
  return (
    <div className='flex flex-col'>
    <h6 className='text-smoke50 mb-5 font-mono'>{chapter.heading}</h6>
    {chapter.subsection1 ? 
    <div>
        <h6 className='text-smoke50 mb-8 font-mono'>{chapter.subsection1.title}</h6>
        {chapter.subsection1.paragraphs ? 
            <ul className=''>
                {chapter.subsection1.paragraphs.map((p: Paragraph, i: number) => {
                    return <li key={i} className={`leading-8 mb-8 font-suisse ${p.color ? p.color : null}`}><h3>{p.text}</h3> {p.bullets ? <ul className='list-disc pl-5 mt-8'> {p.bullets.map((bullet)=>{
                        return <li key={i} className='text-smoke40 mb-6 font-sans'><h3 key={i}>{bullet}</h3></li>
                    })}</ul> : null}</li>
                })}
            </ul> : null 
        }
        {
            chapter.subsection1.footer ? 
            chapter.subsection1.footer.map((p:string, i:number)=>{
                return <h3 className='text-smoke40 mb-8 font-suisse'>{p}<a href='/' className='text-smoke70 text-xl'> click here</a></h3>
            }) : null
        }
        {
            chapter.subsection1.links ?
            <div className='w-full flex justify-start space-x-2'>
                {
                    chapter.subsection1.links.map((l: {name: string, link: string, grow:boolean}, k: number) => {
                        return (
                            
                                <a key={k} href={l.link} className={`text-dark flex items-center border-2 border-dark rounded-full justify-center py-3 space-x-4 hover:bg-black hover:text-light ${l.grow ? "flex-grow" : null}`}>
                                    <img className='pl-2' src="/fan-left.svg"/>
                                    <p className='mb-0 flex justify-center' style={{fontSize:"12px"}}>{l.name}</p>
                                    <img className='pr-2' src="/fan-right.svg" />
                                </a>
                            
                        )
                    })
                }
            </div> : null
        }
    </div>
    : null
    }
    {
        chapter.subsection2 ? 
        <div>
            <p className='text-smoke60 mb-8 font-mono'>{chapter.subsection2.title}</p>
            {chapter.subsection2.items ? 
                <ul className=''>
                    {chapter.subsection2.items.map((i: string, j: number) => {
                        return <li key={j} className=' leading-8 mb-8 font-suisse'>
                                    <h3 className={`${j === 0 ? 'text-dark' : 'text-smoke40'}`}>{i}</h3>
                                </li>
                    })}
                </ul> : null 
            }
        </div>
        : null
    }
    {children}
</div>
  )
}
