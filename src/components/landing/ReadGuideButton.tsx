'use client';

import { Button } from '@/components/ui/button.tsx';
import { useRouter } from 'next/navigation';

export default function ReadGuideButton() {
    const router = useRouter();

    const redirect = () => router.push("/docs/guide/Getting-Started")

	return (
		<Button
            onClick={redirect}
			variant={'secondary'}
			className="w-4/5 rounded-lg border border-muted/50 bg-foreground px-8 py-6 text-xl text-background hover:bg-foreground/80"
		>
			Read the Guide
		</Button>
	);
}
