import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeProducts from "@/components/HomeProducts";
import Landing from "@/components/Landing";
import Person from "@/components/Person";
// import prisma from "../../db"
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Landing />
        <HomeProducts />
        <Footer />
      </main>
    </div>
  );
}
