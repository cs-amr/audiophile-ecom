"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const path = pathname.slice(-pathname.lastIndexOf("/") - 1);

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
  ];

  return (
    <nav
      className={
        "absolute -left-full top-0 mx-auto flex h-screen w-screen flex-col items-center space-x-4 bg-white py-8 text-center xs:static   xs:h-full xs:w-fit xs:flex-row xs:py-0 lg:space-x-6 "
      }
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`  my-4 w-full text-center   font-medium  text-primaryClr transition-colors hover:text-primary xs:my-0 xs:w-fit '${""}`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
