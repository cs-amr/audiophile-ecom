import { NextRequest } from "next/server";
import { stripe } from "@/lib/stripe";
import prisma from "../../../../../db";
export async function POST(req: NextRequest) {
  const id = await req.json();
  const session = await stripe.checkout.sessions.retrieve(id);
  let { id: order_id, amount_total, customer_details }: any = session;
  order_id = order_id.slice(8);

  const res = await prisma.order.create({
    data: {
      amount: amount_total / 100.0,
      created: new Date(),
      email: customer_details.email,
      name: customer_details.name,
      id: order_id,
    },
  });
}
