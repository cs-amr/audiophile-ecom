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
      <img
        src={img}
        alt="category"
        className="absolute -top-10   h-[132px] w-[138px]"
      />
      <h2 className="mb-2 font-semibold uppercase  tracking-wider">
        {category}
      </h2>
      <div className="flex w-fit items-center gap-2 ">
        <button className=" font-medium text-primaryClr hover:text-secClr ">
          SHOP
        </button>
        <img
          src="https://utfs.io/f/dcf043da-85db-4e16-80c9-169b0539dc5c_icon-arrow-right.svg"
          alt=">"
          className="h-3 w-3"
        />
      </div>
    </Link>
  );
}
