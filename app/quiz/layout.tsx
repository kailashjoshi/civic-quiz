import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Appbar from '@/components/Appbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Civic Quiz',
	description: 'USCIS Civic Quiz',
};

export default function QuizLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className={inter.className}>
			<Appbar />
			{children}
		</div>
	);
}
