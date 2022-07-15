import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      // wrap env values to work around clientId and clientSecret type bug
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.GOOGLE_SECRET}`,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
})
