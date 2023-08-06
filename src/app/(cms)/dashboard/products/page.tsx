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
import Form from './Form';

const ProductsPage = async ({
}: {
    }) => {


    return (
        <main className="max-w-[1334px] mx-auto">

            <div className="flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <Heading title="Products (3)" description="Manage products of your store" />
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
                    <Heading title="Add New Product" description='' />
                    <Form />
                </div>
            </div>


        </main>
    );
};

export default ProductsPage;