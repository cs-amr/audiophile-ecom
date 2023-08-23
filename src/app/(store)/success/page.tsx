"use client";
import Header from "@/components/Header";
import { stripe } from "@/lib/stripe";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  //   const searchParams = useSearchParams();
  //   const id = searchParams.get("session_id");
  //   console.log(id);
  async function getSession() {
    // const session = await stripe.checkout.sessions.retrieve(id);
    // console.log(session);
  }
  getSession();
  return (
    <>
      <Header />
      <main>
        <div className="container">
          page
          {/* <h1>{id}</h1> */}
        </div>
      </main>
    </>
  );
}
// curl https://api.stripe.com/v1/checkout/sessions/cs_test_a17fUjDdsFAJYGspFZFNdiIiu39QTkypZmoReGHgAwQnhZ2Egbj6LniA4b \
//   -u sk_test_51NgGVULW6hMWowfauJdrB34PqzXm3RRST6sMc0c6pO4JKkgSKy6tquDC2F7Fn1egzxr8BoEUotrk0YJ7PMXzgLWP00QjQMbxRd:
