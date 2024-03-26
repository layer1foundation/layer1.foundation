import React from "react";

type IQr = {
    qrOnly?: boolean;
};

export default function QR({ qrOnly }: IQr) {
    const textToCopy =
        "bc1qkcq25839gy4xcxxd502ll6vyr8murn0hxplt9ngusnupvn5ytfcs2kmyl5";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            alert("Wallet Address copied to clipboard.");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="border flex flex-col items-center gap-4 py-8">
            <div>
                <img src="/img/qr.png" />
            </div>
            <p className="font-mono">bc1qkcq2...cs2kmyl5</p>
            <button
                className="border-2 border-dark px-10 py-3 w-3/4 text-center mx-3 transition hover:bg-neutral-100"
                onClick={copyToClipboard}
            >
                <p className="font-mono">COPY TO ClIPBOARD</p>
            </button>
        </div>
    );
}
