import Link from "next/link";
import React from "react";

type NavItem = {
  href: string;
  title: string;
};

const navItems: NavItem[] = [
  {
    href: "features",
    title: "Features",
  },
  {
    href: "pricing",
    title: "Pricing",
  },
  {
    href: "about",
    title: "About",
  },
];

const Navbar = () => {
  return (
    <nav className="relative">
      <ul className="flex w-full justify-center items-center gap-20">
        {navItems.map((item, i) => (
          <li className="text-slate-300 hover:text-white focus-within:text-white hover:translate-y-[2px] focus-within:translate-y-[2px] transition-all" key={i}>
            <Link href={`/${item.href}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
