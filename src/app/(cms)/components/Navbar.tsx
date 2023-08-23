import { getServerSession } from "next-auth";
import Logout from "./Logout";
import { MainNav } from "./MainNav";
import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="border-b shadow">
      <div className="relative mx-auto flex h-16  max-w-[1334px] items-center px-4 xs:static ">
        <Link href={"/"} className="space-x-3 text-2xl font-extrabold">
          audiophile
        </Link>

        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
