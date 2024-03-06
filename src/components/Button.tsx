import React from "react";
import Link from "next/link";

interface ButtonProps {
    text?: string;
    link?: string;
    grow?: boolean;
    outer?: boolean;
}

export default function Button({
    text,
    link,
    grow,
    outer = false,
}: ButtonProps) {
    return !outer ? (
        <Link
            href={link ? link : "/"}
            className={`flex items-center bg-smoke50 hover:bg-black rounded-full p-0.5 cursor-pointer transition duration-150 ${
                grow ? "flex-grow md:flex-grow-0" : null
            } `}
        >
            <div
                className={`bg-light text-dark h-9 flex justify-between w-full items-center space-x-2 rounded-full hover:bg-black hover:text-light transition duration-150 ${
                    grow ? "flex-grow md:flex-grow-0" : null
                } `}
            >
                <img className="pl-2" src="/icons/fan-left.svg" />
                <p
                    className="mb-0 flex justify-center"
                    style={{ fontSize: "12px" }}
                >
                    {text}
                </p>
                <img className="pr-2" src="/icons/fan-right.svg" />
            </div>
        </Link>
    ) : (
        <a
            target="_blank"
            href={link}
            className={`flex items-center bg-smoke50 hover:bg-black rounded-full p-0.5 cursor-pointer transition duration-150 ${
                grow ? "flex-grow md:flex-grow-0" : null
            } `}
        >
            <div
                className={`bg-light text-dark h-9 flex justify-between w-full items-center space-x-2 rounded-full hover:bg-black hover:text-light transition duration-150 ${
                    grow ? "flex-grow md:flex-grow-0" : null
                } `}
            >
                <img className="pl-2" src="/icons/fan-left.svg" />
                <p
                    className="mb-0 flex justify-center"
                    style={{ fontSize: "12px" }}
                >
                    {text}
                </p>
                <img className="pr-2" src="/icons/fan-right.svg" />
            </div>
        </a>
    );
}
