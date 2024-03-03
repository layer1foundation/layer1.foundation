"use client";

import React, { useState } from "react";
import Link from "next/link";
import RightDrawer from "./RightDrawer";
import MobileNav from "./MobileNav";
import Donate from "./Donate";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  return (
    <header className="py-3 px-4 md:px-10 md:pt-4 md:pb-2  ">
      <div className="d-fex flex-col ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <div className=" flex justify-between md:block">
              <img
                src="/l1f-logo-default.svg"
                width="176"
                height="24"
                className="pb-6 md:pb-0"
              ></img>
              <div
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="md:hidden cursor-pointer"
              >
                <img src="/bars-two.svg" />
              </div>
            </div>
            <RightDrawer open={navOpen} setIsOpen={setNavOpen}>
                <MobileNav />
            </RightDrawer>
            
          </div>
          <div className="hidden border border-dark md:flex space-x-3 px-16 py-2 items-center justify-center font-mono cursor-pointer"
          onClick={()=>{
            setDonateOpen(!donateOpen);
          }}>
            <img src="/arrow-top-left.svg" className="w-3" /> <h6>DONATE</h6>
          </div>
          <a href="/donate" className="md:hidden border border-dark flex space-x-3 px-16 py-2 items-center justify-center font-mono cursor-pointer">
            <img src="/arrow-top-left.svg" className="w-3" /> <h6>DONATE</h6>
          </a>
          <RightDrawer open={donateOpen} setIsOpen={setDonateOpen}>
            <Donate />
          </RightDrawer>
        </div>
        <nav className="gap-3 space-x-14 hidden md:flex">
          <Link href="/" className="font-mono">
            MISSION
          </Link>
          <Link href="/metaprotocols" className="font-mono">
            METAPROTOCOLS
          </Link>
          <Link href="/tools" className="font-mono">
            TOOLS
          </Link>
          <Link href="/donate" className="font-mono">
            PARTNERS
          </Link>
          {/* <Link href="/blog" className="font-mono">
            BLOG
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
