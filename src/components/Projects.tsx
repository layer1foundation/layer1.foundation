import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="grid grid-cols-1 w-full py-12 md:grid-cols-4 ipad:grid-cols-2 px-6 md:px-10">
            <a
                target="_blank"
                href="https://twitter.com/domodata"
                className="flex flex-col h-72 items-center justify-center border relative hover:border-2 hover:border-dark group"
            >
                <div className="hidden absolute top-0 group-hover:flex justify-between w-full pr-2 pt-3">
                    <div className="flex items-center px-3">
                        <Image
                            className="pr-6"
                            alt="small best in slot"
                            width={70}
                            height={70}
                            src="/partners/domo.svg"
                        />
                        <p className="font-mono">Placeholder</p>
                    </div>
                    <Image
                        src="/icons/arrow-top-right.svg"
                        alt="arrow icon"
                        width={30}
                        height={30}
                    />
                </div>
                <Image
                    className="m-auto group-hover:hidden"
                    width={100}
                    height={100}
                    alt="best in slot"
                    src="/partners/domo.svg"
                />
                <div className="hidden absolute bottom-0 left-0 pb-3 pl-3 group-hover:block">
                    <p className="font-mono">Text for OKX</p>
                    <p className="font-mono w-52 pt-4">More text for OKX</p>
                </div>
            </a>

            <a
                target="_blank"
                href="https://www.oyl.io/"
                className="flex flex-col h-72  items-center justify-center border relative hover:border-2 hover:border-dark group"
            >
                <div className="hidden absolute top-0 group-hover:flex justify-between w-full pr-2 pt-3">
                    <div className="flex justify-start items-center px-3 ">
                        <Image
                            className="pr-6"
                            alt="small best in slot"
                            width={70}
                            height={70}
                            src="/partners/oyl.svg"
                        />
                        <p className="font-mono">OYL</p>
                    </div>
                    <Image
                        src="/icons/arrow-top-right.svg"
                        alt="arrow icon"
                        width={30}
                        height={30}
                    />
                </div>
                <Image
                    className="m-auto group-hover:hidden"
                    width={100}
                    height={100}
                    alt="best in slot"
                    src="/partners/oyl.svg"
                />
                <div className="hidden absolute bottom-0 left-0 pb-3 pl-3 group-hover:block">
                    <p className="font-mono">Text for OYL</p>
                    <p className="font-mono w-52 pt-4">More Text for OYL</p>
                </div>
            </a>
            <a
                target="_blank"
                href="https://bestinslot.xyz/"
                className="flex flex-col h-72  items-center justify-center border relative hover:border-2 hover:border-dark group"
            >
                <div className="hidden absolute top-0 group-hover:flex justify-between w-full pr-2 pt-3">
                    <div className="flex justify-start items-center px-3 flex-grow-1">
                        <Image
                            className="pr-6"
                            alt="small best in slot"
                            width={50}
                            height={50}
                            src="/partners/chest.jpg"
                        />
                        <p className="font-mono">BEST IN SLOT</p>
                    </div>
                    <Image
                        src="/icons/arrow-top-right.svg"
                        alt="arrow icon"
                        width={30}
                        height={30}
                    />
                </div>
                <Image
                    className="m-auto group-hover:hidden"
                    width={100}
                    height={100}
                    alt="best in slot"
                    src="/partners/chest.jpg"
                />
                <div className="hidden absolute bottom-0 left-0 pb-3 group-hover:block pl-3">
                    <p className="font-mono">THE BEST ORDINALS [AGGREGATOR]</p>
                    <p className="font-mono w-52 pt-4">
                        BUILDING WEB3 ON BITCOIN ONE PSBT* AT A TIME
                    </p>
                </div>
            </a>

            <a
                target="_blank"
                href="https://www.allium.so/"
                className="flex flex-col h-72 items-center justify-center border relative hover:border-2 hover:border-dark group"
            >
                <div className="hidden absolute top-0 group-hover:flex justify-between w-full pr-2 pt-3">
                    <div className="flex items-center px-3">
                        <Image
                            className="pr-6"
                            alt="small best in slot"
                            width={70}
                            height={70}
                            src="/partners/allium.svg"
                        />
                        <p className="font-mono text-xs">Text for Allium</p>
                    </div>
                    <Image
                        src="/icons/arrow-top-right.svg"
                        alt="arrow icon"
                        width={30}
                        height={30}
                    />
                </div>
                <Image
                    className="m-auto group-hover:hidden"
                    width={100}
                    height={100}
                    alt="best in slot"
                    src="/partners/allium.svg"
                />
                <div className="hidden absolute bottom-0 left-0 pb-3 pl-3 group-hover:block">
                    <p className="font-mono">Text for Allium</p>
                    <p className="font-mono w-52 pt-4">More text for Allium</p>
                </div>
            </a>
            <a
                target="_blank"
                href="https://www.hiro.so/"
                className="flex flex-col h-72 items-center justify-center border relative hover:border-2 hover:border-dark group"
            >
                <div className="hidden absolute top-0 left-0 group-hover:flex justify-between w-full pr-2 pt-3">
                    <div className="flex items-center px-3">
                        <Image
                            className="pr-6"
                            alt="small best in slot"
                            width={70}
                            height={70}
                            src="/partners/hiro.svg"
                        />
                        <p className="font-mono">Text for Hiro</p>
                    </div>
                    <Image
                        src="/icons/arrow-top-right.svg"
                        alt="arrow icon"
                        width={30}
                        height={30}
                    />
                </div>
                <Image
                    className="m-auto group-hover:hidden"
                    width={100}
                    height={100}
                    alt="best in slot"
                    src="/partners/hiro.svg"
                />
                <div className="hidden absolute bottom-0 left-0 pb-3 pl-3 group-hover:block">
                    <p className="font-mono">Text for Hiro</p>
                    <p className="font-mono w-52 pt-4">More text for Hiro</p>
                </div>
            </a>
            <a
                target="_blank"
                href="https://unisat.io/"
                className="flex flex-col h-72 items-center justify-center border relative hover:border-2 hover:border-dark group"
            >
                <div className="hidden absolute top-0 group-hover:flex justify-between w-full pr-2 pt-3">
                    <div className="flex items-center px-3">
                        <Image
                            className="pr-6"
                            alt="small best in slot"
                            width={70}
                            height={70}
                            src="/partners/unisat.svg"
                        />
                        <p className="font-mono">Text for Unisat</p>
                    </div>
                    <Image
                        src="/icons/arrow-top-right.svg"
                        alt="arrow icon"
                        width={30}
                        height={30}
                    />
                </div>
                <Image
                    className="m-auto group-hover:hidden"
                    width={100}
                    height={100}
                    alt="best in slot"
                    src="/partners/unisat.svg"
                />
                <div className="hidden absolute bottom-0 left-0 pb-3 pl-3 group-hover:block">
                    <p className="font-mono">Text for Unisat</p>
                    <p className="font-mono w-52 pt-4">More text for Unisat</p>
                </div>
            </a>
            <a
                target="_blank"
                href="https://www.utxo.management/"
                className="flex flex-col h-72 items-center justify-center border relative hover:border-2 hover:border-dark group"
            >
                <div className="hidden absolute top-0 group-hover:flex justify-between w-full pr-2 pt-3">
                    <div className="flex items-center px-3">
                        {/* <Image className='pr-6' alt="small best in slot" width={70} height={70} src='/partners/uxto.png'/> */}
                        <div className="pr-6">
                            <h5 className="leading-3 ">UT</h5>
                            <h5>XO</h5>
                        </div>
                        <p className="font-mono">Text for UTXO</p>
                    </div>
                    <Image
                        src="/icons/arrow-top-right.svg"
                        alt="arrow icon"
                        width={30}
                        height={30}
                    />
                </div>
                {/* <Image className='m-auto group-hover:hidden' width={100} height={100} alt="best in slot" src='/partners/uxto.png'/> */}
                <div className="group-hover:hidden">
                    <h4 className="leading-3 text-smoke50">UT</h4>
                    <h4 className="text-smoke50">XO</h4>
                </div>
                <div className="hidden absolute bottom-0 left-0 pb-3 pl-3 group-hover:block">
                    <p className="font-mono">Text for UTXO</p>
                    <p className="font-mono w-52 pt-4">More text for UTXO</p>
                </div>
            </a>
            <a
                target="_blank"
                href="https://alexgo.io/"
                className="flex flex-col h-72 items-center justify-center border relative hover:border-2 hover:border-dark group"
            >
                <div className="hidden absolute top-0 group-hover:flex justify-between w-full pr-2 pt-3">
                    <div className="flex items-center px-3">
                        {/* <Image className='pr-6' alt="small best in slot" width={70} height={70} src='/partners/unisat.svg'/> */}
                        <h4 className="pr-6 text-smoke50">ALEX</h4>
                        <p className="font-mono ">Text for Alex</p>
                    </div>
                    <Image
                        src="/icons/arrow-top-right.svg"
                        alt="arrow icon"
                        width={30}
                        height={30}
                    />
                </div>
                {/* <Image className='m-auto group-hover:hidden' width={100} height={100} alt="best in slot" src='/partners/alexgo.svg'/> */}
                <h4 className="group-hover:hidden text-smoke50">ALEX</h4>
                <div className="hidden absolute bottom-0 left-0 pb-3 pl-3 group-hover:block">
                    <p className="font-mono">Text for Alex</p>
                    <p className="font-mono w-52 pt-4">More text for Alex</p>
                </div>
            </a>
        </div>
    );
}
