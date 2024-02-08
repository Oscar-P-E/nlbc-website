import "~/styles/globals.css";

import { Inter as sansFont } from "next/font/google";
import { Oswald as headingFont } from "next/font/google";
// import { EB_Garamond as serifFont } from "next/font/google";
import { Crimson_Text as serifFont } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const sans = sansFont({
  subsets: ["latin"],
  variable: "--font-sans",
});

const heading = headingFont({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = serifFont({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "New Life Baptist Church",
  description:
    "Independent Fundental Baptist Church on the Sunshine Coast, Queensland, Australia",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-body ${body.variable} ${heading.variable} ${sans.variable}`}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
