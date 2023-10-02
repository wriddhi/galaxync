"use client";

import React from "react";
import { Header, Sidebar } from "@/components/dashboard";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

import { MdJoinRight } from "react-icons/md";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (!(status == "loading") && (!session || !session.user)) {
    redirect("/sign-in");
  }

  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);

  const [video, setVideo] = React.useState<File>();

  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <Header openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div
        className={`flex-1 h-full bg-white grid transition-all duration-300 ${
          openSidebar ? "grid-cols-[15%_auto]" : "grid-cols-[3.5%_auto] "
        }`}
      >
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <main className="h-full bg-black/95 text-white flex flex-col p-16 gap-16">
          <section className="w-full flex justify-start items-center">
            <Link
              className="bg-prime p-4 flex justify-center gap-4 items-center text-lg text-center text-black transition-all"
              href="dashboard/workspace/?mode=create"
            >
              Create a workspace
              <MdJoinRight className="inline-block ml-2" />
            </Link>
            <Link
              className="bg-white p-4 text-black font-bold"
              href="/api/permissions"
            >
              Join as a Creator
            </Link>
          </section>
          <input
            className="bg-white p-4 text-black font-bold"
            onChange={(e) => {setVideo(e.target.files?.[0])}}
            type="file"
            name="video"
            id="video"
            accept="video/*"
            multiple={false}
          />
          {
            video && (
              <video
                className="w-full"
                src={URL.createObjectURL(video)}
                controls
              />
            )
          }
        </main>
      </div>
    </div>
  );
}
