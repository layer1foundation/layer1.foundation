import React from "react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="flex flex-col text-left pl-4 space-y-4">
      <Link href="/" className="font-mono text-xl">
        MISSION
      </Link>
      <Link href="/metaprotocols" className="font-mono text-xl">
        METAPROTOCOLS
      </Link>
      <Link href="/tools" className="font-mono text-xl">
        TOOLS
      </Link>
      <Link href="/donate" className="font-mono text-xl">
        PARTNERS
      </Link>
      {/* <Link href="/blog" className="font-mono text-xl">
        BLOG
      </Link> */}
      <div>
      <div className='mt-16 mb-10'>
        <p className='mb-8 text-lg font-mono md:mr-10'>SOCIAL</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://twitter.com/L1Fxyz">X.COM</a></li>
        </ul>
      </div>
      <div className='mb-4'>
        <p className='mb-8 text-lg font-mono'>CONTACT</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a>INFO@L1F.XYZ</a></li>
        </ul>
      </div>
      <div className="w-52 mt-16 md:mt-0 md:mr-12">
            <img src="/l1f-logo-default.svg"></img>
          </div>
      </div>
    </nav>
  );
}
