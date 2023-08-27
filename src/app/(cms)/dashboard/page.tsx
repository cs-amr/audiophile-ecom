export const revalidate = 0;
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign, Package } from "lucide-react";
import { stripe } from "@/lib/stripe";
import prisma from "../../../../db";
import { RecentSales } from "../components/RecentSales";
import { Overview } from "../components/Overview";
export default async function Dashboard() {
  const charges = await stripe.charges.list();
  const products = await prisma.product.findMany();
  const orders = await prisma.order.findMany();
  const balance = orders.reduce((acc, current) => {
    return acc + current.amount;
  }, 0);
  return (
    <main className="mx-auto max-w-[1334px]">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Heading title="Dashboard" description="Overview of your store" />
          <Separator />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent className="text-base font-bold sm:text-2xl">
                {new Intl.NumberFormat("en-US", {
                  style: "decimal",
                }).format(balance)}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-base font-bold sm:text-2xl">
                  +{orders.length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-base font-bold sm:text-2xl">
                  {products.length}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-2 md:flex-row ">
            <Card className="h-[410px]  md:w-[66%]">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview orders={orders} />
              </CardContent>
            </Card>
            <Card className="h-[410px] overflow-scroll overflow-y-hidden md:w-[33%]">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent className="h-auto px-6 pb-6">
                <div className="h-auto  ">
                  <RecentSales orders={orders} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
