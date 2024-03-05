import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { sharedMetadata } from "@/constants/metadata";

export const metadata: Metadata = sharedMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center">
          <div className="max-w-7xl">        
            <Header />
            <main className="py-3  md:py-4">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
