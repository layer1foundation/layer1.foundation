import React from "react";
import Link from "next/link";
import links from "@/constants/links";
import Image from "next/image";
import LINKS from "@/constants/links";

export default function MobileNav() {
    return (
        <nav className="flex flex-col text-left pl-4 space-y-3 !mt-0">
            <Link href={LINKS.mission} className="font-mono text-xl w-fit p-1">
                MISSION
            </Link>
            <Link href={LINKS.metaprotocols} className="font-mono text-xl w-fit p-1">
                METAPROTOCOLS
            </Link>
            <Link href={LINKS.tools} className="font-mono text-xl w-fit p-1">
                TOOLS
            </Link>
            <Link href={LINKS.partners} className="font-mono text-xl w-fit p-1">
                PARTNERS
            </Link>
            {/* <Link href="/blog" className="font-mono text-xl w-fit p-1">
        BLOG
      </Link> */}
            <div>
                <div className="mt-16 mb-10">
                    <p className="mb-4 text-lg font-mono md:mr-10">SOCIAL</p>
                    <ul>
                        <li className=" text-smoke50 font-mono mb-4">
                            <Link href={links.twitter}>X.COM</Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="mb-4 text-lg font-mono">CONTACT</p>
                    <ul>
                        <li className=" text-smoke50 font-mono mb-4">
                            <Link href={links.email}>INFO@L1F.XYZ</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-52 mt-16 md:mt-0 md:mr-12">
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
