import React from "react";
import Image from "next/image";

export default function Post({ post }: { post: any }) {
    const imageUrl = `https://cms.l1f.xyz${post.cover.data.attributes.formats.small.url}`;
    return (
        <div className="w-full  md:px-10 ">
            <div className="w-full">
                <div className="w-full h-64 md:h-96 overflow-hidden relative">
                    <Image
                        src={imageUrl}
                        alt="L1F Blog Post"
                        width={1300}
                        height={300}
                        className="absolute h-full w-full object-cover object-center"
                    ></Image>
                </div>
                <div className="bg-smoke10 md:px-48 py-6">
                    <div className=" ">
                        <h1 className="mt-8 font-suisse">{post.title}</h1>
                        {/* AUTHOR */}
                    </div>
                    <h4 className="font-suisse pt-12 bg-smoke10">
                        {post.description
                            .split("\n")
                            .map((line: any, i: number) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                    </h4>
                    <br />
                    <h4 className="font-suisee text-smoke40 bg-smoke10 pb-40">
                        {post.content
                            .split("\n")
                            .map((line: any, i: number) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                    </h4>
                </div>
            </div>
        </div>
    );
}
