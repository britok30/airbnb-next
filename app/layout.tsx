import "./globals.css";
import { Nunito } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb clone",
  description: "Airbnb clone using Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
