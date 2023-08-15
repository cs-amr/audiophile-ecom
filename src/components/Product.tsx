import Link from "next/link";

export default function Product({
  name,
  description,
  productImage,
  isNew,
  index,
  productId,
  category,
}: {
  name: string;
  description: string;
  productImage: { desktop: string; tablet: string; mobile: string };
  isNew: boolean;
  index: number;
  productId: string;
  category: string;
}) {
  return (
    <div
      className={`mb-20 flex flex-col items-center justify-center ${
        index % 2 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="flex-1">
        <img alt="alt" src={productImage.desktop} />
      </div>
      <div
        className={`flex-1  text-center  ${
          index % 2 ? "md:pl-32" : "md:pr-32"
        }  md:text-left`}
      >
        <h2 className="mb-6 mt-4 w-[12ch] text-[1.75rem] font-bold uppercase leading-[1.7rem]">
          {" "}
          <strong className=" -mb-4 block text-[0.875rem]  font-light  tracking-[0.625rem] text-secClr ">
            {isNew ? "NEW PRODUCT" : ""}
          </strong>
          <br />
          {name}
        </h2>
        <p className="mb-6 text-gray-500">{description}</p>
        <Link
          href={"/" + category + "/" + productId}
          className="btn bg-secClr text-white hover:opacity-80"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}
