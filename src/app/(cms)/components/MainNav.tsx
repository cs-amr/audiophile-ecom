"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  console.log(pathname);
  const routes = [
    {
      href: `/dashboard`,
      label: "Overview",
    },
    {
      href: `/dashboard/categories`,
      label: "Categories",
    },
    {
      href: `/dashboard/products`,
      label: "Products",
    },
    {
      href: `/dashboard/orders`,
      label: "Orders",
    },
    {
      href: `/dashboard/settings`,
      label: "Settings",
    },
  ];

  return (
    <nav
      className={
        "xs:py-0 py-8 flex items-center text-center space-x-4 lg:space-x-6 mx-auto xs:static absolute -left-full top-0 xs:w-fit w-screen   h-screen xs:h-full bg-white flex-col xs:flex-row "
      }
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`  xs:my-0 my-4 w-full xs:w-fit  text-center  text-sm font-medium transition-colors hover:text-primary text-black'${
            route.href === pathname && "text-5xl"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
