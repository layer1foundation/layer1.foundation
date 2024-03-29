import React from "react";

export default function Tool({ tool }: any) {
    return (
        <div className="md:flex mb-20 md:mb-8 md:items-center px-6 md:px-10">
            <div className="md:w-1/3 mb-4 space-y-4">
                <h6 className="font-mono text-smoke40">{tool.subheading}</h6>
                <h1>{tool.heading}</h1>
            </div>
            <h3 className="md:w-2/3 font-suisse pr-16">{tool.text}</h3>
        </div>
    );
}
