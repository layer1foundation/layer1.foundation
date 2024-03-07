import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { sharedMetadata } from "@/constants/metadata";
import Background from "@/components/Background";
import Providers from "./providers";

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <html lang="en">
                <body>
                    <Background>
                        <Header />
                    </Background>

                    <main className="py-3 md:py-4">{children}</main>

                    <Background>
                        <Footer />
                    </Background>
                </body>
            </html>
        </Providers>
    );
}
