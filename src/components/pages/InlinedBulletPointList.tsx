import React from 'react';

interface ListItemProps {
	children: React.ReactNode;
	className?: string;
}

export default function InlinedBulletPointList({
	children,
	listItem,
}: {
	children: React.ReactNode;
	listItem: React.ReactNode;
}) {
	const addBulletPoints = (children: React.ReactNode): React.ReactNode => {
		return React.Children.map(children, (child) => {
			if (
				React.isValidElement<ListItemProps>(child) &&
				child.type === 'li'
			) {
				return React.cloneElement(
					child,
					{
						className: `flex items-baseline -ml-6 ${
							child.props.className || ''
						}`,
					},
					<>
						<span className="mr-2 flex-shrink-0 text-gray-400">
							○
						</span>
						<div>{child.props.children}</div>
					</>,
				);
			}
			return child;
		});
	};

	return (
		<li>
			{listItem}
			<ul className="ml-12 list-none leading-loose">
				{addBulletPoints(children)}
			</ul>
		</li>
	);
}
