"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Stripe from "stripe";
export default function page() {
  const searchParams = useSearchParams();

  const id = searchParams.get("session_id");
  useEffect(() => {
    const res = fetch("/api/checkout/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    });
  }, [id]);
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
            <Link className="font-base underline" href={"/"}>
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
