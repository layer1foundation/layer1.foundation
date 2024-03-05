import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { sharedMetadata } from "@/constants/metadata";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Wrapper>
                    <Header />
                </Wrapper>

                <main className="py-3 md:py-4">{children}</main>

                <Wrapper>
                    <Footer />
                </Wrapper>
            </body>
        </html>
    );
}
