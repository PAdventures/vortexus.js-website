import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);

	const options: Intl.DateTimeFormatOptions = {
		month: 'long', // Full month name
		day: 'numeric', // Day of the month
		year: 'numeric', // Full year
	};

	const formattedDate = date.toLocaleDateString('en-US', options);

	const minutes = String(date.getHours()).padStart(2, '0'); // HH
	const seconds = String(date.getMinutes()).padStart(2, '0'); // MM
	const milliseconds = String(date.getSeconds()).padStart(2, '0'); // SS

	return `${formattedDate} @${minutes}:${seconds}:${milliseconds}`;
}
