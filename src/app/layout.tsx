import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

import { sharedMetadata } from "@/constants/metadata";

export const metadata = sharedMetadata;

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
            <main className="py-3 px-4 md:py-4 md:px-10">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
