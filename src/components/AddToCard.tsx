"use client";
import { setCart } from "@/app/features/cart/cartSlice";
import { RootState, store } from "@/app/store";
import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

export default function AddToCard({
  cartImage,
  shortName,
  price,
  priceId,
}: {
  cartImage: string | undefined;
  shortName: string | undefined;
  price: number | undefined;
  priceId: string | undefined;
}) {
  const [productCount, setProductCount] = useState<number>(1);
  const { cart } = useSelector((state: RootState) => state.cart);
  let currentProduct = {
    shortName,
    productCount,
    cartImage,
    price,
    priceId,
  };
  const dispatch = useDispatch();

  function handleClick() {
    if (cart.length == 0) {
      localStorage.setItem("cart", JSON.stringify([currentProduct]));
      dispatch(setCart([currentProduct]));
      return;
    }

    const existingItem = cart?.find(
      (product: any) => product.shortName === shortName,
    );

    if (existingItem) {
      let newProducts = cart?.map((cartProduct: any) => {
        if (cartProduct.shortName === existingItem?.shortName) {
          return {
            shortName,
            productCount: productCount + existingItem.productCount,
            cartImage,
            price,
            priceId,
          };
        } else {
          return cartProduct;
        }
      });
      dispatch(setCart(newProducts));
      localStorage.setItem("cart", JSON.stringify(newProducts));
    } else {
      const newProducts = [...cart, currentProduct];
      dispatch(setCart(newProducts));
      localStorage.setItem("cart", JSON.stringify(newProducts));
    }
  }
  return (
    <Provider store={store}>
      <div className="flex  ">
        <div className="mb-2 mr-2 flex  text-secClr">
          <button
            onClick={() => {
              if (productCount >= 2) {
                setProductCount(productCount - 1);
              }
            }}
            className="h-12 w-12 bg-[#f1f1f1] hover:bg-[#d3d3d3] hover:text-secClr"
          >
            -
          </button>
          <div className="flex w-7 items-center justify-center text-primaryClr">
            {productCount}
          </div>
          <button
            onClick={() => setProductCount(productCount + 1)}
            className="h-12 w-12 bg-[#f1f1f1] hover:bg-[#d3d3d3] hover:text-secClr"
          >
            +
          </button>
        </div>
        <button
          className="btn h-12 bg-secClr text-white hover:opacity-75"
          onClick={handleClick}
        >
          ADD TO CARD
        </button>
      </div>
    </Provider>
  );
}
