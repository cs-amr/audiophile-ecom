import { redirect } from "next/navigation";
import { MainNav } from "./MainNav";
import Link from "next/link";


const Navbar = async () => {




    return (
        <div className="border-b shadow">
            <div className="flex h-16 items-center px-4  max-w-[1334px] mx-auto xs:static relative ">
                <Link href={"/"} className="font-extrabold space-x-3 text-2xl">Audiophile</Link>


                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    {/* <UserButton afterSignOutUrl="/" /> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;