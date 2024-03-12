'use client';

import React from 'react'
import { IBlogPostAttributes } from "@/actions/fetch-blog";
import { EXTERNAL_LINKS } from "@/constants/links";
import Link from 'next/link';


export default function Preview({ post, page, id }: { post?: IBlogPostAttributes, page?:any, id?:number}) {
    
    const imageUrl = post?.cover ? `${EXTERNAL_LINKS.strapi}${post.cover.data.attributes.formats.large.url}`: "/favicon-32x32.png";

  return (
    post ? (
    <Link href={`/blog/${id}`} className='flex h-52 max-w-4xl items-center space-x-10 md:py-4 py-4 px-2 w-full border-b border-soke40'>
        <div>
            <h2 className='pb-4'>{post.title}</h2>
            <h6 className='overflow-hidden overflow-ellipsis h-24 font-mono text-smoke50'>{post.description}</h6>
        </div>
        <img className='w-40 h-40 object-cover object-center' src={imageUrl} alt="L1F blog post"  />
    </Link>
    ) : (
    <a className='flex h-52 max-w-4xl items-center space-x-10 md:py-4 py-4 px-2 w-full border-b border-soke40'>
        <div>
            <h2 className='pb-4'>{page.title}</h2>
            <h6 className='overflow-hidden overflow-ellipsis h-24 font-mono text-smoke50'>{page.description ? page.description : page.phases[0].purpose}</h6>
        </div>
        <img className='w-40 h-40 object-cover object-center' src={imageUrl} alt="L1F blog post"  />
    </a>
    )
  )
}
