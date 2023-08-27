"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function RecentSales({ orders }: { orders: any }) {
  return (
    <div className=" space-y-8 ">
      {orders.slice(0, 5)?.map((order: any, index: number) => {
        return (
          <div className="flex items-center" key={order.id}>
            <Avatar className="h-9 w-9">
              <AvatarImage
                src={`https://ui.shadcn.com/avatars/0${index + 1}.png`}
                alt="Avatar"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{order.name}</p>
              <p className="text-sm text-muted-foreground">{order?.email}</p>
            </div>
            <div className="ml-auto font-medium">+${order.amount}</div>
          </div>
        );
      })}
    </div>
  );
}
