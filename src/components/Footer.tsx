import React from "react";

export default function Footer() {
  return (
    <div className='px-6 md:px-10 pt-12'>
      <div className="md:flex md:space-x-16 md:pb-10">
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>PARTNERS</p>
        <ul className="text-sm">
          <li className=' text-smoke50 font-mono mb-4'><a href="https://bestinslot.xyz/">BESTINSLOT</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://www.domo.com/">DOMO</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://www.okx.com/">OKX</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://ordinalswallet.com/" >ORDINALS WALLET</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://www.oyl.io/">OYL</a></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>RESOURCES</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://layer1.gitbook.io/layer1-foundation/protocols/brc-20/documentation">DOCUMENTATION</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://domo-2.gitbook.io/brc-20-experiment/">BITCOIN WHITEPAPER</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="/metaprotocols">BRC-20</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="/tools">TOOLS</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href='https://l1f.discourse.group/latest'>FORUM</a></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono md:mr-10'>SOCIAL</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://twitter.com/L1Fxyz">X.COM</a></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>GET STARTED</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://opi.network/">OPI</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://www.sandshrew.io/">METASHREW</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://ordinalsbot.com/">ORDINALSBOT</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://www.ord.io/">ORD.IO</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a href="https://ordiscan.com/">ORDISCAN</a></li>
        </ul>
      </div>
      <div className='mb-32'>
        <p className='mb-8 text-lg font-mono'>CONTACT</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a>INFO@L1F.XYZ</a></li>
        </ul>
      </div>
      </div>
      <div className="md:flex md:items-center md:space-x-20 md:mb-6 md:justify-between">
        <div className="md:flex ">
          <div className="w-52 mt-16 md:mt-0 md:mr-12">
            <img src="/l1f-logo-default.svg"></img>
          </div>
          <ul className="mt-16 mb-16 md:flex md:my-0 md:items-center md:space-x-8">
            <li className=" text-smoke50 font-mono mb-4 md:mb-0">
              <a>Media kit</a>
            </li>
            <li className=" text-smoke50 font-mono mb-4 md:mb-0">
              <a>Terms of use</a>
            </li>
            <li className=" text-smoke50 font-mono mb-4 md:mb-0">
              <a>Privacy Policy</a>
            </li>
            <li className=" text-smoke50 font-mono mb-4 md:mb-0">
              <a>Cookie Policy</a>
            </li>
          </ul>
        </div>
        <p className="font-mono text-sm md:pb-0 pb-8">© 2024 LAYER 1 FOUNDATION</p>
      </div>
    </div>
  );
}
