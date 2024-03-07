import Image from "next/image";
import React from "react";
import Segemnt from "@/components/Segment";
import Chapter from "@/components/Chapter";
import Wrapper from "@/components/Background";
import sopcopy from "@/constants/copy/sop";
import brc20copy from "@/constants/copy/BRC20";
import { Author } from "@/components/Author";

export default function SOPPage() {
    const { title, image, author, date, readtime, phases } =
        sopcopy;

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
                        <div className="md:px-24 lg:px-36 xl:px-48 py-6 pb-32">
                            <div className="flex flex-col gap-6 border-b pb-8">
                                <h1 className="mt-4">{title}</h1>
                                <Author
                                    {...author}
                                    date={date}
                                    readtime={readtime}
                                />
                            </div>
                            {phases.map((p, i) => (
                            <div key={`sop-phase-${i}`} className="pt-8 flex flex-col gap-4 font-suisse">
                            <h4 className="">{p.title}</h4>
                            <div>
                            <h4 className="">Purpose:</h4>
                            <h4 className="text-smoke40">{p.purpose}</h4>
                            </div>
                            <div>
                            <h4 className="font-suisse">Actions:</h4>
                            <ul className="list-disc text-smoke40 pl-4 md:pl-6">
                                {p.actions.map((a, j) => (
                                <li key={`sop-phase-${i}-action-${j}`} className="list-item">{a}</li>
                                ))}
                            </ul>
                            </div>
                        </div>
                            ))}
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
