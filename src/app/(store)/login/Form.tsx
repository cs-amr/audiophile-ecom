"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function Form() {
  async function login(e: any) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  }
  return (
    <div>
      <h1 className="mb-10 mt-10 text-3xl font-bold">Log In</h1>
      <div className="mx-auto w-full max-w-screen-sm  ">
        <form
          onSubmit={login}
          action=""
          className="flex flex-col p-4 text-left"
        >
          <label htmlFor="" className="mb-2 font-bold">
            Email
          </label>
          <input
            type="text"
            className="mb-2 border-2 p-2 outline-none focus:border-secClr"
            defaultValue={"audiophileowner@gmail.com"}
            name="email"
          />
          <br />
          <label htmlFor="" className="mb-2 font-bold ">
            Password
          </label>
          <input
            type="password"
            className="mb-2 border-2 p-2 outline-none focus:border-secClr "
            defaultValue={"password123"}
            name="password"
          />
          <br />
          <button className="btn bg-secClr text-white hover:opacity-80">
            Log in
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
