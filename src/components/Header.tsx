"use client";

import React, { useState } from "react";
import Link from "next/link";
import RightDrawer from "./RightDrawer";
import MobileNav from "./MobileNav";
import Donate from "./Donate";
import { EXTERNAL_LINKS, INTERNAL_LINKS } from "../constants/links";
import Image from "next/image";
import { Fragment } from "react";
import { Transition } from '@headlessui/react'
import { useWindow } from "@/hooks/window";

const NAV_LINKS = [
    {
        text: "MISSION",
        link: INTERNAL_LINKS.home.mission,
    },
    {
        text: "BRC20",
        link: INTERNAL_LINKS.brc20.page,
    },
    {
        text: "TOOLS",
        link: INTERNAL_LINKS.tools.page,
    },
    {
        text: "PARTNERS",
        link: INTERNAL_LINKS.home.partners,
    },
    {
        text: "DOCS",
        link: EXTERNAL_LINKS.gitbook,
    },
];

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [donateOpen, setDonateOpen] = useState(false);
    const { scrollY } = useWindow();

    console.log(scrollY)

    return (
        <Fragment>
        <header className="pt-3 pb-6 px-4 md:px-10 md:pt-4 md:pb-2 w-full">
            <div className="d-fex flex-col ">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className=" flex justify-between md:block">
                            <Link href={INTERNAL_LINKS.home.page}>
                                <img
                                    src="/img/l1f-logo-default.svg"
                                    width="176"
                                    height="24"
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
                            <MobileNav items={NAV_LINKS} />
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
                    {NAV_LINKS.map((l, i) => (
                        <Link
                            key={`desktop-nav-${i}`}
                            href={l.link}
                            className="transition duration-150 hover:text-neutral-600"
                        >
                            {l.text}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>

              {/* Batman Nav mobile */}
      <Transition
        show={scrollY > 500}
        enter="transform transition ease-in-out duration-500"
        enterFrom="-translate-y-48"
        enterTo="translate-y-0"
        leave="transform transition ease-in-out duration-500"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-48"
        className="fixed z-[999] top-0 left-0 mx-auto w-full bg-white shadow-md md:hidden"
      >
                <header className="pt-3 pb-3 px-4 md:px-10 md:pt-4 w-full max-w-7xl mx-auto">
            <div className="d-fex flex-col ">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-3 md:mb-0">
                        <div className=" flex justify-between md:block">
                            <Link href={INTERNAL_LINKS.home.page}>
                                <img
                                    src="/img/l1f-logo-default.svg"
                                    width="176"
                                    height="24"
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
                            <MobileNav items={NAV_LINKS} />
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
                    {NAV_LINKS.map((l, i) => (
                        <Link
                            key={`desktop-nav-${i}`}
                            href={l.link}
                            className="transition duration-150 hover:text-neutral-600"
                        >
                            {l.text}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
      </Transition>
        </Fragment>
    );
}
