import Image from "next/image";
import React from "react";
import Segemnt from "@/components/Segment";
import Chapter from "@/components/Chapter";
import Wrapper from "@/components/Background";
import resolutioncopy from "@/constants/copy/resolution";
import brc20copy from "@/constants/copy/BRC20";
import { Author } from "@/components/Author";
import Link from "next/link";
import { INTERNAL_LINKS } from "@/constants/links";

export default function ResolutionPage() {
    const { title, image, description, content, author, date, readtime, list } =
        resolutioncopy;

    return (
        <div className="flex flex-col items-center">
            <Wrapper>
                <div className="w-full px-6 md:px-10 ">
                    <div className="w-full">
                        <div className="w-full h-64 md:h-96 overflow-hidden relative">
                            <Image
                                src={image}
                                alt="L1F Blog Post"
                                width={1300}
                                height={300}
                                className="absolute h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="md:px-24 lg:px-36 xl:px-48 py-6 pb-40">
                            <div className="flex flex-col gap-6 border-b pb-8">
                                <h1 className="mt-4 font-suisse">{title}</h1>
                                <Author
                                    {...author}
                                    date={date}
                                    readtime={readtime}
                                />
                            </div>
                            <h4 className="font-suisse pt-8">
                                {description
                                    .split("\n")
                                    .map((line: any, i: number) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                            </h4>
                            <br />
                            <h4 className="font-suisee text-smoke40 pl-4 md:pl-6 pt-4">
                                <ul className="list-decimal">
                                    {list
                                        .split("\n")
                                        .map((line: any, i: number) => (
                                            <React.Fragment key={i}>
                                                <li className="list-item pl-1">
                                                    {line}
                                                </li>
                                                <br />
                                            </React.Fragment>
                                        ))}
                                </ul>
                            </h4>
                            <br />
                            <h4 className="font-suisse">
                                {/* {content
                                    .split("\n")
                                    .map((line: any, i: number) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {console.log("line", line)}
                                            <br />
                                        </React.Fragment>
                                    ))} */}
                                By prioritizing these pillars, we strive to
                                create a resilient and user-friendly
                                ecosystem—fostering trust within the broader
                                Bitcoin community. Users must always come first,
                                and through this resolution, we aim to ensure
                                that the BRC20 protocol remains reliable and
                                inclusive.
                                <br />
                                <br />
                                Additionally, partners will refer to the
                                following{" "}
                                <Link
                                    href={INTERNAL_LINKS.sop.page}
                                    className="font-suisse text-[18px] font-[500] leading-[28px] underline transition duration-150 hover:opacity-70"
                                >
                                    Standard Operating Procedure
                                </Link>{" "}
                                for specific suggestions on how we may embody
                                these principles as we co-develop this
                                technology.
                                <br />
                                <br />
                                Together, we affirm our steadfast dedication to
                                safeguarding the well-being of BRC20
                                users—nurturing innovation while respecting user
                                sovereignty, safety, and usability.
                                <br />
                                <br />
                                Our current signatory parties include: Layer 1
                                Foundation, Domo, Unisat, Best In Slot, Oyl
                                Dynamics, ALEX, UTXO Management, Allium & Hiro
                            </h4>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Segemnt scroll={false} className="pt-10">
                <Chapter chapter={brc20copy.BRC20.chapter2}></Chapter>
            </Segemnt>
            <Segemnt scroll={false} className="pt-10">
                <Chapter chapter={brc20copy.BRC20.chapter3}></Chapter>
            </Segemnt>
        </div>
    );
}
