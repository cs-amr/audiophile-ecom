import Header from "@/components/Header";
import Link from "next/link";
export default function page() {
  return (
    <>
      <Header />
      <main>
        <div className="container flex items-center justify-center py-40">
          <div className="text-center font-bold">
            <h2 className="mb-4 text-3xl">THANK YOU</h2>
            <p className="font-semibol">
              YOUR ORDER WAS COMPLETED SUCCESSFULLY
            </p>
            <Link className="underline font-base" href={"/"}>CONTINUE SHOPPING</Link>
          </div>
        </div>
      </main>
    </>
  );
}
