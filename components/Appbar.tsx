import React from 'react';
import SigninButton from '@/components/SigninButton';
import Link from 'next/link';
import Image from 'next/image';

const Appbar = () => {
	return (
		<header className='flex gap-4 p-4 bg-gradient-to-b from-black to-[#353935] shadow'>
			<Link href='/quiz' className=' inline-flex gap-2 align-middle'>
				<Image
					src='/logo.png'
					height='40'
					width='40'
					alt='Quiz Logo'
					className='border-2 border-white rounded-full'
				/>
				<h1 className='text-sm md:text-3xl font-bold text-yellow-50 cursor-pointer'>
					Civics Quiz
				</h1>
			</Link>
			<SigninButton />
		</header>
	);
};

export default Appbar;
