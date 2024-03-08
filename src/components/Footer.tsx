import React from "react";
import Link from "next/link";
import { EXTERNAL_LINKS, INTERNAL_LINKS } from "@/constants/links";

export default function Footer() {
    return (
        <div className="px-6 md:px-10 pt-12">
            <div className="md:flex md:space-x-16 md:pb-10">
                <div className="mb-20">
                    <p className="mb-8 text-lg font-mono">PARTNERS</p>
                    <ul className="text-sm">
                    <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.domo}>
                                DOMO
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.oyl}>
                                OYL
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link
                                target="_blank"
                                href={EXTERNAL_LINKS.bestinslot}
                            >
                                BESTINSLOT
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.allium}>
                                Allium
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.hiro}>
                                Hiro
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.unisat}>
                                Unisat
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.utxo}>
                                UTXO
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.alex}>
                                ALEX
                            </Link>
                        </li>
                        {/* <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.okx}>
                                OKX
                            </Link>
                        </li> */}
                        {/* <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link
                                target="_blank"
                                href={EXTERNAL_LINKS.ordinalswallet}
                            >
                                ORDINALS WALLET
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div className="mb-20">
                    <p className="mb-8 text-lg font-mono">RESOURCES</p>
                    <ul>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link
                                target="_blank"
                                href={EXTERNAL_LINKS.documentation}
                            >
                                DOCUMENTATION
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link
                                target="_blank"
                                href={EXTERNAL_LINKS.bitcoinwhitepaper}
                            >
                                BITCOIN WHITEPAPER
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link
                                target="_blank"
                                href={INTERNAL_LINKS.brc20.page}
                            >
                                BRC-20
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link
                                target="_blank"
                                href={INTERNAL_LINKS.tools.page}
                            >
                                TOOLS
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.forum}>
                                FORUM
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-20">
                    <p className="mb-8 text-lg font-mono md:mr-10">SOCIAL</p>
                    <ul>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link href={EXTERNAL_LINKS.twitter}>X.COM</Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-20">
                    <p className="mb-8 text-lg font-mono">GET STARTED</p>
                    <ul>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.opi}>
                                OPI
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link
                                target="_blank"
                                href={EXTERNAL_LINKS.metashrew}
                            >
                                METASHREW
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link
                                target="_blank"
                                href={EXTERNAL_LINKS.ordinalsbot}
                            >
                                ORDINALSBOT
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link target="_blank" href={EXTERNAL_LINKS.ordio}>
                                ORD.IO
                            </Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link
                                target="_blank"
                                href={EXTERNAL_LINKS.ordiscan}
                            >
                                ORDISCAN
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-32">
                    <p className="mb-8 text-lg font-mono">CONTACT</p>
                    <ul>
                        <li className=" text-smoke50 font-mono mb-4 transition duration-150 hover:text-neutral-600">
                            <Link href="mailto:info@layer1.foundation">info@layer1.foundation</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:flex md:items-center md:space-x-20 md:mb-6 md:justify-between">
                <div className="md:flex ">
                    <div className="w-52 mt-16 md:mt-0 md:mr-12">
                        <img src="/img/l1f-logo-default.svg"></img>
                    </div>
                    <ul className="mt-16 mb-16 md:flex md:my-0 md:items-center md:space-x-8">
                        {/* <li className=" text-smoke50 font-mono mb-4 md:mb-0">
                            <Link href="#">Media kit</Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 md:mb-0">
                            <Link href="#">Terms of use</Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 md:mb-0">
                            <Link href="#">Privacy Policy</Link>
                        </li>
                        <li className=" text-smoke50 font-mono mb-4 md:mb-0">
                            <Link href="#">Cookie Policy</Link>
                        </li> */}
                    </ul>
                </div>
                <p className="font-mono text-sm md:pb-0 pb-8">
                    © 2024 LAYER 1 FOUNDATION
                </p>
            </div>
        </div>
    );
}
