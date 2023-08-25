import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const product = await req.json();
    const { id } = await stripe.prices.create({
      unit_amount: product.price * 100,
      currency: "usd",
      product: product.productId,
    });

    const modifiedProduct = await stripe.products.update(product.productId, {
      default_price: id,
    });

    const dbProduct = await prisma?.product.update({
      where: { id: product.id },
      data: {
        name: product.name,
        shortName: product.shortName,
        cartImage: product.cartImage,
        price: product.price,
        priceId: id, //to be changed
        category: product.category,
        description: product.description,
        features: product.features,
        galleryImages: product.galleryImages,
        isNew: product.isNew,
        productId: product.productId,
        productImage: product.productImage,
        includedItems: product.includedItems,
      },
    });
    console.log(dbProduct);
    return NextResponse.json(dbProduct);
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
