import "../app/index.css";
import React from "react";
import Link from "next/link";
export default function Landing() {
  return (
    <section className="bg-primaryClr text-center md:text-left ">
      <div className="mx-auto max-w-[1160px] bg-[url(https://utfs.io/f/ac5878c5-c9dd-4342-868d-d9fb1e862b88_image-hero.jpg)] bg-contain  bg-center bg-no-repeat pb-[112px] pt-[96px]  sm:bg-[url(https://utfs.io/f/ffe5673d-bfe0-4627-947a-2574c9479fd5_image-hero.jpg)] sm:pt-[128px] md:bg-[url(https://utfs.io/f/c830f326-e44b-4879-b605-343ea32a0812_image-hero.jpg)]  md:pt-[160px]">
        <h1 className="mx-auto mb-[24px] max-w-[15ch] text-[2.25rem] font-normal uppercase leading-tight tracking-wider  text-white sm:text-[3.5rem] sm:font-semibold md:mx-0">
          <strong className=" text-[1rem] font-semibold tracking-[.8rem]  text-pClr">
            NEW PRODUCT
          </strong>
          <br />
          XX99 Mark II Headphones
        </h1>
        <p className="mx-auto mb-10 max-w-[40ch] text-pClr md:mx-0">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          className="tracking-[0.0625rem bg-secClr px-[32px] py-[14px] text-[0.8125rem] font-bold text-white hover:opacity-90"
          href={"/"}
        >
          SEE PRODUCT
        </Link>
      </div>
    </section>
  );
}
