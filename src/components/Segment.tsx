import React, { ReactNode } from "react";

interface SegmentProps {
    children: ReactNode;
    bg?: `bg-${string}`;
    scroll?: boolean;
    title?: string;
    id?: string;
    className?: string;
}

export default function Segment({
    children,
    bg,
    scroll = true,
    title,
    id,
    className,
}: SegmentProps) {
    return (
        <div className={`${bg ? `${bg} ` : ""} ${className ?? ""}`} id={id}>
            {scroll ? (
                <div className="flex justify-end pb-4 pt-12 text-smoke50 border-b border-smoke20 mx-4 md:mx-10 font-mono">
                    <p className="text-sm">SCROLL TO EXPLORE</p>
                </div>
            ) : null}
            {title ? (
                <div className="md:flex md:justify-between px-6 md:px-10">
                    <div className="md:border-b md:w-1/3"></div>
                    <h6 className="border-b border-smoke20 pb-10 text-smoke60 leading-7 font-mono md:w-2/3">
                        {title}
                    </h6>
                </div>
            ) : null}
            <div className="pt-8 pb-6 w-full max-w-7xl">{children}</div>
        </div>
    );
}
