import React from "react";
import Link from "next/link";
import links from "@/constants/links";

export default function Footer() {
  return (
    <div className='px-6 md:px-10 pt-12'>
      <div className="md:flex md:space-x-16 md:pb-10">
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>PARTNERS</p>
        <ul className="text-sm">
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.bestinslot}>BESTINSLOT</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.domo}>DOMO</ a></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.okx}>OKX</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.ordinalswallet} >ORDINALS WALLET</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.oyl}>OYL</a></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>RESOURCES</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.documentation}>DOCUMENTATION</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.bitcoinwhitepaper}>BITCOIN WHITEPAPER</a></li>
          <li className=' text-smoke50 font-mono mb-4'><Link target="_blank" href={links.metaprotocols}>BRC-20</Link></li>
          <li className=' text-smoke50 font-mono mb-4'><Link target="_blank" href={links.tools}>TOOLS</Link></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.forum}>FORUM</a></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono md:mr-10'>SOCIAL</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><Link href={links.twitter}>X.COM</Link></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>GET STARTED</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.opi}>OPI</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.metashrew}>METASHREW</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.ordinalsbot}>ORDINALSBOT</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.ordio}>ORD.IO</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a target="_blank" href={links.ordiscan}>ORDISCAN</a></li>
        </ul>
      </div>
      <div className='mb-32'>
        <p className='mb-8 text-lg font-mono'>CONTACT</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><Link href="">INFO@L1F.XYZ</Link></li>
        </ul>
      </div>
      </div>
      <div className="md:flex md:items-center md:space-x-20 md:mb-6 md:justify-between">
        <div className="md:flex ">
          <div className="w-52 mt-16 md:mt-0 md:mr-12">
            <img src="/img/l1f-logo-default.svg"></img>
          </div>
          <ul className="mt-16 mb-16 md:flex md:my-0 md:items-center md:space-x-8">
            <li className=" text-smoke50 font-mono mb-4 md:mb-0">
              <Link href="/">Media kit</Link>
            </li>
            <li className=" text-smoke50 font-mono mb-4 md:mb-0">
              <Link href="">Terms of use</Link>
            </li>
            <li className=" text-smoke50 font-mono mb-4 md:mb-0">
              <Link href="">Privacy Policy</Link>
            </li>
            <li className=" text-smoke50 font-mono mb-4 md:mb-0">
              <Link href="">Cookie Policy</Link>
            </li>
          </ul>
        </div>
        <p className="font-mono text-sm md:pb-0 pb-8">© 2024 LAYER 1 FOUNDATION</p>
      </div>
    </div>
  );
}
