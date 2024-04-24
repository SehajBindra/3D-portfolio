"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = [
  { id: 1, name: "About", href: `/about`, className: "" },
  {
    id: 4,
    src: "/blogs.svg",
    name: "Projects",
    href: `/projects`,
    className: "",
  },
];
function Header() {
  const pathname = usePathname();
  NavLinks.forEach((link) => {
    link.className =
      link.href === pathname
        ? "  text-center text-black  dark:text-white    sm:px-3 sm:py-2 text-xl font-semibold "
        : " sm:px-3 text-center sm:py-2 text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 dark:text-white/60 text-black/60 duration-300 dark:hover:text-white hover:text-black";
  });
  return (
    <header className="header">
      <Link
        className="h-10 w-10 rounded-2xl shadow-lg bg-white font-semibold items-center justify-center flex"
        href="/"
      >
        <p className="blue-gradient_text">SB</p>
      </Link>
      <nav className="flex text-xl gap-7 font-medium">
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.href}>
            <p className={link.className}>{link.name}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
