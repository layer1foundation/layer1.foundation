"use client";

import React, { ReactNode, useEffect } from "react";
import Image from "next/image";

interface RightDrawerProps {
    children: ReactNode;
    open: boolean;
    setIsOpen: (open: boolean) => void;
}

export default function RightDrawer({
    children,
    open,
    setIsOpen,
}: RightDrawerProps) {
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        // Clean up function
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);
    if (!open) return <></>;
    return (
        <div
            className="fixed inset-0 z-10 bg-gray-400 bg-opacity-50 w-full h-full"
            onClick={() => {
                setIsOpen(!open);
            }}
        >
            <div
                className="fixed z-99 w-4/5 top-0 right-0 h-full py-4 flex flex-col bg-light space-y-8 overflow-auto max-w-5xl"
                style={
                    open
                        ? { animation: "slide-left 300ms" }
                        : { animation: "slide-right 200ms" }
                }
                onClick={stopPropagation}
            >
                <button
                    className="w-fit flex absolute justify-end right-4 p-1.5 -translate-y-1 rounded-full transition duration-150 hover:bg-neutral-100"
                    onClick={() => {
                        setIsOpen(!open);
                    }}
                >
                    <Image
                        src="/icons/close.svg"
                        alt="close button"
                        width={28}
                        height={28}
                    />
                </button>
                {children}
            </div>
        </div>
    );
}
