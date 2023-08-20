import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-primaryClr">
      <div className="container  pt-8 text-white">
        <div className="flex h-[90px] flex-col items-center justify-between md:flex-row ">
          <h5 className="mb-10 text-3xl font-bold">audiophile</h5>
          <nav className=" flex flex-col items-center font-semibold text-white md:flex-row">
            <Link
              className={`mx-4 mb-8 duration-75 hover:text-secClr`}
              href={"/"}
            >
              HOME
            </Link>
            <Link
              className={`mx-4 mb-8 duration-75  hover:text-secClr`}
              href={"/headphones"}
            >
              HEADPHONES
            </Link>
            <Link
              className={`mx-4 mb-8 duration-75 hover:text-secClr`}
              href={"/speakers"}
            >
              SPEAKERS
            </Link>
            <Link
              className={`mx-4 mb-8 duration-75 hover:text-secClr`}
              href={"/earphones"}
            >
              EARPHONES
            </Link>
          </nav>
        </div>
        <p className="mx-auto mb-10 mt-60 w-[70%]  text-center  text-pClr md:mx-0 md:mt-0 md:text-left ">
          Audiophile is an all in one stop to fulfill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we are open 7 days a week.
        </p>
        <p className="pb-8 text-center text-pClr md:text-left">
          Copyright 2021. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
