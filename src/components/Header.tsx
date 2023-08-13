"use client";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";
import NavBars from "./NavBars";
import Image from "next/image";
import CategoryLinks from "./CategoryLinks";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative   bg-primaryClr px-6 ">
      <div
        className={`absolute left-0 duration-300 ${
          open ? "top-[90px] z-20" : "-top-[900px] "
        }  w-full bg-white md:hidden `}
      >
        <div className="container pb-10 pt-14">
          <CategoryLinks />
        </div>
      </div>
      <div className="mx-auto flex h-full max-w-[1160px] justify-between border-b border-[rgba(255,255,255,0.1)] py-8">
        <NavBars open={open} setOpen={setOpen} />
        <Image src={"/logo.svg"} width={150} height={50} alt="audiophile" />

        <nav className="hidden font-semibold text-white md:block">
          <Link className={`mx-4 duration-75 hover:text-secClr`} href={"/"}>
            HOME
          </Link>
          <Link
            className={`mx-4  duration-75  hover:text-secClr`}
            href={"/headphones"}
          >
            HEADPHONES
          </Link>
          <Link
            className={`mx-4 duration-75 hover:text-secClr`}
            href={"/speakers"}
          >
            SPEAKERS
          </Link>
          <Link
            className={`mx-4 duration-75 hover:text-secClr`}
            href={"/earphones"}
          >
            EARPHONES
          </Link>
        </nav>

        <CartIcon />
      </div>
    </header>
  );
}
