'use client';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

import { ChevronsRight } from 'lucide-react';

type QuizCardProps = {
	question: string;
	answers: string[];
	num: number;
};
const QuizCard: React.FC<QuizCardProps> = ({ question, answers, num }) => {
	return (
		<div className=' p-4 rounded border-white border-2 bg-[#353935] m-2 flex-1'>
			<Accordion type='single' collapsible className=' text-white '>
				<AccordionItem value={question}>
					<AccordionTrigger className='justify-start font-extrabold'>
						{num}. {question}
					</AccordionTrigger>
					<AccordionContent>
						{answers.map((answer, index) => (
							<div key={index} className='flex'>
								<ChevronsRight color='springgreen' />
								<span>{answer}</span>
							</div>
						))}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
};

export default QuizCard;
