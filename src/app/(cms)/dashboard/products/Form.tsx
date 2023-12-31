import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewProduct } from "@/lib/addNewProduct";
import { useLayoutEffect, useState } from "react";
import { Prodcut } from "./page";
import editProduct from "@/lib/editProduct";
type Category = {
  id: string;
  name: string;
};
type FormProps = {
  ProductImage: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  setProductImage: React.Dispatch<React.SetStateAction<any>>;
  GalleryImages: {
    img1: string;
    img2: string;
    img3: string;
  };
  setGalleryImages: React.Dispatch<React.SetStateAction<any>>;
  CartImg: string;
  setCartImg: React.Dispatch<React.SetStateAction<any>>;
  editingProduct: Prodcut | null;
  setEditingProduct: React.Dispatch<React.SetStateAction<any>>;
};
export default function Form({
  ProductImage,
  setProductImage,
  GalleryImages,
  setGalleryImages,
  CartImg,
  setCartImg,
  editingProduct,
  setEditingProduct,
}: FormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [Categories, setCategories] = useState<Category[]>([]);
  useLayoutEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <form
      onSubmit={
        editingProduct
          ? (event) => editProduct(event, editingProduct, setIsLoading)
          : (event) =>
              addNewProduct(
                event,
                setCartImg,
                setGalleryImages,
                setProductImage,
                isLoading,
                setIsLoading,
              )
      }
      className="max-w-full "
    >
      <div className="mt-8 flex flex-wrap gap-10">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            id="name"
            required
            placeholder="YX1 Wireless Earphones"
            className="my-2 w-[144px]"
            defaultValue={editingProduct ? editingProduct.name : ""}
          />
        </Label>

        <Label htmlFor="shortname">
          Short Name
          <Input
            type="text"
            name="shortname"
            id="shortname"
            required
            placeholder="YX1"
            defaultValue={editingProduct ? editingProduct.shortName : ""}
            className="my-2 w-[144px]"
          />
        </Label>

        <Label htmlFor="price">
          Price
          <Input
            type="number"
            name="price"
            id="price"
            required
            placeholder="100"
            className="my-2 w-[144px]"
            defaultValue={editingProduct ? editingProduct.price : ""}
          />
        </Label>
      </div>
      <div className="mt-8 flex gap-8">
        <Label htmlFor="new">
          New
          <br />
          <select
            name="isnew"
            id="new"
            className=" my-1 border p-1 focus:border focus:outline-none"
            defaultValue={
              editingProduct ? (editingProduct.isNew ? "yes" : "no") : "yes"
            }
          >
            <option value="yes">Yes</option>
            <option value="no">no</option>
          </select>
        </Label>
        <Label htmlFor="category">
          Category
          <br />
          <select
            name="category"
            id="category"
            className=" my-1 border p-1 focus:border focus:outline-none"
            defaultValue={
              editingProduct ? editingProduct.category : "headphones"
            }
          >
            {Categories &&
              Categories?.map((category: { id: string; name: string }) => {
                return (
                  <option
                    value={category.name}
                    id={category.id}
                    key={category.id}
                  >
                    {category?.name}
                  </option>
                );
              })}
          </select>
        </Label>
      </div>

      <div className="mt-8 flex flex-col gap-10">
        <Label htmlFor="description">
          Description <br />
          <textarea
            name="description"
            id="description"
            rows={4}
            required
            defaultValue={editingProduct ? editingProduct.description : ""}
            placeholder="write your description "
            className="my-2 min-w-full max-w-full border border-slate-400 p-2 focus:outline-none "
          />
        </Label>

        <Label htmlFor="features">
          Features <br />
          <textarea
            name="features"
            defaultValue={editingProduct ? editingProduct.features : ""}
            id="features"
            rows={4}
            required
            placeholder="write your product features"
            className="my-2 min-w-full max-w-full border border-slate-400 p-2 focus:outline-none "
          />
        </Label>
      </div>
      <input
        type="text"
        name="productImage"
        hidden
        readOnly
        value={JSON.stringify(ProductImage)}
      />
      <input
        type="text"
        name="galleryImages"
        hidden
        readOnly
        value={JSON.stringify(GalleryImages)}
      />
      <input type="text" name="cartImage" hidden value={CartImg} />
      <Label htmlFor="inthebox">
        In the box
        <div className="flex items-center gap-4">
          <Input
            type="text"
            name="item1"
            id="item1"
            required
            placeholder="charger"
            className="my-2 w-[144px] flex-[3]"
            defaultValue={
              editingProduct ? editingProduct.includedItems[0].item : ""
            }
          />
          <Input
            type="number"
            name="quantity1"
            id=""
            className="flex-[2]"
            placeholder="1"
            defaultValue={
              editingProduct ? editingProduct.includedItems[0].quantity : ""
            }
          />
        </div>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            name="item2"
            id="item2"
            required
            placeholder="charger"
            className="my-2 w-[144px] flex-[3]"
            defaultValue={
              editingProduct ? editingProduct.includedItems[1].item : ""
            }
          />
          <Input
            type="number"
            name="quantity2"
            id=""
            className="flex-[2]"
            placeholder="1"
            defaultValue={
              editingProduct ? editingProduct.includedItems[1].quantity : ""
            }
          />
        </div>
        <div className="flex items-center gap-4">
          <Input
            type="text"
            name="item3"
            id="item3"
            required
            placeholder="charger"
            className="my-2 w-[144px] flex-[3]"
            defaultValue={
              editingProduct ? editingProduct.includedItems[2].item : ""
            }
          />
          <Input
            type="number"
            name="quantity3"
            id=""
            className="flex-[2]"
            placeholder="1"
            defaultValue={
              editingProduct ? editingProduct.includedItems[2].quantity : ""
            }
          />
        </div>
      </Label>
      {editingProduct ? (
        <div>
          <button
            disabled={isLoading}
            type="submit"
            className=" mr-4 mt-2 rounded-sm  bg-black p-1 px-3 text-white"
          >
            Edit
            {isLoading ? "...editing" : "Edit"}
          </button>
          <button
            className=" mr-4 mt-2 rounded-sm  bg-black p-1 px-3 text-white"
            onClick={() => {
              setEditingProduct(null);
              setCartImg("");
              setProductImage({
                desktop: "",
                tablet: "",
                mobile: "",
              });
              setGalleryImages({
                img1: "",
                img2: "",
                img3: "",
              });
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          disabled={isLoading}
          type="submit"
          className=" mr-4 mt-2 rounded-sm  bg-black p-1 px-3 text-white"
        >
          {isLoading ? "...adding" : "add"}
        </button>
      )}
    </form>
  );
}
