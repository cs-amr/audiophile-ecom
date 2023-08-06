import { Heading } from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import React from 'react'
import Form from './Form'
import prisma from '../../../../../db'

export default async function page() {
    const categories = await prisma.category.findMany()
    console.log(categories)

    return (
        <main className="max-w-[1334px] mx-auto">

            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <Heading title="Categories (3)" description="Manage categories for your store" />
                    <Separator />
                    <Table>
                        <TableCaption>A list of your categories.</TableCaption>


                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">name</TableHead>
                                <TableHead>products</TableHead>
                                <TableHead>date</TableHead>
                                <TableHead className="text-right">sales</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories?.map((category) => {
                                return (
                                    <TableRow key={category.id}>
                                        <TableCell className="font-medium">{category?.name}</TableCell>
                                        <TableCell>3</TableCell>
                                        <TableCell>{(category?.createdAt).toString().slice(0, 10).replace(" ", "-").replace(" ", "-")}</TableCell>
                                        <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                )
                            })}




                        </TableBody>
                    </Table>
                    <Heading title="Create New Category" description='' />
                    <Form />

                </div>
            </div>


        </main>
    )
}
