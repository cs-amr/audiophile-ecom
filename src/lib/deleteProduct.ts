import { Prodcut } from "@/app/(cms)/dashboard/products/page";
export async function deleteProduct(
  event: any,
  deletingProduct: Prodcut | null,
  setDeletingProduct: React.Dispatch<React.SetStateAction<any>>,
  setDeleteOpen: React.Dispatch<React.SetStateAction<any>>,
) {
  event.stopPropagation();
  await fetch("/api/product/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deletingProduct),
  }).then(() => {
    setDeletingProduct(null);
    setDeleteOpen(false);
  });
}
