import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log;
  const res = await stripe.products.create({
    name: data.name,
    images: [data.image],
    default_price_data: data.default_price_data,
  });
  return NextResponse.json(res);
}
