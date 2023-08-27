import { NextRequest } from "next/server";
import { stripe } from "@/lib/stripe";
import prisma from "../../../../../db";
export async function POST(req: NextRequest) {
  const id = await req.json();
  const session = await stripe.checkout.sessions.retrieve(id);
  let { id: order_id, amount_total, customer_details }: any = session;
  order_id = order_id.slice(8);
  // {
  //       amount: amount_total / 100.0,
  //       created: new Date(),
  //       email: customer_details.email,
  //       name: customer_details.name,
  //       id: order_id,
  //     },
  const res = await prisma.order.create({
    data: {
      amount: 5050,
      created: "2023-05-27T11:28:09.985+00:00",
      email: "customer_details.email",
      name: "customer_details.name",
      id: "sjflkjd26a[pflssdlakfj",
    },
  });
}
