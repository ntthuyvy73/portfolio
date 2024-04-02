import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, Navbar } from "@/components";

export const metadata: Metadata = {
    title: "Vy's Portfolio",
    description: "FullStack Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="app">
                <Navbar />
                <Header />
                {children}

                <Footer />
            </body>
        </html>
    );
}
