import React from "react";
import LogoWithName from "../logos/logo-with-name";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const routes = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blogs",
      href: "/blog",
    },
  ];

  return (
    <nav className="w-full border-b border-zinc-200 bg-[#FAF8F5]">
      <div className="common-frame-box py-2 flex items-center justify-between">
        <Link href="/">
          <LogoWithName />
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              className="text-zinc-900 hover:text-primary-600 transition-colors duration-300 font-medium"
              href={route.href}
            >
              {route.label}
            </Link>
          ))}
        </div>

        <div className="">
          <button className="bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
