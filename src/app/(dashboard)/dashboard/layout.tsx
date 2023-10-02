import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Poppins } from "next/font/google";
import Provider from "@/provider";

export const metadata: Metadata = {
  title: "Dashboard | Galaxync",
  description: "Unleash your creativity from anywhere, anytime.",
};

const poppins = Poppins<"--font-sans">({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  variable: "--font-sans",
});

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/sign-in");
  }

  return (
    <html lang="en">
      <body
        className={`min-h-screen h-full w-full scrollbar scrollbar-track-white/5 scrollbar-thumb-prime font-sans bg-black text-white ${poppins.variable}`}
      >
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
