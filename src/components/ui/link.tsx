import { ExternalLinkIcon } from 'lucide-react';
import NextLink from 'next/link';

export interface LinkProps {
	href: string;
	text: string;
    textSize?: "xs" | "sm" | "base" | "lg" | "xl";
	underline?: boolean;
	replace?: boolean;
	noExternal?: boolean;
    defaultTextColour?: boolean;
    hoverActive?: boolean;
}

export function Link({ href, text, underline, replace, noExternal, defaultTextColour, hoverActive, textSize }: LinkProps) {
	const isExternal = href.startsWith('http') && !noExternal;

	return (
		<NextLink
			target={isExternal && !replace ? '_blank' : '_self'}
			href={href}
			className={`group/link inline-flex items-center px-1 ${defaultTextColour ? "" : "text-primary-active"} ${hoverActive ? "hover:text-primary-active" : ""}`}
		>
			<span className={`${underline ? 'group-hover/link:underline' : ''} ${textSize ? `text-${textSize}` : ""}`}>
				{text}
			</span>
			{isExternal && (
				<ExternalLinkIcon className={`ml-1 h-4 w-4 -translate-y-1 ${defaultTextColour ? "" : "stroke-primary-active"}  ${hoverActive ? "hover:stroke-primary-active" : ""} group-hover/link:animate-bounce`} />
			)}
		</NextLink>
	);
};
