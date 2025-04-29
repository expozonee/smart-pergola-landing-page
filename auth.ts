import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Admin, getAdminFromDb } from "./utils/getAdmin";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },

      authorize: async (credentials) => {
        let user: Admin | null = null;

        user = await getAdminFromDb(
          credentials.username as string,
          credentials.password as string
        );

        console.log(user);

        if (!user) {
          throw new Error("Invalid credentials.");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          ...user,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = session.user || {};
      session.user.username = token.username as string;
      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      if (url.split("/").includes("admin")) return "/";

      return baseUrl + "/admin/names-list";
    },
  },
});
