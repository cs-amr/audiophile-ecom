import React from "react";
import prisma from "../../../../../db";

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
export async function DELETE(req: NextRequest) {
  const deletingProduct = await req.json();
  await stripe.products.update(deletingProduct.productId, { active: false });

  await prisma.product.delete({ where: { id: deletingProduct.id } });
  return NextResponse.json({ Message: "success" }, { status: 200 });
}
