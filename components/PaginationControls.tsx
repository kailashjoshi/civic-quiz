'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface PaginationControlsProps {
	hasNextPage: boolean;
	hasPrevPage: boolean;
	size: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
	hasNextPage,
	hasPrevPage,
	size,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const page = searchParams.get('page') ?? '1';
	const per_page = searchParams.get('per_page') ?? '3';

	return (
		<div className='flex gap-2 space-x-4 justify-center my-7 text-white'>
			<Button
				variant='outline'
				size='icon'
				className='bg-[#353935] text-white'
				disabled={!hasPrevPage}
				onClick={() => {
					router.push(`/quiz?page=${Number(page) - 1}&per_page=${per_page}`);
				}}
			>
				<ChevronLeftIcon className='h-4 w-4' />
			</Button>

			<div>
				{page} / {Math.ceil(size / Number(per_page))}
			</div>

			<Button
				variant='outline'
				size='icon'
				className='bg-[#353935] text-white'
				onClick={() => {
					router.push(`/quiz?page=${Number(page) + 1}&per_page=${per_page}`);
				}}
				disabled={!hasNextPage}
			>
				<ChevronRightIcon className='h-4 w-4' />
			</Button>
		</div>
	);
};

export default PaginationControls;
