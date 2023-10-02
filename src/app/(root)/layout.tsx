import "../globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getServerSession } from "next-auth";
import Header from "@/components/Header";
import Provider from "@/provider";

const poppins = Poppins<"--font-sans">({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Galaxync",
  description:
    "Online Collaboration Workspace for Youtube creators and their teams",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body
        className={`min-h-screen h-full w-full flex flex-col scrollbar scrollbar-track-white/5 scrollbar-thumb-prime font-sans bg-black text-white ${poppins.variable}`}
      >
        <Provider session={session}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
