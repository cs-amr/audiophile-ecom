import Header from "@/components/Header";
import React from "react";
import Form from "./Form";
export default function Login() {
  return (
    <div>
      <Header />
      <main className="container  h-screen w-full  text-center">
        <Form />
      </main>
    </div>
  );
}
