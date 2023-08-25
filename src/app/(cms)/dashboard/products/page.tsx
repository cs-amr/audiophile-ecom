"use client";
export const revalidate = 0;
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
import { Button } from "@/components/ui/button";
import { deleteProduct } from "@/lib/deleteProduct";
export type Prodcut = {
  id: string;
  productId: string;
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
  const [editingProduct, setEditingProduct] = useState<Prodcut | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Prodcut | null>(null);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
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
                    <button
                      title="Edit"
                      className="inline-block cursor-pointer "
                      onClick={() => {
                        setEditingProduct(product);
                        setCartImg(product.cartImage);
                        setGalleryImages(product.galleryImages);
                        setProductImage(product.productImage);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square my-4 mr-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                    <button
                      title="Delete"
                      className="my-auto inline-block cursor-pointer"
                      onClick={() => {
                        setDeleteOpen(true);
                        setDeletingProduct(product);
                        setCartImg("");
                        setGalleryImages({
                          img1: "",
                          img2: "",
                          img3: "",
                        });
                        setProductImage({
                          desktop: "",
                          tablet: "",
                          mobile: "",
                        });
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-trash my-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </button>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <Heading
            title={`${editingProduct ? "Edit" : " Add New"} Product`}
            description=""
          />
          <div className="flex flex-wrap justify-between">
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
                        : editingProduct?.productImage.desktop
                        ? editingProduct?.productImage.desktop
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
                        : editingProduct?.productImage.tablet
                        ? editingProduct?.productImage.tablet
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
                        : editingProduct?.productImage.mobile
                        ? editingProduct?.productImage.mobile
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
                        : editingProduct?.galleryImages.img1
                        ? editingProduct?.galleryImages.img1
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
                        : editingProduct?.galleryImages.img2
                        ? editingProduct?.galleryImages.img2
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
                        : editingProduct?.galleryImages.img3
                        ? editingProduct?.galleryImages.img3
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
                      : editingProduct?.cartImage
                      ? editingProduct?.cartImage
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
              editingProduct={editingProduct}
              setEditingProduct={setEditingProduct}
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 h-screen w-screen items-center justify-center bg-[#00000054] ${
          deleteOpen ? "flex" : "hidden"
        } `}
        onClick={() => setDeleteOpen(false)}
      >
        <div className="rounded-md bg-white p-10 ">
          <div>Are You sure you want to delete this product?</div>
          <div className="mx-auto mt-4 flex w-fit gap-10">
            <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
            <Button
              className="bg-red-600 hover:bg-red-500"
              onClick={(event) =>
                deleteProduct(
                  event,
                  deletingProduct,
                  setDeletingProduct,
                  setDeleteOpen,
                )
              }
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
