'use client';

import React from 'react'
import { IBlogPostAttributes } from "@/actions/fetch-blog";
import { EXTERNAL_LINKS } from "@/constants/links";
import Link from 'next/link';
import ReactMarkedown from 'react-markdown';
import Button from './Button';
import Image from 'next/image';
import { Author } from './Author';
import { estimateReadingTime } from '@/helpers/readtime';


export default function Preview({ post, page, id }: { post?: IBlogPostAttributes, page?:any, id?:number}) {
    
    const imageUrl = post?.cover?.data?.attributes?.formats?.large?.url 
        ? `${EXTERNAL_LINKS.strapi}${post?.cover?.data?.attributes?.formats?.large?.url}` 
        : "/apple-touch-icon.png";
    const backupImageUrl = "/apple-touch-icon.png";
    const author = post?.author ? post?.author : "Anon";
    const avatar = post?.author_avatar?.data?.attributes?.url ? `${EXTERNAL_LINKS.strapi}${post.author_avatar.data.attributes.url}` : '/apple-touch-icon.png';
    let date = post?.publishedAt
    typeof date === "string" ? ( date = new Date(date)) : post?.publishedAt;
    const formattedDate = date?.toLocaleDateString('en-US', {
        month: 'short', // "short" for abbreviated month name (e.g., "Feb")
        day: 'numeric', // "numeric" for numeric day of the month
        year: 'numeric' // "numeric" for four digit year
      });
    const slug = post?.title.toLowerCase().split(' ').join('-')
    const readtime = post?.content ? estimateReadingTime(post?.content) : 1;

  return (
    post ? (
    <div className='flex max-w-7xl md:items-center space-x-10 md:py-4 py-4 w-full border-b border-smoke20 justify-between'>
        <div className='md:space-y-6 space-y-3'>
            <h2 className=''>{post.title}</h2>
            <div className='hidden md:flex flex-col preview overflow-hidden overflow-ellipsis max-h-20 font-mono text-smoke50'>
                <ReactMarkedown>{post.content}</ReactMarkedown>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:items-center gap-4">
                <Button text={"READ MORE"} grow={false} className='w-32' link={`/blog/${slug}`}></Button>
                <Author img={avatar} name={author} readtime={readtime.toString()} description={""} date={post.publishedAt ? post.publishedAt : ""} preview={true}/>
            </div>
        </div>
        <Image 
            className='w-24 h-24 md:h-40 md:w-40 object-cover object-center' 
            onError={(e) => { 
                const target = e.target as HTMLImageElement
                target.onerror = null; 
                target.src = backupImageUrl; 
             }}
             width={300}
             height={300}
            src={imageUrl} 
            alt="L1F blog post"  
        />
    </div> 
    // ) : (
    // <div className='flex max-w-7xl items-center space-x-10 md:py-4 py-4 w-full border-b border-smoke20 justify-between'>
    //     <div>
    //         <h2 className=''>{page.title}</h2>
    //         <div className='hidden md:flex preview overflow-hidden overflow-ellipsis h-24 font-mono text-smoke50'>
    //             <ReactMarkedown>{page.description ? page.description : page.phases[0].purpose}</ReactMarkedown>
    //         </div>
    //         <Button text={"READ MORE"} grow={false} className='w-32 mt-4' link={`/blog/${id}`}></Button>
    //     </div>
    //     <img className='w-24 h-24 md:h-40 md:w-40 object-cover object-center' src={imageUrl} alt="L1F blog post"  />
    // </div>
    // )
    ) : null
  )
}
