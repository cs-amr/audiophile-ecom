"use client";
import { signOut } from "next-auth/react";
export default function Logout() {
  return (
    <button className="text-red-600" onClick={() => signOut()}>
      log out{" "}
    </button>
  );
}
