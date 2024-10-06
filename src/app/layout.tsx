import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import './globals.css';
import { ThemeProvider } from '../components/ui/theme-provider';
import MenuBar from "@/components/navigation/MenuBar"
import { Announcement } from '../components/ui/announcement';

const inter = Inter({ weight: "variable", subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'Vortexus.js',
	description: 'Vortexus.js is a complex and flexible Discord.js bot framework made to be simple',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className='dark' suppressHydrationWarning>
			<body className={`${inter.className} font-light bg-background h-full overflow-y-auto`}>
				<ThemeProvider attribute='class' defaultTheme="dark">
                    <Announcement />
                    <MenuBar />
                    <div className="h-full">
                        {children}
                    </div>
                </ThemeProvider>
			</body>
		</html>
	);
}
