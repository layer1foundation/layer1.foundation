"use client";

import React from "react";
import Link from "next/link";

interface GlossaryProps {
    content?: any;
    showChapters?: boolean;
}

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
                        <h6 className="md:text-xs">00 / OVERVIEW</h6>
                        <h6 className="md:text-xs">01 / MISSION</h6>
                        <h6 className="md:text-xs">02 / PROTOCOL GOVERNANCE</h6>
                        <h6 className="md:text-xs">
                            03 / PUBLIC TOOLING FOR DEVELOPERS
                        </h6>
                        <h6 className="md:text-xs">
                            04 / DEVELOPMENT DISCOURSE FORUM
                        </h6>
                    </div>
                ) : null}
            </div>
            <div className="md:w-1/3 space-y-3">
                <Link
                    href="https://layer1.gitbook.io/layer1-foundation/foundation/purpose"
                    className="flex justify-between font-mono"
                >
                    GITHUB
                    <img src="/icons/arrow-top-right.svg" />
                </Link>
                <Link href="/tools" className="flex justify-between font-mono">
                    TOOLS
                    <img src="/icons/arrow-top-right.svg" />
                </Link>
                <Link
                    href="https://l1f.discourse.group/latest"
                    className="flex justify-between font-mono"
                >
                    FORUM
                    <img src="/icons/arrow-top-right.svg" />
                </Link>
            </div>
        </div>
    );
}
