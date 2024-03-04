import React from 'react'

export default function Post({post} : {post: any}) {
    const imageUrl = `https://cms.l1f.xyz${post.cover.data.attributes.formats.small.url}`;
  return (
    <div className='w-full  bg-smoke10'>
        <div className='w-full border-b pb-10'>
        <div className='w-full h-64 overflow-hidden relative'>
            <img src={imageUrl} className='absolute h-full w-full object-cover object-center'></img>
        </div>
        <h1 className='mt-8 font-suisse'>{post.title}</h1>
        {/* AUTHOR */}
        </div>
        <h4 className='font-suisse pt-12 bg-smoke10'>
            {post.description.split('\n').map((line:any, i:number) => (
                <React.Fragment key={i}>
                {line}
                <br />
                </React.Fragment>
            ))}
        </h4>
        <br />
        <h4 className='font-suisee text-smoke40 bg-smoke10 pb-40'>
        {post.content.split('\n').map((line:any, i:number) => (
            <React.Fragment key={i}>
            {line}
            <br />
            </React.Fragment>
        ))}
        </h4>  
    </div>

  )
}
