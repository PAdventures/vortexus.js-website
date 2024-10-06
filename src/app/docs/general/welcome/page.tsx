import Header1 from '@/components/pages/Header1';
import DocumentationPage from '@/components/pages/DocumentationPage';
import Image from 'next/image';
import Link from 'next/link';

export default function Welcome() {
	return (
		<DocumentationPage>
			<Header1>Welcome</Header1>
			<Image
				src="/banner.svg"
				width={832}
				height={0}
				alt="Vortexus.js Banner"
			/>
			<div className="flex h-fit w-full items-center justify-center">
				<Link href='https://github.com/github/docs/actions/workflows/codeql.yml'>
					<Image
						src='https://github.com/github/docs/actions/workflows/codeql.yml/badge.svg'
						width={180}
						height={0}
						alt="CodeQL"
					/>
				</Link>
				<Link href='https://www.codefactor.io/repository/github/padventures/vortexus.js'>
					<Image
						src='https://www.codefactor.io/repository/github/padventures/vortexus.js/badge'
						width={100}
						height={0}
						alt="Codefactor"
					/>
				</Link>
				<Link href={'https://discord.gg/Ek4PrXGWUq'}>
					<Image
						src='https://img.shields.io/discord/1247615562729652234?color=5865F2&logo=discord&logoColor=white'
						width={120}
						height={0}
						alt="Discord Server"
					/>
				</Link>
			</div>
		</DocumentationPage>
	);
}
