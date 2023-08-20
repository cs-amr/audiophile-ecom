import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cart = await request.json();
  const lineItems = cart.map(
    (item: { priceId: string; productCount: number }) => {
      return {
        price: item?.priceId,
        quantity: item?.productCount,
      };
    },
  );
  const origin = request.headers.get("origin");

  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    line_items: lineItems,
    shipping_options: [{ shipping_rate: "shr_1NgpqtLW6hMWowfaGZubcHCg" }],
    billing_address_collection: "auto",
    success_url: origin + `/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}`,
  });
  return NextResponse.json(session);
}
