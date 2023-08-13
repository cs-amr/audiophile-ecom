import React from "react";
import Link from "next/link";
import CardLink from "./CardLink";
import CategoryLinks from "./CategoryLinks";
import Products from "./Products";
import Person from "./Person";
export default function HomeProducts() {
  return (
    <section className="mt-40  bg-white">
      <div className="container">
        <CategoryLinks />
        <Products />
        <Person />
      </div>
    </section>
  );
}
