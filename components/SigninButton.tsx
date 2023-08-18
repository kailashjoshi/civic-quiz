'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { Search } from '@/components/Search';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const SigninButton = () => {
	const { data: session, status } = useSession();
	if (status === 'loading') {
		return (
			<div className='flex ml-auto space-x-4'>
				<div className='space-y-2'>
					<Skeleton className='h-10  md:w-[100px] lg:w-[300px]' />
					{/* <Skeleton className='h-4 w-[200px]' /> */}
				</div>
				<Skeleton className='h-8 w-8 rounded-full' />
			</div>
		);
	}

	if (session && session.user) {
		return (
			<div className='flex gap-4 ml-auto'>
				<Search />

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='ghost' className='relative h-8 w-8 rounded-full'>
							<Avatar className='h-8 w-8  '>
								<AvatarImage
									src={session.user?.image || undefined}
									alt='@shadcn'
								/>
							</Avatar>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-56' align='end' forceMount>
						<DropdownMenuLabel className='font-normal'>
							<div className='flex flex-col space-y-1'>
								<p className='text-sm font-medium leading-none'>
									{session.user?.name}
								</p>
								<p className='text-xs leading-none text-muted-foreground'>
									{session.user?.email}
								</p>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem onClick={() => console.log('clicked')}>
								Profile
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => console.log('clicked')}>
								Settings
								<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
						>
							Log out
							<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		);
	}
	return (
		<Button onClick={() => signIn()} className='text-green-400 ml-auto'>
			Sign In
		</Button>
	);
};

export default SigninButton;
