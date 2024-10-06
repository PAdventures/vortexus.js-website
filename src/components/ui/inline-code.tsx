import React from 'react';

interface InlineCodeProps {
	children: string;
	inline?: boolean;
}

export function InlineCode({
	children,
	inline = true,
}: InlineCodeProps) {
	const lines = children.split('\n');

	const codeLines = lines.map((line, index) => (
		<span
			key={index}
			className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm group-[.alert-danger]:bg-destructive/20 group-[.alert-info]:bg-info/20 group-[.alert-note]:bg-gray-300 group-[.alert-question]:bg-question/20 group-[.alert-tip]:bg-tip/20 group-[.alert-warning]:bg-warning/20 dark:bg-muted dark:group-[.alert-danger]:bg-destructive/40 dark:group-[.alert-info]:bg-info/40 dark:group-[.alert-note]:bg-gray-700 dark:group-[.alert-question]:bg-question/40 dark:group-[.alert-tip]:bg-tip/40 dark:group-[.alert-warning]:bg-warning/40"
		>
			{line}
		</span>
	));

	if (inline) {
		return (
			<span className="inline-flex flex-wrap items-center gap-1">
				{codeLines}
			</span>
		);
	}

	return <div className="flex flex-col items-start gap-1">{codeLines}</div>;
}
