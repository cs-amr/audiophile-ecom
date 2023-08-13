import prisma from "../../db";
import { revalidatePath } from "next/cache";
export async function createCategory(data: FormData) {
  "use server";
  revalidatePath("dashboard/categories");
  const name = data?.get("name")?.toString();
  await prisma.category.create({ data: { name: name } });
}
