import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignIn from '@/components/SignIn';
import Image from 'next/image';

export default async function Home() {
	const session = await getServerSession(authOptions);

	if (session) redirect('/quiz');

	return (
		<main className='flex relative min-h-screen  bg-gradient-to-r from-slate-900 to-slate-700 items-center justify-center'>
			<h1 className='absolute top-10 mt-4 text-yellow-100 md:text-4xl font-bold'>
				Welcome to Civic Quiz Page
			</h1>
			<Image src='/home.png' height={200} width={200} alt='home' priority />
			<div>
				<SignIn />
			</div>
		</main>
	);
}
