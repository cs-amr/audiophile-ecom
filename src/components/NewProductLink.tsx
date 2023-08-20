import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewProductLink({
  id,
  category,
  productImage,
  shortName,
}: {
  id: string;
  category: string;
  productImage: string | null;
  shortName: string;
}) {
  return (
    <div className=" mx-2 mt-6 flex flex-col justify-center">
      <div className=" max-w-[350px]">
        <Image
          src={productImage ?? ""}
          alt="productImage"
          className="rounded-xl"
          width={500}
          height={500}
        />
      </div>
      <div className="my-4 h-6  text-center text-[1.5rem] font-bold">
        {shortName}
      </div>
      <Link
        href={"/" + category + "/" + id}
        className="btn mx-aut mx-auto w-fit bg-secClr text-white hover:opacity-80"
      >
        SEE PRODUCT
      </Link>
    </div>
  );
}
