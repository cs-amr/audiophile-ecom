import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewProduct } from "@/lib/addNewProduct";
import prisma from "../../../../../db";
import { Dispatch, FormEvent } from "react";
type FormProps = {
  ProductImage: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  setProductImage: React.Dispatch<React.SetStateAction<any>>;
};
export default function Form({ ProductImage, setProductImage }: FormProps) {
  return (
    <form onSubmit={addNewProduct}>
      <div className="mt-8 flex gap-10">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            id="name"
            required
            placeholder="YX1 Wireless Earphones"
            className="my-2"
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
            className="my-2"
          />
        </Label>

        <Label htmlFor="price">
          Price
          <Input
            type="text"
            name="price"
            id="price"
            required
            placeholder="100"
            className="my-2"
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
          >
            <option value="yes">Yes</option>
            <option value="No">no</option>
          </select>
        </Label>
        <Label htmlFor="category">
          Category
          <br />
          <select
            name="category"
            id="category"
            className=" my-1 border p-1 focus:border focus:outline-none"
          >
            <option value="headphones">headphones</option>
            <option value="speakers">speakers</option>
            <option value="earphones">headphones</option>
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
            cols={60}
            required
            placeholder="write your description "
            className="my-2 border border-slate-400 p-2 focus:outline-none "
          />
        </Label>

        <Label htmlFor="features">
          Features <br />
          <textarea
            name="features"
            id="features"
            rows={4}
            cols={60}
            required
            placeholder="write your product features"
            className="my-2 border border-slate-400 p-2 focus:outline-none "
          />
        </Label>
      </div>
      <input type="text" name="image" hidden value={ProductImage} />
      <button
        type="submit"
        className="rounded-sm  bg-black p-1 px-3 text-white"
      >
        add
      </button>
    </form>
  );
}
