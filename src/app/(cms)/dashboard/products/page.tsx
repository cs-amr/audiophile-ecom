"use client";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import "@uploadthing/react/styles.css";
import { UploadButton } from "@/utils/uploadthing";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Form from "./Form";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const ProductsPage = ({}: {}) => {
  const [ProductImage, setProductImage] = useState<{
    desktop: string;
    tablet: string;
    mobile: string;
  }>({
    desktop: "",
    tablet: "",
    mobile: "",
  });
  return (
    <main className="mx-auto max-w-[1334px]">
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <Heading
            title="Products (3)"
            description="Manage products of your store"
          />
          <Separator />
          <Table>
            <TableCaption>A list of your products.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">name</TableHead>
                <TableHead>stock</TableHead>
                <TableHead>data</TableHead>
                <TableHead className="text-right">sales</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">headphones ii</TableCell>
                <TableCell>3</TableCell>
                <TableCell>25-07-2023</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Heading title="Add New Product" description="" />
          <h1 className="-mb-6 mt-8">
            Product Images
            <br />
          </h1>
          <div className=" flex flex-wrap items-center gap-10">
            <div className=" flex   w-fit flex-col items-center ">
              <Label htmlFor="desktop" className="m-2">
                Desktop <br />
              </Label>
              <img
                className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                src={ProductImage.desktop}
                width={130}
                height={10}
                alt="product Images"
              />
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res) {
                    setProductImage({
                      ...ProductImage,
                      desktop: res[0].fileUrl,
                    });
                  }
                }}
                onUploadError={(error: Error) => {
                  console.log(`ERROR! ${error.message}`);
                }}
                key={1}
              />
            </div>
            <div className=" flex   w-fit flex-col items-center">
              <Label htmlFor="desktop" className="m-2">
                Tablet <br />
              </Label>
              <img
                className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                src={ProductImage.tablet}
                width={130}
                height={10}
                alt="product Images"
              />
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res) {
                    setProductImage({
                      ...ProductImage,
                      tablet: res[0].fileUrl,
                    });
                  }
                }}
                onUploadError={(error: Error) => {
                  console.log(`ERROR! ${error.message}`);
                }}
                key={2}
              />
            </div>
            <div className=" flex   w-fit flex-col items-center">
              <Label htmlFor="desktop" className="m-2">
                Mobile <br />
              </Label>
              <img
                className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                src={ProductImage.mobile}
                width={130}
                height={10}
                alt="product Images"
              />
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  if (res) {
                    setProductImage({
                      ...ProductImage,
                      mobile: res[0].fileUrl,
                    });
                  }
                }}
                onUploadError={(error: Error) => {
                  console.log(`ERROR! ${error.message}`);
                }}
                key={3}
              />
            </div>
          </div>

          <Form ProductImage={ProductImage} setProductImage={setProductImage} />
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
