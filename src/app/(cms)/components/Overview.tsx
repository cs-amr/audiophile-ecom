"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
export function Overview({ orders }: { orders: any }) {
  const salesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  orders.forEach((order: any) => {
    const index = order.created.getMonth();
    salesArray[index] = salesArray[index] + order.amount;
  });
  const data = [
    {
      name: "Jan",
      total: salesArray[0],
    },
    {
      name: "Feb",
      total: salesArray[1],
    },
    {
      name: "Mar",
      total: salesArray[2],
    },
    {
      name: "Apr",
      total: salesArray[3],
    },
    {
      name: "May",
      total: salesArray[4],
    },
    {
      name: "Jun",
      total: salesArray[5],
    },
    {
      name: "Jul",
      total: salesArray[6],
    },
    {
      name: "Aug",
      total: salesArray[7],
    },
    {
      name: "Sep",
      total: salesArray[8],
    },
    {
      name: "Oct",
      total: salesArray[9],
    },
    {
      name: "Nov",
      total: salesArray[10],
    },
    {
      name: "Dec",
      total: salesArray[11],
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
