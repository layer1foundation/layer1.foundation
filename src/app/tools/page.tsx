import React from "react";
import Glossary from "@/components/Glossary";
import Segment from "@/components/Segment";
import Chapter from "@/components/Chapter";
import Tool from "@/components/Tool";
import copy from "@/constants/copy/tools";
import Image from "next/image";

export default function Tools() {
    const glossContent = {
        chapters: [
            {
                heading:
                    "LAYER 1 FOUNDATION ENABLES PUBLIC TOOLING FOR USERS AND BUILDERS",
            },
        ],
    };
    return (
        <div className="flex flex-col items-center">
            <Image
                className="hidden md:block px-4 md:px-10"
                width={1300}
                height={300}
                alt="Layer 1 Foundations Tools"
                src="/img/tools-dt.png"
            ></Image>
            <Image
                className="md:hidden px-4 md:px-10"
                width={400}
                height={300}
                alt="Layer 1 Foundation Tools"
                src="/img/tools-mobi.png"
            ></Image>
            <div className="w-full px-4 md:px-10">
                <div className="mt-2 mb-8 font-mono text-2xl leading-8 border-b">
                    <h6 className="font-mono leading-6">
                        BUILDING THE TOOLS FOR A BITCOIN ECOSYSTEM
                    </h6>
                    <h1 className="font-suisse advancing pb-8 mb-6 md:max-w-lg mt-8">
                        Public Tooling For{" "}
                        <em className="metaprotocols">Users &</em>{" "}
                        <em>Builders</em>
                    </h1>
                </div>

                {/* <p className='font-mono text-smoke40 pr-8 mb-4'>LAYER 1 FOUNDATION ENABLES PUBLIC TOOLING FOR USERS AND BUILDERS</p> */}
                <Glossary content={glossContent} showChapters={false} />
            </div>
            <Segment>
                <Chapter chapter={copy.tools.chapter0}></Chapter>
            </Segment>
            <Segment>
                <Chapter chapter={copy.tools.chapter1}></Chapter>
                <Image
                    alt="tools hero"
                    src="/img/tools-hero-mobi.svg"
                    width={400}
                    height={300}
                    className="flex md:hidden px-6"
                />
                <Image
                    alt="tools hero"
                    src="/img/tools-hero-dt.svg"
                    width={1200}
                    height={300}
                    className="hidden md:flex  px-10"
                />
            </Segment>
            <Segment scroll={false} bg="bg-smoke10">
                <Chapter chapter={copy.tools.chapter2}></Chapter>
            </Segment>
            <Segment scroll={false} bg="border-b mb-20 md:mb-0">
                <Tool tool={copy.tools.tool1}></Tool>
                <Chapter chapter={copy.tools.chapterMeta}></Chapter>
            </Segment>
            <Segment scroll={false} bg="border-b mb-20 md:mb-0">
                <Chapter chapter={copy.tools.chapterSand}></Chapter>
            </Segment>
            <Segment scroll={false} bg="border-b mb-20 md:mb-0">
                <Tool tool={copy.tools.tool2}></Tool>
                <Chapter chapter={copy.tools.chapterOpi}></Chapter>
            </Segment>
            <Segment scroll={false} bg="border-b mb-20 md:mb-0">
                <Tool tool={copy.tools.tool3}></Tool>
                <Chapter chapter={copy.tools.chapterChisel}></Chapter>
            </Segment>
            <Segment scroll={false} bg="border-b mb-20 md:mb-0">
                <Chapter chapter={copy.tools.chapterOrdinalsBot}></Chapter>
            </Segment>
            <Segment scroll={false} bg="border-b mb-20 md:mb:0">
                <Tool tool={copy.tools.tool4}></Tool>
                <Chapter chapter={copy.tools.chapterScan}></Chapter>
            </Segment>
            <Segment scroll={false} bg="border-b mb-20 md:mb-0">
                <Chapter chapter={copy.tools.chapterOrdIo}></Chapter>
            </Segment>
            <Segment scroll={false} bg="border-b mb-20 md:mb-0">
                <Tool tool={copy.tools.tool5}></Tool>
                <Chapter chapter={copy.tools.chapterOYL} />
            </Segment>
        </div>
    );
}
