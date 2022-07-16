import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  callbacks: {
    async session({ session }) {
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    GoogleProvider({
      // wrap env values to work around clientId and clientSecret type bug
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
    }),
  ],
})
