'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button.tsx';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

    function handleClick() {
        if (theme === "light") {
            setTheme("dark")
            return
        }
        setTheme("light")
    }

	return (
        <Button className="rounded-full bg-muted/50 hover:bg-muted hover:text-primary-active" variant="outline" size="icon" onClick={() => handleClick()}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
        </Button>
	);
}
