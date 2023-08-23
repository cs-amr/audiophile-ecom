export const revalidate = 0;
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { stripe } from "@/lib/stripe";
import React from "react";

export default async function Orders() {
  const { data } = await stripe.charges.list();
  return (
    <main className="mx-auto max-w-[1334px]">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Heading title={`Orders `} description=" Orders of your store" />
          <Separator />
          <Table>
            <TableCaption>A list of your orders.</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead className="">id</TableHead>
                <TableHead>date</TableHead>
                <TableHead className="">status</TableHead>
                <TableHead className="">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((order) => {
                const date = new Date(order.created * 1000);

                const formattedDate = date.toString().slice(0, 16);

                return (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{formattedDate}</TableCell>
                    <TableCell>{order.paid ? "paid" : "pending"}</TableCell>
                    <TableCell className="">${order.amount / 100}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
