"use client"

import * as React from "react";
import { Highlight, Language, themes } from "prism-react-renderer";
import "prismjs/themes/prism-okaidia.min.css"
import { Button } from "./button.tsx";
import { CheckIcon, ClipboardIcon } from "lucide-react";

interface CodeBlockProps {
    code: string,
    language: 'javascript' | 'typescript' | 'bash' | 'json',
    title?: string;
    no_copy?: boolean
};

export function CodeBlock({ code, language, title, no_copy }: CodeBlockProps) {
    const [isCopied, setIsCopied] = React.useState(false)

    const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy text: ', err);
		}
	};

    return (
		<div className="group relative mb-4">
			<Highlight
				theme={themes.nightOwl}
				code={code.trim()}
				language={language as Language}
                >
				{({ className, style, tokens }) => {
                    return (
                        <div>
							<pre
								className={`${className} p-4 rounded-lg overflow-x-auto`}
								style={style}
                                >
                                {title && <div className="mb-2 h-fit w-full border-b border-muted-foreground/25 pb-2 text-sm text-muted-foreground">{title}</div>}
								{tokens.map((line, i) => {
									return (
										<div key={i} className={`table-row`}>
											<span className="table-cell select-none pr-4 text-right opacity-50">
												{i + 1}
											</span>
											<span className="table-cell">
												{line.map((token, key) => (
													<code
														key={key}
														className={`token ${token.types.join(
															' ',
														)}`}
													>
														{token.content}
													</code>
												))}
											</span>
										</div>
									);
								})}
							</pre>
						</div>
					);
				}}
			</Highlight>
			{no_copy !== true && <Button
				onClick={copyToClipboard}
				className={`absolute ${title ? "right-4 top-12" : "right-2 top-2"} rounded bg-gray-100 p-2 text-foreground opacity-0 transition-opacity duration-200 hover:bg-gray-200 focus:opacity-100 focus:outline-none group-hover:opacity-100 dark:bg-gray-700 dark:hover:bg-gray-600`}
				aria-label={isCopied ? 'Copied!' : 'Copy code to clipboard'}
			>
				{isCopied ? (
					<CheckIcon className="h-5 w-5" />
				) : (
					<ClipboardIcon className="h-5 w-5" />
				)}
			</Button>}
		</div>
	);
}