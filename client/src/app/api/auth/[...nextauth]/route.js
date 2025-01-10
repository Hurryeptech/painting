
import NextAuth  from "next-auth";
import GoogleProvider from "next-auth/providers/google";

 const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      if (profile?.email_verified) {
        return true;
      } else {
        console.error("Email not verified");
        return false;
      }
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.accessToken = account.access_token;
        token.id = profile.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
