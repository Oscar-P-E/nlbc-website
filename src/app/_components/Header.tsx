"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 55;
      if (show !== isScrolled) setIsScrolled(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav
      className={`sticky -top-16 z-40 flex h-32 gap-x-8 px-2 transition-all duration-1000 ${isScrolled ? "bg-opacity-80 bg-gradient-to-r from-transparent to-zinc-900" : "bg-zinc-900 bg-opacity-100"}`}
    >
      <div
        className={`relative my-auto h-28 w-[342px] transition-all duration-500 ${isScrolled ? "pointer-events-none opacity-0" : "opacity-100"}`}
      >
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="New Life Baptist Church"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <ul className="flex shrink-0 grow items-end justify-end gap-x-14 px-8 pb-5 text-xl uppercase text-zinc-200">
        <li className="flex shrink-0 transition-all hover:opacity-50">
          <Link href="/">Home</Link>
        </li>
        <li className="flex shrink-0 transition-all hover:opacity-50">
          <Link href="/#about">About Us</Link>
        </li>
        <li className="flex shrink-0 transition-all hover:opacity-50">
          <Link href="/#contact">Contact Us</Link>
        </li>

        <li className="flex shrink-0 transition-all hover:opacity-50">
          <Link href="/sermons">Watch Sermons</Link>
        </li>

        <li className="flex shrink-0 transition-all hover:opacity-50">
          <Link href="/give">Give To Us</Link>
        </li>
      </ul>
    </nav>
  );
}
