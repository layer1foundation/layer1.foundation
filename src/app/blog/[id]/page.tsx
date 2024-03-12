'use client'


import React from 'react'
import Wrapper from '@/components/Background';
import Post from '@/components/Post';
import { BlogPostProvider } from '@/stores/post';
import { useBlogPost } from '@/stores/post';

export default async function page({ params }: { params: { id: string } }) {
   

    return (
        <BlogPostProvider id={params.id}>
            <PageContent />
        </BlogPostProvider>
)
        
}

function PageContent( ){
    const { post } = useBlogPost();
    console.log('POST IN PAGECONTENT', post)
    return (
        post ?
        <Wrapper className="flex flex-col justify-center items-center md:max-w-none bg-gradient-to-b from-light to-smoke10">
            <Post post={post.attributes}/>
        </Wrapper>
        : <p>loading</p>
    )
}
