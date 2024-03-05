import React from "react";
import Segment from "./Segment";
import Chapter from "./Chapter";
import QR from "./QR";
import copy from "@/constants/copy/donate";

export default function Donate() {
    return (
        <div>
            <Segment scroll={false} bg="md:pl-16 md:pr-8 mt-20 md:mt-4">
                <Chapter chapter={copy.donate.chapter0} half={true}>
                    <QR />
                </Chapter>
            </Segment>
            <Segment scroll={false} bg="md:pl-16 md:pr-8 pt-16 bg-smoke10 h-96">
                <Chapter chapter={copy.donate.chapter1} half={true}></Chapter>
            </Segment>
        </div>
    );
}
