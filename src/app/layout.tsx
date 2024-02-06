import "~/styles/globals.css";

import { Inter as bodyFont } from "next/font/google";
import { Oswald as headingFont } from "next/font/google";
import { EB_Garamond as serifFont } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

const body = bodyFont({
  subsets: ["latin"],
  variable: "--font-body",
});

const heading = headingFont({
  subsets: ["latin"],
  variable: "--font-heading",
});

const serif = serifFont({
  subsets: ["latin"],
  variable: "--font-serif",
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
        className={`font-body ${body.variable} ${heading.variable} ${serif.variable}`}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
