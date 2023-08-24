"use client";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";
import NavBars from "./NavBars";
import Image from "next/image";
import CategoryLinks from "./CategoryLinks";
import { Provider } from "react-redux";
import { store } from "@/app/store";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative   bg-primaryClr px-6 ">
      <div
        className={`absolute left-0 z-20 duration-500 ${
          open ? "top-[90px] " : "-top-[900px] "
        }  w-full bg-white md:hidden `}
      >
        <div className="container pb-10 pt-14">
          <CategoryLinks />
        </div>
      </div>
      <div className="mx-auto flex h-full max-w-[1160px] justify-between border-b border-[rgba(255,255,255,0.1)] py-8">
        <NavBars open={open} setOpen={setOpen} />
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={150} height={50} alt="audiophile" />
        </Link>

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
        <Provider store={store}>
          <div className="flex">
            <CartIcon />
            <Link href={"/login"} className="mb-1 text-white">
              <svg
                className="feather feather-user -mt-1 ml-4"
                fill="none"
                height="26"
                width="26"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
          </div>
        </Provider>
      </div>
    </header>
  );
}
