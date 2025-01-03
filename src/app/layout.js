import { Geist, Geist_Mono, PT_Serif } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-main",
  weight:[ "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});
const PtSerif = PT_Serif({
  variable: "--font-second",
  weight:[ "400"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Guylain",
  description: "Etudiant en formation Continue.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${PtSerif.variable} ${geistSans.variable} ${poppins.variable} antialiased font-second`}
      >
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
