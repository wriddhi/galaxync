"use client";

import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";


const Header = () => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <header className="sticky top-0 px-24 py-4 flex justify-between items-center bg-white/5 shadow-sm shadow-white/30 backdrop-blur">
      <Link className="font-bold text-3xl" href="/">
        galaxync.
      </Link>
      <Navbar />
      {pathname != "/sign-in" && (
        <Link
          className="px-4 py-1 font-medium raised rounded-sm transition-all bg-prime text-black"
          href={session.data?.user ? "/dashboard" : "/sign-in"}
        >
          {session.data?.user ? "Go to Dashboard" : "Sign In"}
        </Link>
      )}
    </header>
  );
};

export default Header;
