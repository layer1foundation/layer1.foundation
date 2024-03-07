"use client";

import React, { useEffect, useState } from "react";
import { fetchBlogs, type IBlog } from "@/actions/fetchBlogs";
import Post from "@/components/Post";
import Segemnt from "@/components/Segment";
import Chapter from "@/components/Chapter";
import copy from "@/constants/copy/BRC20";
import Wrapper from "@/components/Background";

export default function ResolutionPage() {
    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {
        fetchBlogs().then(setBlogs);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <Wrapper>
                {Array.isArray(blogs) &&
                    blogs.map(blog => (
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
