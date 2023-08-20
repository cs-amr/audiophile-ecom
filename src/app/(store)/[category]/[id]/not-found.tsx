import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <>
      <main className="container grid h-screen content-center  items-center justify-center">
        <div className="w-fit  text-center text-3xl font-bold">
          <h1>404</h1>
          <div className="uppercase ">Page Not Found </div>
          <Link href={"/"} className="text-lg underline ">
            GO HOME{" "}
          </Link>
        </div>
      </main>
    </>
  );
}
