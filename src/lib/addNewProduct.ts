import { FormEvent } from "react";

export async function addNewProduct(
  event: FormEvent | FormData | any,
  setCartImg: React.Dispatch<React.SetStateAction<any>>,
  setGalleryImages: React.Dispatch<React.SetStateAction<any>>,
  setProductImage: React.Dispatch<React.SetStateAction<any>>,
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
    name: target?.name?.value,
    shortName: target?.shortname?.value,
    price,
    description: target?.description?.value,
    features: target?.features?.value,
    isNew,
    category: target?.category?.value,
    productImage: productImage,
    cartImage: target?.cartImage?.value,
    includedItems: items,
    galleryImages,
    priceId: "",
  };
  try {
    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: target.name.value,
        image: target?.cartImage?.value,
        default_price_data: {
          currency: "USD",
          unit_amount: target?.price.value,
        },
      }),
    });
    const { default_price } = await res.json();
    console.log(default_price);
    data.priceId = default_price;
    const response = await fetch("/api/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch {
  } finally {
    setCartImg("");
    setGalleryImages({ img1: "", img2: "", img3: "" });
    setProductImage({
      desktop: "",
      tablet: "",
      mobile: "",
    });
    target.reset();
  }
}
