'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const SignIn = () => {
	return (
		<Button
			onClick={() => signIn()}
			className='bg-gradient-to-r from-black to-gray-900 text-white font-bold gap-2'
			size='lg'
		>
			<div className='space-x-3'>
				<Image
					className='w-6 h-6 '
					src='/googlelogo.svg'
					loading='lazy'
					alt='google logo'
					width={10}
					height={10}
				/>
			</div>
			{/* <span className='text-base invisible sm:visible'>Login</span> */}
			<span>Login with Google</span>
		</Button>
	);
};

export default SignIn;
