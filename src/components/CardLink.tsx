import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardLink({
  img,
  category,
}: {
  img: string;
  category: string;
}) {
  return (
    <Link
      href={"/" + category}
      className="relative flex flex-grow flex-col items-center rounded-xl bg-[#f1f1f1] pb-[22px] pt-[88px] text-center"
    >
      <Image
        src={img}
        alt="category"
        className="absolute -top-10   h-[132px] w-[138px]"
        width={100}
        height={100}
      />
      <h2 className="mb-2 font-semibold uppercase  tracking-wider">
        {category}
      </h2>
      <div className="flex w-fit items-center gap-2 ">
        <button className=" font-medium text-primaryClr hover:text-secClr ">
          SHOP
        </button>
        <Image
          src="https://utfs.io/f/d91e1d26-7f6b-46d5-8675-fce940f59da8_icon-arrow-right.svg"
          alt=""
          className="h-3 w-3"
          width={100}
          height={100}
        />
      </div>
    </Link>
  );
}
