"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ExpandingNav from "./ExpandingNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
    <>
      <ExpandingNav
        isScrolled={isScrolled}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      <nav
        className={`-top-16 z-40 flex h-32 gap-x-8 px-2 transition-all duration-1000 lg:sticky ${isScrolled ? "bg-opacity-50 bg-gradient-to-r from-transparent from-10% to-zinc-900 to-[130%]" : "bg-zinc-900 bg-opacity-100"}`}
      >
        <div
          className={`relative mx-auto my-auto flex h-full w-4/5 transition-all duration-500 lg:h-28 lg:w-[342px] ${isScrolled || isExpanded ? "pointer-events-none opacity-0" : "opacity-100"}`}
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

        <ul className="hidden flex-grow items-end justify-end gap-x-[7%] whitespace-nowrap px-8 pb-5 text-xl uppercase text-zinc-200 lg:flex xl:gap-x-14">
          <li className="flex transition-all hover:opacity-50">
            <Link href="/">Home</Link>
          </li>
          <li className="flex transition-all hover:opacity-50">
            <Link href="/#about">About Us</Link>
          </li>
          <li className="flex transition-all hover:opacity-50">
            <Link href="/#contact">Contact Us</Link>
          </li>

          <li className="flex transition-all hover:opacity-50">
            <Link href="/sermons">Watch Sermons</Link>
          </li>

          <li className="flex transition-all hover:opacity-50">
            <Link href="/give">Ways to Give</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
