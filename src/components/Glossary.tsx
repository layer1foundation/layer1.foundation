"use client";

import React from "react";
import Link from "next/link";
import { INTERNAL_LINKS, EXTERNAL_LINKS } from "@/constants/links";

interface GlossaryProps {
    content?: any;
    showChapters?: boolean;
}

const GLOSSARY_ITEMS = [
    {
        text: "00 / OVERVIEW",
        link: INTERNAL_LINKS.home.overview,
    },
    {
        text: "01 / MISSION",
        link: INTERNAL_LINKS.home.mission,
    },
    {
        text: "02 / PARTNERS",
        link: INTERNAL_LINKS.home.partners,
    },
    {
        text: "03 / PROTOCOL GOVERNANCE",
        link: INTERNAL_LINKS.home.governance,
    },
    {
        text: "04 / PUBLIC TOOLING FOR DEVELOPERS",
        link: INTERNAL_LINKS.home.tools,
    },
    {
        text: "05 / DEVELOPMENT DISCOURSE FORUM",
        link: INTERNAL_LINKS.home.forum,
    },
];

export default function Glossary({
    content,
    showChapters = true,
}: GlossaryProps) {
    return (
        <div className="flex flex-col w-full md:flex-row justify-between md:justify-start ">
            {content?.heading ? (
                <h6 className="text-smoke50 mb-8 font-mono">
                    {content.heading}
                </h6>
            ) : null}
            <div className="md:w-1/3 text-smoke40 font-mono mb-12">
                {content?.chapters ? (
                    content.chapters.map((chapter: any, i: number) => {
                        return (
                            <h6
                                key={i}
                                className="flex justify-between md:mr-20"
                            >
                                {chapter.heading}
                            </h6>
                        );
                    })
                ) : showChapters ? (
                    <div>
                        {GLOSSARY_ITEMS.map((g, i) => (
                            <Link href={g.link} key={`glossary-item-${i}`}>
                                <h6 className="md:text-xs transition duration-150 hover:text-neutral-500">
                                    {g.text}
                                </h6>
                            </Link>
                        ))}
                    </div>
                ) : null}
            </div>
            <div className="md:w-1/3 space-y-3">
                <Link
                    href={EXTERNAL_LINKS.gitbook}
                    className="flex justify-between font-mono"
                >
                    GITHUB
                    <img src="/icons/arrow-top-right.svg" />
                </Link>
                <Link
                    href={INTERNAL_LINKS.tools.page}
                    className="flex justify-between font-mono"
                >
                    TOOLS
                    <img src="/icons/arrow-top-right.svg" />
                </Link>
                <Link
                    href={EXTERNAL_LINKS.forum}
                    className="flex justify-between font-mono"
                >
                    FORUM
                    <img src="/icons/arrow-top-right.svg" />
                </Link>
            </div>
        </div>
    );
}
