import NextAuth from "next-auth/next"
import Google from "next-auth/providers/google";
import type { NextAuthOptions as NextAuthConfig } from "next-auth";

const config: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: "/sign-in/",
  },
};

const handler = NextAuth(config)

export { handler as GET, handler as POST }