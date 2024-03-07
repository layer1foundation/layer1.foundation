"use client";

import React from "react";
import Post from "@/components/Post";
import Segemnt from "@/components/Segment";
import Chapter from "@/components/Chapter";
import copy from "@/constants/copy/BRC20";
import Wrapper from "@/components/Background";
import { useCMS } from "@/stores/cms";

export default function LetterPage() {
    const { blogPosts } = useCMS();
    return (
        <div className="flex flex-col items-center">
            <Wrapper>
                {Array.isArray(blogPosts) &&
                    blogPosts.map(blog => (
                        <Post
                            key={`blog-post-${blog.id}`}
                            post={blog.attributes}
                        ></Post>
                    ))}
            </Wrapper>
            <Segemnt scroll={false} className="pt-10">
                <Chapter chapter={copy.BRC20.chapter2}></Chapter>
            </Segemnt>
            <Segemnt scroll={false} className="pt-10">
                <Chapter chapter={copy.BRC20.chapter2}></Chapter>
            </Segemnt>
        </div>
    );
}
