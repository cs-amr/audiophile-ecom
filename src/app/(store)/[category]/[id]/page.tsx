import React from "react";
import prisma from "../../../../../db";
import Link from "next/link";
import AddToCard from "@/components/AddToCard";
import CategoryLinks from "@/components/CategoryLinks";
import NewProductLink from "@/components/NewProductLink";
import ReduxProvider from "@/components/ReduxProvider";
export default async function page({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
  });

  const newProducts = await prisma.product.findMany({
    where: {
      isNew: true,
    },
  });
  return (
    <main className="container">
      <section className="mt-20 ">
        <div className="flex flex-col items-center  sm:flex-row">
          <div className="flex-1">
            <picture>
              <source
                media=" (max-width:476x)"
                srcSet={product?.productImage.mobile}
              />
              <source
                media="(max-width: 990px) and (min-width: 476px)"
                srcSet={product?.productImage.tablet}
              />
              <source
                media="(min-width:990px)"
                srcSet={product?.productImage.desktop}
              />
              <img
                src={product?.productImage.desktop}
                alt="product"
                className="rounded-xl"
              />
            </picture>
          </div>
          <div className="flex-1 sm:ml-8 md:ml-[7.75rem]">
            <h2 className="mb-6 mt-4 w-[12ch] text-[1.75rem] font-bold uppercase leading-[2.2rem] md:text-[2.5rem]">
              {" "}
              <strong className=" -mb-4 block text-[0.875rem]  font-light  tracking-[0.625rem] text-secClr ">
                {"NEW PRODUCT"}
              </strong>
              <br />
              {product?.name}
            </h2>
            <p className="text-gray-500">{product?.description}</p>
            <p className="my-4 font-bold"> ${product?.price}</p>
            <ReduxProvider>
              <AddToCard
                cartImage={product?.cartImage}
                shortName={product?.shortName}
                price={product?.price}
              />
            </ReduxProvider>
          </div>
        </div>
        <div className="mt-20 flex flex-col md:flex-row md:gap-10">
          <div>
            <h4 className="mb-4 mt-8 text-[1.5rem] font-bold uppercase sm:text-[2rem] md:flex-1">
              Features
            </h4>
            <p className="text-[0.85] text-gray-500 ">{product?.features}</p>
          </div>

          <div>
            <h4 className="mb-4 mt-8 min-w-[300px]  text-[1.5rem] font-bold uppercase sm:text-[2rem] md:flex-1">
              In The Box
            </h4>
            <div>
              <ul>
                {product?.includedItems.map((item) => {
                  return (
                    <li>
                      <span className="mr-2 font-bold text-secClr">
                        {item.quantity}x
                      </span>
                      {item.item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="mb-40 mt-20 flex flex-col gap-[1.25rem]  sm:flex-row">
          <div className="flex flex-1 flex-col gap-[1.25rem]">
            <img
              src={product?.galleryImages.img1}
              className=" rounded-xl"
              alt="productImg"
            />
            <img
              src={product?.galleryImages.img2}
              className="rounded-xl"
              alt="productImg"
            />
          </div>
          <div className="flex-1 border sm:min-h-full ">
            <img
              src={product?.galleryImages.img3}
              className=" h-full rounded-xl object-cover"
              alt="productImg"
            />
          </div>
        </div>
        <div className="mb-20">
          <h4 className="mb-4 mt-8 text-center text-[1.5rem] font-bold uppercase sm:text-[2rem] md:flex-1">
            YOU MAY ALSO LIKE
          </h4>
          <div className=" mx-auto flex w-fit flex-col  md:flex-row ">
            {newProducts.map(({ id, productImage, category, shortName }) => {
              if (id !== params.id) {
                return (
                  <NewProductLink
                    productImage={productImage.desktop}
                    category={category}
                    shortName={shortName}
                    id={id}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="my-24 ">
          <CategoryLinks />
        </div>
      </section>
    </main>
  );
}
