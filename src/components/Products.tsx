import React from "react";
import Link from "next/link";
export default function Products() {
  return (
    <section className=" mt-20">
      <div className=" flex  flex-col items-center rounded-xl bg-secClr bg-[url(https://uploadthing.com/f/24f34cf3-4c35-4c10-bc9b-4f444e011874_pattern-circles.svg)] bg-contain bg-no-repeat py-[55px] md:flex-row md:pb-[0px] md:pt-[96pxs]">
        <img
          src="https://utfs.io/f/d64ade6f-12f0-4c6e-ab04-ae949142578f_image-speaker-zx9.png"
          alt=""
          className="w-[30%] md:ml-[138px] md:w-[50%]"
        />
        <div className="mt-10 text-center text-white md:ml-[138px] md:mt-0 md:text-left">
          <h3 className="mb-4 text-[2.25rem] uppercase leading-[50px] md:text-[3.5rem] md:font-semibold">
            ZX9 <br /> Speaker
          </h3>
          <p className="mb-10 w-[40ch]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href={"/"}
            className="btn bg-primaryClr text-white hover:opacity-90"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div className="mt-8 flex h-[400px] items-center overflow-hidden rounded-xl border bg-[url(https://utfs.io/f/b177af0e-4e45-4d1f-bfdd-956cacf61234_image-speaker-zx7.jpg)] bg-cover bg-[60%] bg-no-repeat">
        <div className="ml-10 ">
          <h3 className="mb-4 text-[2.25rem] font-semibold uppercase">
            ZX7 Speaker
          </h3>
          <Link
            href={"/"}
            className="btn border-[1px] border-black hover:bg-black hover:text-white"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-8 sm:flex-row ">
        <div className="flex-1 overflow-hidden rounded-xl">
          <img
            src="https://utfs.io/f/31c9ec90-c48c-4432-b0fa-7a7fc84973aa_image-earphones-yx1.jpg"
            alt=""
            className="rounded-xl"
          />
        </div>
        <div className="w-full flex-1 rounded-xl bg-[#f1f1f1]">
          <div className="flex flex-col flex-wrap justify-center py-10 pl-10">
            <h3 className="mb-4 text-[2.25rem] font-semibold uppercase">
              YX1 Earphones
            </h3>
            <Link
              href={"/"}
              className="btn w-fit border-[1px] border-black hover:bg-black hover:text-white "
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
