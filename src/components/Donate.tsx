import React from "react";
import Segment from "./Segment";
import Chapter from "./Chapter";
import QR from "./QR";
import copy from "@/constants/copy/donate";

export default function Donate() {
    return (
        <div>
            <Segment scroll={false} className="lg:pl-8 lg:pr-8 mt-20 md:mt-4">
                <Chapter chapter={copy.donate.chapter0}>
                    <QR />
                </Chapter>
            </Segment>
            <Segment
                scroll={false}
                className="lg:pl-16 lg:pr-8 pt-16 bg-smoke10 h-72"
            >
                <Chapter chapter={copy.donate.chapter1} half={true}></Chapter>
            </Segment>
        </div>
    );
}
