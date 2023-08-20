"use client";
import { setCart } from "@/app/features/cart/cartSlice";
import { RootState } from "@/app/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
type product = {
  shortName: string;
  price: number;
  productCount: number;
  cartImage: string;
};
export default function CartIcon() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useSelector((state: RootState) => state.cart);
  const productCount = cart.reduce(
    (accumulator, product: product) => accumulator + product.productCount,
    0,
  );
  const total = cart?.reduce(
    (accumulator, product: product) =>
      accumulator + product.productCount * product.price,
    0,
  );
  const dispatch = useDispatch();
  function removeAll() {
    localStorage.setItem("cart", JSON.stringify([]));
    dispatch(setCart([]));
  }
  function decreaseAmount(product: product) {
    if (product.productCount == 1) {
      const newCart: [] | product[] = [];
      cart.forEach((item: product) => {
        if (item.shortName != product.shortName) newCart.push(item);
      });
      dispatch(setCart(newCart));
      return;
    }
    const newCart = cart.map((item: product) => {
      if (item.shortName === product.shortName) {
        return {
          ...product,
          productCount: product.productCount - 1,
        };
      } else {
        return item;
      }
    });
    dispatch(setCart(newCart));
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function increaseAmount(product: product) {
    const newCart = cart.map((item: product) => {
      if (item.shortName === product.shortName) {
        return {
          ...product,
          productCount: product.productCount + 1,
        };
      } else {
        return item;
      }
    });
    dispatch(setCart(newCart));
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  const isDisabled = isLoading || productCount === 0;
  async function onCheckout() {
    setIsLoading(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(cart),
    });

    const session = await response.json();
    setIsLoading(false);
    router.push(session.url);
    dispatch(setCart([]));
  }
  return (
    <div
      className="relative  h-[22px] w-[24px]"
      onClick={(e) => {
        e.stopPropagation();
        setCartOpen(true);
      }}
    >
      <Image width={500} height={500} src="/icon-cart.svg" alt="" />
      <div className="absolute -right-2 -top-2 z-10 flex  h-[10px] w-[10px] items-center justify-center rounded-full bg-secClr p-[10px] text-center font-semibold text-white">
        {productCount}
      </div>
      <div
        className={`${
          cartOpen ? "block" : "hidden"
        } fixed left-0 top-0 z-40 h-screen w-screen bg-[#19191975]`}
        onClick={(e) => {
          e.stopPropagation();
          setCartOpen(false);
        }}
      >
        <div
          className="container "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="ml-auto mt-28 max-w-[380px] rounded-[5px] bg-white p-8">
            <div className="mb-8 flex justify-between text-[1.125rem] font-semibold leading-[1.2rem] tracking-[0.0806rem]">
              <h3>CART ({productCount}) </h3>
              <button
                className="font-thin text-gray-500 underline"
                onClick={removeAll}
              >
                {productCount ? "Remove all" : ""}
              </button>
            </div>
            <ul className="  mb-8 " onClick={(e) => e.stopPropagation()}>
              {cart.map((product: product) => {
                return (
                  <li
                    key={product.shortName}
                    className="mt-8 flex items-center justify-between"
                  >
                    <div className="flex h-16  w-16">
                      {" "}
                      <Image
                        width={500}
                        height={500}
                        src={product.cartImage}
                        alt=""
                      />
                      <div className="ml-2 font-semibold">
                        <p className="w-[10ch]">{product.shortName}</p>
                        <p className="text-gray-500">${product.price}</p>
                      </div>
                    </div>
                    <div className="flex">
                      <button
                        className="h-8 w-[38.4px] bg-[#f1f1f1] text-secClr hover:bg-[#d3d3d3]"
                        onClick={() => decreaseAmount(product)}
                      >
                        -
                      </button>
                      <div className="my-auto h-8 w-[20px] bg-[#f1f1f1]  text-center">
                        {product.productCount}
                      </div>
                      <button
                        className="h-8 w-[38.4px] bg-[#f1f1f1] text-secClr hover:bg-[#d3d3d3]"
                        onClick={() => increaseAmount(product)}
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-between text-base text-gray-400">
              <span className="mr-auto">shipping</span>
              <span className="ml-auto font-semibold text-primaryClr">
                ${total ? "30" : "0"}
              </span>
            </div>
            <div
              className="mb-6 flex justify-between text-[0.9375rem] leading-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="tracking-wider">TOTAL</div>
              <div className="text-[1.125rem] font-semibold ">
                ${total ? total + 30 : 0}
              </div>
            </div>
            <button
              onClick={onCheckout}
              disabled={isDisabled}
              className={`btn block min-w-full bg-secClr text-center uppercase text-white hover:opacity-80 ${
                isDisabled && "opacity-80"
              }`}
            >
              {isLoading ? "...loading" : "checkout"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
