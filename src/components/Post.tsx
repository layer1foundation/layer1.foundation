import React, { useEffect, useState } from "react";
import { EXTERNAL_LINKS } from "@/constants/links";
import { IBlogPostAttributes } from "@/lib/cms";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Author } from "./Author";
import { estimateReadingTime } from "@/helpers/readtime";

export default function Post({
    post,
    loading,
}: {
    post?: IBlogPostAttributes;
    loading?: boolean;
}) {
    const author = post?.author;
    const defaultAvatarUrl = post?.author_avatar?.data?.attributes?.url
        ? `${EXTERNAL_LINKS.strapi}${post.author_avatar.data.attributes.url}`
        : "/apple-touch-icon.png";
    const avatar = post?.author_avatar_url
        ? `${post.author_avatar_url}`
        : defaultAvatarUrl;
    const readTime = estimateReadingTime(post?.content);
    const defaultImageUrl = post?.cover?.data?.attributes?.formats?.large?.url
        ? `${EXTERNAL_LINKS.strapi}${post?.cover?.data?.attributes?.formats?.large?.url}`
        : "/img/blog-img-1.png";
    const [imageUrl, setImageUrl] = useState(defaultImageUrl);

    useEffect(() => {
        if (post?.cover_url) setImageUrl(post?.cover_url);
    }, [JSON.stringify(post)]);

    return !loading ? (
        <div className="w-full px-4 md:px-10 max-w-7xl post font-suisse">
            <div className="w-full">
                {imageUrl ? (
                    <div className="w-full h-64 md:h-96 overflow-hidden relative">
                        <Image
                            src={imageUrl}
                            alt="L1F Blog Post"
                            onError={(e: any) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = defaultImageUrl;
                            }}
                            width={1300}
                            height={300}
                            className="absolute h-full w-full object-cover object-center"
                        />
                    </div>
                ) : null}
                <div className="md:px-48 py-6">
                    <div className=" ">
                        <h1 className="mt-8 font-suisse">{post?.title}</h1>
                        <Author
                            img={avatar}
                            name={author ? author : "Anon"}
                            description={
                                post?.description ? post?.description : "L1F"
                            }
                            readtime={readTime.toString()}
                            date={post?.publishedAt ? post.publishedAt : ""}
                        />
                    </div>
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        className="mt-10"
                    >
                        {post?.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    ) : (
        <div className="w-full px-4 md:px-10 max-w-7xl post font-suisse">
            <div className="w-full">
                <div className="w-full h-64 md:h-96 overflow-hidden relative">
                    <div className="absolute h-full w-full object-cover object-center bg-smoke30 shimmer "></div>
                </div>
                <div className="md:px-48 py-6">
                    <div className="border-b border-smoke20 mb-12">
                        <h1 className="mt-8 w-96 rounded-lg h-12 bg-smoke30 shimmer"></h1>
                        <h4 className="my-5 w-60 rounded-lg h-6 bg-smoke30 shimmer"></h4>
                        <div className="flex flex-col-reverse md:flex-row md:items-center gap-4 mb-9 mt-12">
                            <div className="flex">
                                <div className="h-12 w-12 rounded-full bg-smoke30 shimmer"></div>
                                <div className="gap-1 flex flex-col justify-center ml-4">
                                    <h6 className="w-20 h-2 bg-smoke30 shimmer"></h6>
                                    <h6 className="w-48 h-2 bg-smoke30 shimmer"></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className={`flex mb-10 gap-4 ${i % 3 === 0 ? "flex-col-reverse" : "flex-col"}`}
                        >
                            <div className="w-4/5 h-6 bg-smoke30 rounded-md shimmer"></div>
                            <div className="w-2/3 h-6 bg-smoke30 rounded-md shimmer"></div>
                            <div className="w-full h-6 bg-smoke30 rounded-md shimmer"></div>
                            <div className="w-2/3 h-6 bg-smoke30 rounded-md shimmer"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
