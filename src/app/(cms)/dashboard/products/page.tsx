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
import { useEffect, useState } from "react";
import { string } from "zod";
type Prodcut = {
  id: string;
  name: string;
  shortName: string;
  price: number;
  priceId: string;
  description: string;
  features: string;
  isNew: boolean;
  category: string;
  productImage: { desktop: string; tablet: string; mobile: string };
  cartImage: string;
  includedItems: { item: string; quantity: number }[];
  galleryImages: { img1: string; img2: string; img3: string };
  createdAt: string;
};
const ProductsPage = ({}: {}) => {
  const [products, setProducts] = useState<Prodcut[]>([]);
  const [ProductImage, setProductImage] = useState<{
    desktop: string;
    tablet: string;
    mobile: string;
  }>({
    desktop: "",
    tablet: "",
    mobile: "",
  });
  const [GalleryImages, setGalleryImages] = useState<{
    img1: string;
    img2: string;
    img3: string;
  }>({
    img1: "",
    img2: "",
    img3: "",
  });
  const [CartImg, setCartImg] = useState<string>("");
  useEffect(() => {
    async function getProducts() {
      const res = await fetch("/api/product");
      const data = await res.json();
      setProducts(data);
      return data;
    }
    getProducts();
  }, []);

  return (
    <main className="mx-auto max-w-[1334px]">
      <div className=" ">
        <div className="flex-1  space-y-4 p-8 pt-6">
          <Heading
            title={`Products (${products.length})`}
            description="Manage products of your store"
          />
          <Separator />
          <Table>
            <TableCaption>A list of your products.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">name</TableHead>
                <TableHead className="">short name</TableHead>
                <TableHead>status</TableHead>
                <TableHead className="text-center">date</TableHead>
                <TableHead className="">price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((product: Prodcut) => {
                let date: any = new Date(product.createdAt);
                date = date.toDateString();
                return (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.shortName}</TableCell>
                    <TableCell>{product.isNew ? "new" : "old"}</TableCell>
                    <TableCell className="text-center">{date}</TableCell>
                    <TableCell className="">${product.price}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <Heading title="Add New Product" description="" />
          <div className="flex flex-wrap justify-between">
            {/* ########## */}
            <div>
              <h1 className="mb-2 mt-8">
                Product Images
                <br />
              </h1>
              <div className=" flex flex-wrap items-center gap-10">
                <div className=" flex   w-fit flex-col items-center ">
                  <Label htmlFor="desktop" className="m-2">
                    Desktop <br />
                  </Label>
                  <Image
                    className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                    src={
                      ProductImage.desktop
                        ? ProductImage.desktop
                        : `https://img.icons8.com/material-outlined/24/add-image.png`
                    }
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
                  <Image
                    className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                    src={
                      ProductImage.tablet
                        ? ProductImage.tablet
                        : `https://img.icons8.com/material-outlined/24/add-image.png`
                    }
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
                  <Image
                    className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                    src={
                      ProductImage.mobile
                        ? ProductImage.mobile
                        : `https://img.icons8.com/material-outlined/24/add-image.png`
                    }
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

              <h1 className="mb-2 mt-8">
                Gallery Images
                <br />
              </h1>
              <div className=" flex flex-wrap items-center gap-10">
                <div className=" flex   w-fit flex-col items-center ">
                  <Label htmlFor="desktop" className="m-2">
                    Image 1 <br />
                  </Label>
                  <Image
                    className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                    src={
                      GalleryImages.img1
                        ? GalleryImages.img1
                        : `https://img.icons8.com/material-outlined/24/add-image.png`
                    }
                    width={130}
                    height={10}
                    alt="product Images"
                  />
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res) {
                        setGalleryImages({
                          ...GalleryImages,
                          img1: res[0].fileUrl,
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
                    Image 2 <br />
                  </Label>
                  <Image
                    className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                    src={
                      GalleryImages.img2
                        ? GalleryImages.img2
                        : `https://img.icons8.com/material-outlined/24/add-image.png`
                    }
                    width={130}
                    height={10}
                    alt="product Images"
                  />
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res) {
                        setGalleryImages({
                          ...GalleryImages,
                          img2: res[0].fileUrl,
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
                    Image 3 <br />
                  </Label>
                  <Image
                    className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                    src={
                      GalleryImages.img3
                        ? GalleryImages.img3
                        : `https://img.icons8.com/material-outlined/24/add-image.png`
                    }
                    width={130}
                    height={10}
                    alt="product Images"
                  />
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      if (res) {
                        setGalleryImages({
                          ...GalleryImages,
                          img3: res[0].fileUrl,
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
              <div className="mt-10 flex   w-fit flex-col items-center ">
                <Label htmlFor="desktop" className="m-2">
                  Cart Image <br />
                </Label>
                <Image
                  className="mb-4 h-[120px] rounded-lg border  object-scale-down  "
                  src={
                    CartImg
                      ? CartImg
                      : `https://img.icons8.com/material-outlined/24/add-image.png`
                  }
                  width={130}
                  height={10}
                  alt="product Images"
                />
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    if (res) {
                      setCartImg(res[0].fileUrl);
                    }
                  }}
                  onUploadError={(error: Error) => {
                    console.log(`ERROR! ${error.message}`);
                  }}
                  key={1}
                />
              </div>
            </div>
            {/* //// */}
            <Form
              ProductImage={ProductImage}
              setProductImage={setProductImage}
              GalleryImages={GalleryImages}
              setGalleryImages={setGalleryImages}
              CartImg={CartImg}
              setCartImg={setCartImg}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
