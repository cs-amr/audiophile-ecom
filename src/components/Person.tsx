import Image from "next/image";
import React from "react";

export default function Person() {
  return (
    <div className="container mb-20 mt-10">
      <div className="flex flex-col-reverse items-center gap-7 md:flex-row">
        <div className="flex flex-1 flex-col items-center text-center">
          <h4 className="mb-4 max-w-[22ch] text-center text-[2.25rem] font-semibold uppercase">
            Bringing you the <span className="text-secClr">best</span> audio
            gear
          </h4>
          <p className="text-gray-500">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="flex-1 rounded-xl">
          <Image
            src="https://utfs.io/f/a639f974-7606-4e15-a477-2fa8021a8931_image-best-gear.jpg"
            alt="person"
            height={500}
            width={500}
            style={{
              objectFit: "contain", // cover, contain, none
            }}
            className=" rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
