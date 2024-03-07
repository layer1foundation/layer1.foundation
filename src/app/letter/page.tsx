"use client";

import Image from "next/image";
import React from "react";
import Segemnt from "@/components/Segment";
import Chapter from "@/components/Chapter";
import Wrapper from "@/components/Background";
import lettercopy from "@/constants/copy/letter";
import brc20copy from "@/constants/copy/BRC20";
import { Author } from "@/components/Author";

export default function LetterPage() {
    const { title, image, description, content, author, date, readtime } =
        lettercopy;
    return (
        <div className="flex flex-col items-center">
            <Wrapper>
                <div className="w-full px-6 md:px-10 ">
                    <div className="w-full">
                        <div className="w-full h-64 md:h-96 overflow-hidden relative">
                            <Image
                                src={image}
                                alt="L1F Blog Post"
                                width={1300}
                                height={300}
                                className="absolute h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="md:px-24 lg:px-36 xl:px-48 py-6">
                            <div className="flex flex-col gap-6 border-b pb-8">
                                <h1 className="mt-4 font-suisse">{title}</h1>
                                <Author
                                    {...author}
                                    date={date}
                                    readtime={readtime}
                                />
                            </div>
                            <h4 className="font-suisse pt-8">
                                {description
                                    .split("\n")
                                    .map((line: any, i: number) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                            </h4>
                            <br />
                            <h4 className="font-suisee text-smoke40 pb-40">
                                {content
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
            </Wrapper>
            <Segemnt scroll={false} className="pt-10">
                <Chapter chapter={brc20copy.BRC20.chapter2}></Chapter>
            </Segemnt>
            <Segemnt scroll={false} className="pt-10">
                <Chapter chapter={brc20copy.BRC20.chapter3}></Chapter>
            </Segemnt>
        </div>
    );
}
