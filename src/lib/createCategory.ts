import prisma from "../../db";
import { revalidatePath } from "next/cache";
export async function createCategory(data: FormData | any) {
  "use server";
  revalidatePath("dashboard/categories");
  const name: string = data?.get("name")?.toString();
  await prisma.category.create({ data: { name: name } });
}
