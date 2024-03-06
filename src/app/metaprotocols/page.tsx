"use client";

import React from "react";
import Glossary from "@/components/Glossary";
import Segment from "@/components/Segment";
import Chapter from "@/components/Chapter";
import Projects from "@/components/Projects";
import copy from "@/constants/copy/BRC20";
import Image from "next/image";
import Background from "@/components/Background";

export default function BRC20() {
    const glossContent = {
        chapters: [
            {
                heading: "LAYER 1 FOUNDATION GOVERNANCE FOR THE BRC20 PROTOCOL",
            },
        ],
    };
    return (
        <div className="flex flex-col items-center">
            <Image
                className="hidden sm:block px-4 md:px-10"
                width={1300}
                height={300}
                alt="Layer 1 Foundations Tools"
                src="/img/BRC20-dt.png"
            />
            <Image
                className="sm:hidden px-4 md:px-10"
                width={800}
                height={200}
                alt="Layer 1 Foundation Tools"
                src="/img/BRC20-mobi.png"
            />

            <Background>
                <div className="w-full px-6 md:px-10">
                    <div className="mt-2 mb-8 font-mono text-2xl leading-8 border-b">
                        <h6 className="font-mono leading-6">
                            METAPROTOCOLS{" "}
                            <code className="opacity-50">IN BITCOIN</code>
                        </h6>
                        <h1 className="font-suisse advancing pb-8 mb-6 md:max-w-lg mt-8">
                            Protocol Governance For BRC20
                        </h1>
                    </div>
                    <Glossary
                        content={glossContent}
                        showChapters={false}
                    ></Glossary>
                </div>
            </Background>

            <Segment className={"mb-20"}>
                <Chapter chapter={copy.BRC20.chapter0}></Chapter>
            </Segment>
            <Segment scroll={false} className="w-full">
                <Chapter chapter={copy.BRC20.chapterTeam}></Chapter>
            </Segment>
            <Segment scroll={false} bg={"bg-smoke10"}>
                <Chapter chapter={copy.BRC20.chapter1}></Chapter>
            </Segment>
            <Segment>
                <Chapter chapter={copy.BRC20.chapter2}></Chapter>
            </Segment>
            <Segment>
                <Chapter chapter={copy.BRC20.chapter3}></Chapter>
            </Segment>
            <Segment>
                <Chapter chapter={copy.BRC20.chapter4}></Chapter>
                <Projects></Projects>
            </Segment>
        </div>
    );
}
