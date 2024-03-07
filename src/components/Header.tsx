"use client";

import React, { useState } from "react";
import Link from "next/link";
import RightDrawer from "./RightDrawer";
import MobileNav from "./MobileNav";
import Donate from "./Donate";
import { INTERNAL_LINKS } from "../constants/links";
import Image from "next/image";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [donateOpen, setDonateOpen] = useState(false);

    return (
        <header className="pt-3 pb-6 px-4 md:px-10 md:pt-4 md:pb-2 w-full">
            <div className="d-fex flex-col ">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="">
                        <div className=" flex justify-between md:block">
                            <Link href={INTERNAL_LINKS.home.page}>
                                <img
                                    src="/img/l1f-logo-default.svg"
                                    width="176"
                                    height="24"
                                    className="pb-6 md:pb-0"
                                ></img>
                            </Link>
                            <div
                                onClick={() => {
                                    setNavOpen(!navOpen);
                                }}
                                className="md:hidden cursor-pointer"
                            >
                                <img src="/icons/bars-two.svg" />
                            </div>
                        </div>
                        <RightDrawer open={navOpen} setIsOpen={setNavOpen}>
                            <MobileNav />
                        </RightDrawer>
                    </div>
                    <div
                        className="hidden border border-dark md:flex space-x-3 px-16 py-2 items-center justify-center font-mono cursor-pointer transition duration-150 hover:bg-neutral-100"
                        onClick={() => {
                            setDonateOpen(!donateOpen);
                        }}
                    >
                        <Image
                            alt="arrow top left"
                            width={100}
                            height={100}
                            src="/icons/arrow-top-left.svg"
                            className="w-3"
                        />{" "}
                        <h6>DONATE</h6>
                    </div>
                    <Link
                        href={INTERNAL_LINKS.donate.page}
                        className="md:hidden border border-dark flex space-x-3 px-16 py-2 items-center justify-center font-mono cursor-pointer"
                    >
                        <Image
                            alt="arrow top left"
                            width={100}
                            height={100}
                            src="/icons/arrow-top-left.svg"
                            className="w-3"
                        />{" "}
                        <h6>DONATE</h6>
                    </Link>
                    <RightDrawer open={donateOpen} setIsOpen={setDonateOpen}>
                        <Donate />
                    </RightDrawer>
                </div>
                <nav className="gap-3 space-x-14 hidden md:flex font-mono">
                    <Link
                        href={INTERNAL_LINKS.home.mission}
                        className="transition duration-150 hover:text-neutral-600"
                    >
                        MISSION
                    </Link>
                    <Link
                        href={INTERNAL_LINKS.brc20.page}
                        className="transition duration-150 hover:text-neutral-600"
                    >
                        BRC20
                    </Link>
                    <Link
                        href={INTERNAL_LINKS.tools.page}
                        className="transition duration-150 hover:text-neutral-600"
                    >
                        TOOLS
                    </Link>
                    <Link
                        href={INTERNAL_LINKS.home.partners}
                        className="transition duration-150 hover:text-neutral-600"
                    >
                        PARTNERS
                    </Link>
                    {/* <Link href="/blog" className="transition duration-150 hover:text-neutral-600">
            BLOG
          </Link> */}
                </nav>
            </div>
        </header>
    );
}
