"use client";

import React, {useState} from "react";
import { IBlogPostAttributes } from "@/lib/cms";
import { EXTERNAL_LINKS } from "@/constants/links";
import ReactMarkedown from "react-markdown";
import Button from "./Button";
import { Author } from "./Author";
import { estimateReadingTime } from "@/helpers/readtime";
import Image from "next/image";
import { fetchImageFromImgBB } from "@/helpers/imgbb";

export default function Preview({
    post,
    loading = false,
    id,
}: {
    post?: IBlogPostAttributes;
    id?: string | number;
    loading?: boolean;
}) {
    console.log("POST in PREVIEW", post);
    const defaultImageUrl = post?.thumbnail?.data?.attributes?.formats?.small?.url ? `${EXTERNAL_LINKS.strapi}${post?.thumbnail?.data?.attributes?.formats?.small?.url}` : "/apple-touch-icon.png"
    const [imageUrl, setImageUrl] = useState(
        post?.thumbnail_url
            ? `${post?.thumbnail_url}`
            : defaultImageUrl
    );
    const backupImageUrl = "/apple-touch-icon.png";
    const author = post?.author ? post?.author : "Anon";
    const defaultAvatarUrl =  post?.author_avatar?.data?.attributes?.url ? `${EXTERNAL_LINKS.strapi}${post.author_avatar.data.attributes.url}` : "/apple-touch-icon.png"
    const [avatar, setAvatar] = useState(
    post?.author_avatar_url
        ? `${post.author_avatar_url}`
        :defaultAvatarUrl
    );
    let date = post?.publishedAt;
    typeof date === "string" ? (date = new Date(date)) : post?.publishedAt;
    const slug = post?.title.toLowerCase().split(" ").join("-");
    const readtime = post?.content ? estimateReadingTime(post?.content) : 1;
    const handleError = (e: any) => {
        console.log("ERROR IN PREVIEW");
        setImageUrl('/apple-touch-icon.png');
    };
    const handleAvatarError = async (e: any) => {
        console.log("ERROR IN PREVIEW");
        setImageUrl(backupImageUrl);
    }

    return post && !loading ? (
        <div className="flex max-w-7xl md:items-center space-x-10 md:py-16 py-10 w-full border-b border-smoke20 justify-between">
            <div className="md:space-y-6 space-y-3">
                <h2 className="">{post.title}</h2>
                <div className="hidden md:flex flex-col preview overflow-hidden overflow-ellipsis max-h-20 font-mono text-smoke50">
                    <ReactMarkedown>{post.content}</ReactMarkedown>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:items-center gap-4">
                    <Button
                        text={"READ MORE"}
                        grow={false}
                        className="w-32"
                        link={`/blog/${slug}`}
                    ></Button>
                    <Author
                        img={avatar}
                        name={author}
                        readtime={readtime.toString()}
                        description={""}
                        date={post.publishedAt ? post.publishedAt : ""}
                        preview={true}
                    />
                </div>
            </div>
            <Image
                className="w-24 h-24 min-w-24 md:h-40 md:w-40 md:min-w-40 object-cover object-center"
                onError={handleError}
                width={300}
                height={300}
                src={imageUrl}
                alt="L1F blog post"
            />
        </div>
    ) : loading ? (
        <div className="flex max-w-7xl md:w-full md:items-center space-x-10 md:py-16 py-10 w-full border-b border-smoke20 justify-between">
            <div className="md:space-y-6 space-y-3 w-full">
                <div className="flex flex-col gap-2">
                    <h2 className="w-52 md:w-80 h-7 sm:h-10 bg-smoke30 shimmer"></h2>
                    <h2 className="sm:hidden w-52 md:w-80 h-7 sm:h-10 bg-smoke30 shimmer"></h2>
                </div>
                <div className="hidden md:flex flex-col preview font-mono text-smoke50 space-y-2 w-full">
                    <h6 className="w-1/5 h-5 bg-smoke30 shimmer"></h6>
                    <h6 className="w-full h-5 bg-smoke30 shimmer"></h6>
                    <h6 className="w-full h-5 bg-smoke30 shimmer"></h6>
                </div>
                <div className="flex flex-col-reverse md:flex-row md:items-center gap-6 md:gap-10">
                    <div className="w-32 h-10 bg-smoke30 rounded-full shimmer"></div>
                    <div className="flex">
                        <div className="hidden sm:block h-10 w-10 rounded-full bg-smoke30 shimmer"></div>
                        <div className="gap-2 flex flex-col justify-center sm:ml-2">
                            <h6 className="w-20 h-3 bg-smoke30 shimmer"></h6>
                            <h6 className="w-40 h-3 bg-smoke30 shimmer"></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-24 h-24 min-w-24 md:h-40 md:w-40 md:min-w-40 bg-smoke30 rounded-lg shimmer"></div>
        </div>
    ) : null;
}
