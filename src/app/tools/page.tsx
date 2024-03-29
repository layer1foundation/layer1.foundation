import React from "react";
import Glossary from "@/components/Glossary";
import Segment from "@/components/Segment";
import Chapter from "@/components/Chapter";
import Tool from "@/components/Tool";
import copy from "@/constants/copy/tools";
import Image from "next/image";
import Background from "@/components/Background";
import { getIdFromLink, IMAGES, INTERNAL_LINKS } from "@/constants/links";

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
                // src="/img/tools-dt.png"
                src={IMAGES.tools.desktop}
            />
            <Image
                className="md:hidden px-4 md:px-10"
                width={400}
                height={300}
                alt="Layer 1 Foundation Tools"
                // src="/img/tools-mobi.png"
                src={IMAGES.tools.mobile}
            />

            <Background>
                <div className="w-full px-4 md:px-10">
                    <div className="mt-2 mb-8 font-mono text-2xl leading-8 border-b">
                        <h6 className="font-mono leading-6">
                            BUILDING THE TOOLS{" "}
                            <code className="opacity-50">
                                FOR A BITCOIN ECOSYSTEM
                            </code>
                        </h6>
                        <h1 className="font-suisse advancing pb-8 mb-6 md:max-w-lg mt-8">
                            Public Tooling For{" "}
                            <em className="metaprotocols font-melior  text-[46px] md:text-[52px]">
                                Users &
                            </em>{" "}
                            <em className="font-melior  text-[46px] md:text-[52px]">
                                Builders
                            </em>
                        </h1>
                    </div>

                    <Glossary content={glossContent} showChapters={false} />
                </div>
            </Background>

            <Segment>
                <Chapter chapter={copy.tools.chapter0}></Chapter>
            </Segment>
            <Segment>
                <Chapter chapter={copy.tools.chapter1}></Chapter>
                <Image
                    alt="tools hero"
                    src="/img/tools-hero-mobi.svg"
                    width={500}
                    height={300}
                    className="flex md:hidden px-6"
                />
                <Image
                    alt="tools hero"
                    src="/img/tools-hero-dt.svg"
                    width={1300}
                    height={300}
                    className="hidden md:flex  px-10"
                />
            </Segment>
            <Segment scroll={false} bg="bg-smoke10" className="lg:py-8">
                <Chapter chapter={copy.tools.chapter2}></Chapter>
            </Segment>

            {/* Logic */}
            <div id={getIdFromLink(INTERNAL_LINKS.tools.logic)} />
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.metashrew)}
            >
                <Tool tool={copy.tools.tool1}></Tool>
                <Chapter chapter={copy.tools.chapterMeta}></Chapter>
            </Segment>
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.sandshrew)}
            >
                <Chapter chapter={copy.tools.chapterSand}></Chapter>
            </Segment>

            {/* Indexer */}
            <div id={getIdFromLink(INTERNAL_LINKS.tools.indexer)} />
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.opi)}
            >
                <Tool tool={copy.tools.tool2}></Tool>
                <Chapter chapter={copy.tools.chapterOpi}></Chapter>
            </Segment>
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.unisat)}
            >
                <Chapter chapter={copy.tools.chapterUnisat}></Chapter>
            </Segment>

            {/* Inscriber */}
            <div id={getIdFromLink(INTERNAL_LINKS.tools.inscriber)} />
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.chisel)}
            >
                <Tool tool={copy.tools.tool3}></Tool>
                <Chapter chapter={copy.tools.chapterChisel}></Chapter>
            </Segment>
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.ordinalsbot)}
            >
                <Chapter chapter={copy.tools.chapterOrdinalsBot}></Chapter>
            </Segment>

            {/* Explorer */}
            <div id={getIdFromLink(INTERNAL_LINKS.tools.explorer)} />
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb:0"
                id={getIdFromLink(INTERNAL_LINKS.tools.ordiscan)}
            >
                <Tool tool={copy.tools.tool4}></Tool>
                <Chapter chapter={copy.tools.chapterScan}></Chapter>
            </Segment>
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.ordio)}
            >
                <Chapter chapter={copy.tools.chapterOrdIo}></Chapter>
            </Segment>
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.bestinslot)}
            >
                <Chapter chapter={copy.tools.chapterBestinslot}></Chapter>
            </Segment>

            {/* Wallet */}
            <div id={getIdFromLink(INTERNAL_LINKS.tools.wallet)} />
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.oyl)}
            >
                <Tool tool={copy.tools.tool5}></Tool>
                <Chapter chapter={copy.tools.chapterOYL} />
            </Segment>
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.unisatwallet)}
            >
                <Chapter chapter={copy.tools.chapterUnisatWallet} />
            </Segment>
            <Segment
                scroll={false}
                className="border-b mb-20 md:mb-0"
                id={getIdFromLink(INTERNAL_LINKS.tools.xverse)}
            >
                <Chapter chapter={copy.tools.chapterXverse} />
            </Segment>
        </div>
    );
}
