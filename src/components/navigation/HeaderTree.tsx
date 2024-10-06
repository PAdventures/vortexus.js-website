'use client';

import { RefObject, useEffect, useState } from 'react';
import { Link } from '../ui/link.tsx';
import { usePathname } from 'next/navigation';

interface HeadingNode {
	tag: string;
	text: string;
	id: string;
	children: HeadingNode[];
}

export default function HeaderTree({
	containerRef,
}: {
	containerRef: RefObject<HTMLDivElement>;
}) {
    const pathname = usePathname()
	const [headings, setHeadings] = useState<HeadingNode[]>([]);

	useEffect(() => {
		if (containerRef.current) {
			const headingElements =
				containerRef.current.querySelectorAll('h2, h3, h4');
			const hierarchy: HeadingNode[] = [];
			const stack: HeadingNode[] = [];

			headingElements.forEach((el) => {
				const headingLevel = parseInt(el.tagName[1]);
				const newNode: HeadingNode = {
					tag: el.tagName.toLowerCase(),
					text: (el.textContent || '').substring(
						0,
						(el.textContent || '').length - 1,
					),
					id: el.id,
					children: [],
				};

				while (
					stack.length > 0 &&
					parseInt(stack[stack.length - 1].tag[1]) >= headingLevel
				) {
					stack.pop();
				}

				if (stack.length === 0) {
					hierarchy.push(newNode);
				} else {
					stack[stack.length - 1].children.push(newNode);
				}

				stack.push(newNode);
			});
			setHeadings(hierarchy);
		}
	}, [containerRef, pathname]);

    if (headings.length > 0) {
        return (
            <div className="sticky top-0 flex h-full w-full items-start justify-center">
                <div className="mt-6 w-[98%] border-l border-muted-foreground/50">
                    {RenderHeadingHierarchy(headings)}
                </div>
            </div>
        );
    }
}

const RenderHeadingHierarchy = (nodes: HeadingNode[]) => (
	<ul className="m-0 my-3 list-none space-y-3 p-0">
		{nodes.map((node, index) => (
			<li key={index}>
				<div className={`flex items-center ${GetIndentClass(node.tag)}`}>
					<Link
						textSize="xs"
						hoverActive
						defaultTextColour
						replace
						noExternal
						href={`#${node.id}`}
						text={node.text}
					/>
				</div>
				{node.children.length > 0 &&
					RenderHeadingHierarchy(node.children)}
			</li>
		))}
	</ul>
);

const GetIndentClass = (tag: string) => {
	switch (tag) {
		case 'h2':
			return 'ml-2';
		case 'h3':
			return 'ml-6';
		case 'h4':
			return 'ml-10';
		default:
			return 'ml-0';
	}
};
