import { FormEvent } from "react";
import { stripe } from "./stripe";
import { Prodcut } from "@/app/(cms)/dashboard/products/page";

export default async function editProduct(
  event: FormData | any,
  editingProduct: Prodcut,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) {
  event.preventDefault();
  const target = event?.target;
  let productImage = JSON.parse(target?.productImage.value);
  let galleryImages = JSON.parse(target?.galleryImages.value);
  let item1 = target?.item1.value;
  let qu1 = parseInt(target.quantity1.value);
  let item2 = target?.item2.value;
  let qu2 = parseInt(target.quantity2.value);
  let item3 = target?.item3.value;
  let qu3 = parseInt(target.quantity3.value);
  let items = [
    { item: item1, quantity: qu1 },
    { item: item2, quantity: qu2 },
    { item: item3, quantity: qu3 },
  ];
  let price = parseFloat(target?.price?.value);
  let isNew = target?.isnew?.value === "yes" ? true : false;
  const data = {
    id: editingProduct.id,
    name: target?.name?.value,
    shortName: target?.shortname?.value,
    productId: editingProduct?.productId,
    price,
    description: target?.description?.value,
    features: target?.features?.value,
    isNew,
    category: target?.category?.value,
    productImage: productImage,
    cartImage: target?.cartImage?.value,
    includedItems: items,
    galleryImages,
    priceId: editingProduct?.priceId,
  };
  setIsLoading(true);
  const res = await fetch("/api/product/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => setIsLoading(false));
}
