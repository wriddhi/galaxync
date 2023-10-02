"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export function Sidebar({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <aside
      className={`transition-all p-3 outline bg-black outline-white/10 h-full`}
    >
      <h3 className={`${openSidebar ? "scale-100  delay-300" : "scale-0"} transition-all`}>Your Workspaces</h3>
    </aside>
  );
}

export function Header({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const session = useSession();

  return (
    <header className="bg-white/10 w-full px-4 py-2 flex justify-start gap-6 items-center">
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        title={openSidebar ? "Close Menu" : "Open Menu"}
      >
        <RxHamburgerMenu className="text-xl" />
      </button>
      <Link href="/dashboard" className="text-xl text-slate-300">
        Dashboard
      </Link>
      <Image
        onClick={() =>
          signOut({
            callbackUrl: "/sign-in",
            redirect: true,
          })
        }
        title="Sign Out"
        src={session.data?.user?.image ?? ""}
        className="rounded-full ml-auto cursor-pointer ring ring-prime"
        alt="Profile Picture"
        width={35}
        height={35}
      />
    </header>
  );
}
