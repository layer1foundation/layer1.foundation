

import React from "react";
import { EXTERNAL_LINKS } from "@/constants/links";
import { IBlogPostAttributes } from "@/actions/fetch-blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Author } from "./Author";
import {estimateReadingTime}  from "@/helpers/readtime";


export default function Post({ post, loading }: { post?: IBlogPostAttributes, loading?:boolean }) {
    const author = post?.author;
    const avatar = post?.author_avatar?.data?.attributes?.url ? `${EXTERNAL_LINKS.strapi}${post.author_avatar.data.attributes.url}` : '/apple-touch-icon.png';
    const readTime = estimateReadingTime(post?.content);
    const largeFormatUrl = post?.cover?.data?.attributes?.formats?.large?.url ? true : false;
    const imageUrl = post?.cover?.data?.attributes?.formats?.large?.url ?`${EXTERNAL_LINKS.strapi}${post?.cover?.data?.attributes?.formats?.large?.url}` : '/img/blog-img-1.png';
    const backupImageUrl = "/img/blog-img-1.png";
    return (
        !loading ? (
        <div className="w-full px-4 md:px-10 max-w-7xl post font-suisse">
            <div className="w-full">
                    {imageUrl ? 
                    <div className="w-full h-64 md:h-96 overflow-hidden relative">
                    <img
                        src={imageUrl}
                        alt="L1F Blog Post"
                        onError={(e) => { 
                            const target = e.target as HTMLImageElement
                            target.onerror = null; 
                            target.src = backupImageUrl; 
                         }}
                        width={1300}
                        height={300}
                        className="absolute h-full w-full object-cover object-center "
                    />
                    </div> : null}
                <div className="md:px-48 py-6">
                    <div className=" ">
                        <h1 className="mt-8 font-suisse">{post?.title}</h1>
                        <Author img={avatar} name={author ? author : "Anon"} description={post?.description ? post?.description : "L1F"} readtime={readTime.toString()} date={ post?.publishedAt ? post.publishedAt : ""}/>
                    </div>
                    <ReactMarkdown remarkPlugins={[remarkGfm]} className="mt-10">{post?.content}</ReactMarkdown>
                </div>
            </div>
        </div>
        ) :(
            <div className="w-full px-4 md:px-10 max-w-7xl post font-suisse">
                <div className="w-full">
                    <div className="w-full h-64 md:h-96 overflow-hidden relative">
                        <div className="absolute h-full w-full object-cover object-center bg-smoke30 shimmer "></div>
                    </div> 
                    <div className="md:px-48 py-6">
                        <div className=" ">
                            <h1 className="mt-8 w-80 rounded-lg h-20 bg-smoke30 shimmer"></h1>
                            <h4 className="my-12 w-40 rounded-lg h-12 bg-smoke30 shimmer"></h4>
                            <div className="flex flex-col-reverse md:flex-row md:items-center gap-4 mb-20">
                                <div className='flex'>
                                    <div className='h-10 w-10 rounded-full bg-smoke30 shimmer'></div>
                                    <div className='gap-2 flex flex-col justify-center ml-8'>
                                        <h6 className='w-20 h-3 bg-smoke30 shimmer'></h6>
                                        <h6 className='w-32 h-3 bg-smoke30 shimmer'></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {Array.from({length: 20}).map((_, i) => (
                            <div className={`flex  mb-4 ${(i % 3) === 0 ? "flex-col-reverse": "flex-col"}`}>
                                <div className="w-4/5 h-4 my-4 bg-smoke30 rounded-md shimmer"></div>
                                <div className="w-2/3 h-4 my-4 bg-smoke30 rounded-md shimmer"></div>
                                <div className="w-full h-4 my-4 bg-smoke30 rounded-md shimmer"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}
