import SignIn from "@/components/SignIn";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In | Galaxync",
  description:
    "Online Collaboration Workspace for Youtube creators and their teams",
};

export default async function page() {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <main className="h-full flex-1 grid place-items-center">
      <SignIn />
    </main>
  );
}
