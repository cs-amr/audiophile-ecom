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
import React from "react";
import Form from "./Form";
import prisma from "../../../../../db";

export default async function page() {
  const categories = await prisma.category.findMany();
  return (
    <main className="mx-auto max-w-[1334px]">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Heading
            title="Categories (3)"
            description="Manage categories for your store"
          />
          <Separator />
          <Table>
            <TableCaption>A list of your categories.</TableCaption>

            <TableHeader>
              <TableRow>
                <TableHead>category</TableHead>
                <TableHead className="">id</TableHead>
                <TableHead>date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories?.map((category) => {
                return (
                  <TableRow key={category.id}>
                    <TableCell className="font-medium">
                      {category.name}
                    </TableCell>
                    <TableCell>{category?.id}</TableCell>
                    <TableCell>
                      {(category?.createdAt)
                        .toString()
                        .slice(0, 10)
                        .replace(" ", "-")
                        .replace(" ", "-")}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Heading title="Create New Category" description="" />
          <Form />
        </div>
      </div>
    </main>
  );
}
