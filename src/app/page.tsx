import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeProducts from "@/components/HomeProducts";
import Landing from "@/components/Landing";
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
