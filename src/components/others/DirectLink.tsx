import NextLink from 'next/link';

export interface LinkProps {
	href: string;
}

export function DirectLink({ href }: LinkProps) {
	return (
		<NextLink
			target="_self"
			href={href}
			className="inline-flex items-center px-1"
		>
			<span className="ml-1 text-primary-active/0 transition-colors hover:underline group-hover:text-primary-active">
				#
			</span>
		</NextLink>
	);
};
