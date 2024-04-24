import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Toast from "@/components/Toast";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sehaj Bindra 3d Portfolio",
  description: "Full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Header />
        <Toast />
        {children}
      </body>
    </html>
  );
}
