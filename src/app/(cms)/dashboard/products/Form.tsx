import { FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { addNewProduct } from '@/lib/addNewProduct'
import React from 'react'

export default function Form() {
    return (


        <form action={addNewProduct} className='  '>
            <div className='flex mt-8 gap-10'>

                <Label htmlFor='name' >Name
                    <Input type="text" name="name" id="name" required placeholder="YX1 Wireless Earphones" className='my-2' />
                </Label>

                <Label htmlFor='shortname' >Short Name
                    <Input type="text" name="shortname" id="shortname" required placeholder="YX1" className='my-2' />
                </Label>

                <Label htmlFor='price' >Price
                    <Input type="text" name="price" id="price" required placeholder="100" className='my-2' />
                </Label>



            </div>
            <div className='flex mt-8 gap-8'>
                <Label htmlFor="new">New
                    <br />
                    <select name="new" id="new" className=" p-1 my-1 border focus:border focus:outline-none">
                        <option value="yes">Yes</option>
                        <option value="No">no</option>
                    </select>
                </Label>
                <Label htmlFor="category">Category
                    <br />
                    <select name="categort" id="category" className=" p-1 my-1 border focus:border focus:outline-none">
                        <option value="headphones">headphones</option>
                        <option value="speakers">speakers</option>
                        <option value="earphones">headphones</option>
                    </select>
                </Label>
            </div>

            <div>
                <Label htmlFor="productimage" className='mt-8 -mb-6'>Product Images
                    <br />
                    <div className='flex mt-8'>
                        <Label htmlFor="desktop" className='m-2'>
                            Desktop <br />
                            <Input type="file" className='mt-2' name='productImgDesktop' />
                        </Label>

                        <Label htmlFor="tablet" className='m-2'>
                            Tablet <br />
                            <Input type="file" className='mt-2' name='productImgTablet' />
                        </Label>

                        <Label htmlFor="mobile" className='m-2'>
                            Mobile <br />
                            <Input type="file" className='mt-2' name='productImgMobile' />
                        </Label>
                    </div>

                </Label>
            </div>

            <div className='flex flex-col mt-8 gap-10'>

                <Label htmlFor='description' >Description <br />
                    <textarea name="description" id="description" rows={4} cols={60} required placeholder="write your description " className='my-2 focus:outline-none border border-slate-400 p-2 ' />
                </Label>

                <Label htmlFor='features' >Features <br />
                    <textarea name="features" id="features" rows={4} cols={60} required placeholder="write your product features" className='my-2 focus:outline-none border border-slate-400 p-2 ' />
                </Label>





            </div>

            <button type="submit" className="bg-black  text-white p-1 rounded-sm px-3">add</button>
        </form >
    )
}
