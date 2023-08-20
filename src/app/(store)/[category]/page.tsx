export const revalidate = 0;
import Product from "@/components/Product";
import prisma from "../../../../db";
import { notFound } from "next/navigation";
export default async function page({
  params,
}: {
  params: { category: string };
}) {
  const products = await prisma.product.findMany({
    where: {
      category: params.category,
    },
  });
  if (!products.length) {
    notFound();
  }

  return (
    <div>
      <div className="bg-primaryClr p-8 text-center text-[1.75rem] font-[650] uppercase tracking-[0.0894rem] text-white sm:p-[100px] sm:text-[2.5rem]">
        {params.category}
      </div>
      <section className="">
        <div className="container mb-28 mt-16">
          {products.map(
            (
              { name, description, productImage, isNew, id, category },
              index,
            ) => {
              return (
                <Product
                  category={category}
                  productId={id}
                  name={name}
                  description={description}
                  productImage={productImage}
                  isNew={isNew}
                  key={name}
                  index={index + 1}
                />
              );
            },
          )}
        </div>
      </section>
    </div>
  );
}
