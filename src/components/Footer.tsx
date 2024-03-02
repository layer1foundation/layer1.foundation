import React from "react";

export default function Footer() {
  return (
    <div className='px-4 pt-12 '>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>PARTNERS</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a>BESTINSLOT</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>DOMO</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>OKX</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>ORDINALS WALLET</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>OYL</a></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>RESOURCES</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a>DOCUMENTATION</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>BITCOIN WHITEPAPER</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>BRC-20</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>TOOLS</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>FORUM</a></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>SOCIAL</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a>X.COM</a></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>GET STARTED</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a>OPI</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>METASHREW</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>ORDINALSBOT</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>ORD.IO</a></li>
          <li className=' text-smoke50 font-mono mb-4'><a>ORDISCAN</a></li>
        </ul>
      </div>
      <div className='mb-20'>
        <p className='mb-8 text-lg font-mono'>CONTACT</p>
        <ul>
          <li className=' text-smoke50 font-mono mb-4'><a>INFO@L1F.XYZ</a></li>
        </ul>
      </div>
      <div className='w-52 mt-16'>
        <img src='/img/l1f-logo-default.svg'></img>
      </div>
      <div className="md:flex md:items-center md:space-x-20 md:mb-6 md:justify-between">
        <div className="md:flex ">
          <div className="w-52 mt-16 md:mt-0 md:mr-12">
            <img src="/l1f-logo-default.svg"></img>
          </div>
          <ul className="my-20 md:flex md:my-0 md:items-center md:space-x-8">
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
        <p>©2024 LAYER 1 FOUNDATIONS</p>
      </div>
    </div>
  );
}
