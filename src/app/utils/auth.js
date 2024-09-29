import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token }) => {
      try {
        const db_user = await prisma.user.findFirst({
          where: {
            email: token.email,
          },
        });
        if (db_user) {
          token.id = db_user.id;
          token.name = db_user.name; // Ensure these fields exist
          token.picture = db_user.image; // Ensure this field exists
        }
      } catch (error) {
        console.error("Error fetching user in JWT callback:", error);
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
