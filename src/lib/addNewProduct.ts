// import prisma from "../../../db";
import { FormEvent } from "react";
import prisma from "../../db";

export async function addNewProduct(event: FormEvent) {
  event.preventDefault();
  const target = event.target;
  const data = {
    name: target?.name.value,
    shortName: target?.shortname.value,
    price: target?.price.value,
    isNew: target?.isnew.value,
    category: target?.category.value,
    description: target?.category.value,
    features: target?.features.value,
    image: target?.image.value,
    cartImage: target?.image.value,
  };
  const response = await fetch("/api/product/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
