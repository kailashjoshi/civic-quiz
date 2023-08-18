import NextAuth from 'next-auth/next';
import { SessionStrategy } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt' as SessionStrategy, // Assign 'jwt' as SessionStrategy
	},
};

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt' as SessionStrategy, // Assign 'jwt' as SessionStrategy
	},
	theme: {
		colorScheme: 'dark',
        
	},
});

export { handler as GET, handler as POST };
