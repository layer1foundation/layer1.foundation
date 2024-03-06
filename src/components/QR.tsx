import React from "react";

export default function QR() {
    const textToCopy = "bc1qpq6600v0kua...rjhz83qk0s7fk32";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            alert("Text copied to clipboard");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="border flex flex-col items-center space-y-8 py-8">
            <div>
                <img src="/img/QR.svg" />
            </div>
            <p className="font-mono">bc1qpq6600v0kua...rjhz83qk0s7fk32</p>
            <div
                className="border-2 border-dark px-10 py-3 w-3/4 text-center mx-3"
                onClick={copyToClipboard}
            >
                <p className="font-mono">COPY TO ClIPBOARD</p>
            </div>
        </div>
    );
}
