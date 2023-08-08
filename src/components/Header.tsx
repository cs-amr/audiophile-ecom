import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";
import NavBars from "./NavBars";
import Image from "next/image";
export default function Header() {
  return (
    <header className="h-[89px]  bg-primaryClr px-6">
      <div className="mx-auto flex h-full max-w-[1160px] justify-between border-b border-[rgba(255,255,255,0.1)] py-8">
        <NavBars />
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
