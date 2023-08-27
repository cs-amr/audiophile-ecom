import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Products() {
  return (
    <section className=" mt-20">
      <div className=" flex  flex-col items-center rounded-xl bg-secClr bg-[url(https://utfs.io/f/b4723d26-7f74-455e-a946-4a77850daf4a_pattern-circles.svg)] bg-contain bg-no-repeat py-[55px] md:flex-row md:pb-[0px] md:pt-[96pxs]">
        <Image
          src="https://utfs.io/f/7dc5d88a-49fe-438d-b8c5-5be3ea19a274_image-speaker-zx9.png"
          alt=""
          className="w-[30%] md:ml-[138px] md:w-[50%]"
          width={100}
          height={100}
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
            href={"/speakers/cllc9wccy0005uj4wrrd4js9s"}
            className="btn bg-primaryClr text-white hover:opacity-90"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div className="mt-8 flex h-[400px] items-center overflow-hidden rounded-xl border bg-[url(https://utfs.io/f/f2ff4fd1-710a-4b19-a929-4035ff6274f7_image-speaker-zx7.jpg)] bg-cover bg-[60%] bg-no-repeat">
        <div className="ml-10 ">
          <h3 className="mb-4 text-[2.25rem] font-semibold uppercase">
            ZX7 Speaker
          </h3>
          <Link
            href={"/speakers/cllcaqr480006uj4wm6dgoj59"}
            className="btn border-[1px] border-black hover:bg-black hover:text-white"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-8 sm:flex-row ">
        <div className="flex-1 overflow-hidden rounded-xl">
          <Image
            src="https://utfs.io/f/b97cc233-da5f-430d-8c7d-1d0266158bab_image-earphones-yx1.jpg"
            alt=""
            className="rounded-xl w-[100%]"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full flex-1 rounded-xl bg-[#f1f1f1]">
          <div className="flex flex-col flex-wrap justify-center py-10 pl-10">
            <h3 className="mb-4 text-[2.25rem] font-semibold uppercase">
              YX1 Earphones
            </h3>
            <Link
              href={"/earphones/cllc9rfrm0004uj4w0eq750cm"}
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
