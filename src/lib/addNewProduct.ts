
import prisma from "../../db"
export async function addNewProduct(data: FormData) {
    "use server"
    console.log(data)
    // await prisma.product.create({
    //     data: {

    //         // name: data.get("name")?.toString(),
    //         // shortName: data.get("shortname")?.toString(),
    //         // shortName:data.get("shortname")?.toString(),
    //     }
    // })
}