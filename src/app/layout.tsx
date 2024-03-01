import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { sharedMetadata } from "@/constants/metadata";

export const metadata = sharedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="py-3 md:px-16 md:py-8">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
