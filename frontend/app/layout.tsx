
import type { Metadata } from "next";
import "./globals.css";


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
      <body className="app relative">
      {children}
      </body>
    </html>
  );
}
