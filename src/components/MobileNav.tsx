import React from "react";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/constants/links";
import Image from "next/image";

export default function MobileNav({
    items,
}: {
    items: { text: string; link: string }[];
}) {
    return (
        <nav className="flex flex-col text-left pl-4 space-y-3 !mt-0">
            {items.map((l, i) => (
                <Link key={`mobile-nav-${i}`} href={l.link} className="font-mono text-xl w-fit p-1">
                    {l.text}
                </Link>
            ))}
            <div>
                <div className="mt-16 mb-10 pl-1">
                    <p className="mb-4 text-lg font-mono md:mr-10">SOCIAL</p>
                    <ul>
                        <li className=" text-smoke50 font-mono mb-4">
                            <Link href={EXTERNAL_LINKS.twitter}>X.COM</Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-4 pl-1">
                    <p className="mb-4 text-lg font-mono">CONTACT</p>
                    <ul>
                        <li className=" text-smoke50 font-mono mb-4">
                            <Link href={"mailto:info@l1f.xyz"}>
                                INFO@L1F.XYZ
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-52 mt-16 md:mt-0 md:mr-12 pl-1">
                    <Image
                        alt="L1F logo"
                        width={400}
                        height={200}
                        src="/img/l1f-logo-default.svg"
                    />
                </div>
            </div>
        </nav>
    );
}
