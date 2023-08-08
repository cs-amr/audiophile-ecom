import React from "react";

export default function CartIcon() {
  return (
    <div className="relative h-[22px] w-[24px]">
      <img src="/icon-cart.svg" alt="" />
      <div className="absolute -right-2 -top-2 flex  h-[10px] w-[10px] items-center justify-center rounded-full bg-secClr p-[10px] text-center font-semibold text-white">
        1
      </div>
    </div>
  );
}
