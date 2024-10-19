import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./components/floating-navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <script async src="node_modules/@material-tailwind/html/scripts/ripple.js"></script>
        <script async src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
/>
      </Head>
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
        <NavbarDemo className={undefined}/>
        </div>
        {children}
      </body>
    </html>
  );
}
