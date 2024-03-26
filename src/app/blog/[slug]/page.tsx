"use client";

import React from "react";
import Wrapper from "@/components/Background";
import Post from "@/components/Post";
import { BlogPostProvider } from "@/stores/post";
import { useBlogPost } from "@/stores/post";
import Segment from "@/components/Segment";
import Chapter from "@/components/Chapter";
import copy from "@/constants/copy/BRC20";

export default async function page({ params }: { params: { slug: string } }) {
    console.log("SLUG IN COMPONENT:", params.slug)
    return (
        <BlogPostProvider slug={params.slug}>
            <PageContent />
            <Segment scroll={false} className="pt-10">
                <Chapter chapter={copy.BRC20.chapter2}></Chapter>
            </Segment>
            <Segment scroll={false} className="pt-10">
                <Chapter chapter={copy.BRC20.chapter3}></Chapter>
            </Segment>
        </BlogPostProvider>
    );
}

function PageContent() {
    const { post, loading } = useBlogPost();
    console.log("POST:", post, "LOADING:", loading)
    return !loading ? (
        <Wrapper className="flex flex-col justify-center items-center md:max-w-none bg-gradient-to-b from-light to-smoke10">
            <Post post={post.attributes} />
        </Wrapper>
    ) : (
        <Wrapper className="flex flex-col justify-center items-center md:max-w-none bg-gradient-to-b from-light to-smoke10">
            <Post loading={true} />
        </Wrapper>
    );
}
