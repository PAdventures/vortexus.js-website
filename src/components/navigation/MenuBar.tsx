"use client"

import { ListItem, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu.tsx";
import Image from "next/image";
import Link from "next/link";
import { Spacer } from "../ui/spacer.tsx";
import { ExternalLinkIcon } from "lucide-react";
import { ModeToggle } from "../ui/theme-toggle.tsx";
import { useEffect, useRef, useState } from "react";
import React from "react";

export default function MenuBar() {
    const [isSticky, setIsSticky] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cachedRef = ref.current
        const observer = new IntersectionObserver(
            ([e]) => setIsSticky(e.intersectionRatio < 1),
            { threshold: [1], rootMargin: '-1px 0px 0px 0px' }
        )


        if (cachedRef) {
            observer.observe(cachedRef)
        }

        return () => {
            if (cachedRef) {
                observer.unobserve(cachedRef)
            }
        }
    }, [])
    const documentationListData: { title: string, description: string, href: string }[] = [
        {
            title: "Home",
            description: "The README file of the Vortexus.js GitHub repository",
            href: "/docs/general/welcome"
        },
        {
            title: "vortexus.js",
            description: "The main Vortexus.js package that has the CLI and the config file reader",
            href: "/docs/packages/vortexus.js"
        },
        {
            title: "@vortexus.js/core",
            description: "The packages that has extended classes of the Discord.js module",
            href: "/docs/packages/@vortexus.js/core"
        },
        {
            title: "@vortexus.js/utilities",
            description: "A package which holds utility functions for the Vortexus.js packages",
            href: "/docs/packages/@vortexus.js/utility"
        },
    ];

    const guideListData: { title: string, description: string, href: string }[] = [
        {
            title: "Introduction",
            description: "Important notes you need to know before starting",
            href: "/docs/guide/home/introduction"
        },
        {
            title: "Getting Started",
            description: "Learn how to setup the most basic Vortexus.js app",
            href: "/docs/guide/getting-started/installation-&-setup"
        },
        {
            title: "Events",
            description: "Learn how you can use events",
            href: "/docs/guide/events"
        },
        {
            title: "Message Commands",
            description: "Learn how you can create message commands",
            href: "/docs/guide/message-commands"
        }
    ];
    
    return (
        <>
            <div className="absolute top-0 h-[1px] w-full" ref={ref} />
            <div className={`sticky top-0 z-50 transition-all duration-300 ${isSticky ? 'shadow-md' : ''}`}>
                <NavigationMenu className="w-full">
                    <NavigationMenuList className={`flex h-[8vh] w-screen items-center justify-between bg-muted px-4`}>
                        <div className="flex items-center justify-center space-x-4">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className="group/link flex h-9 w-max items-center justify-between px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground">
                                        <Image
                                            className="mr-4"
                                            src={"/logo.svg"}
                                            width={40}
                                            height={0}
                                            alt="Vortexus.js Logo"
                                        />
                                        <p className="font-semibold group-hover/link:text-primary-active">Vortexus.js</p>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hover:text-primary-active">Documentation</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {documentationListData.map((item, index) => (
                                            <ListItem
                                                key={index}
                                                title={item.title}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hover:text-primary-active">Guide</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {guideListData.map((item, index) => (
                                            <ListItem
                                                key={index}
                                                title={item.title}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <NavigationMenuItem>
                            <Link target="_blank" href="https://github.com/PAdventures/Vortexus.js" legacyBehavior passHref>
                                    <NavigationMenuLink className="group/link flex h-9 w-max items-center justify-between rounded-md bg-muted/50 px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        <p className="group-hover/link:text-primary-active">GitHub</p>
                                        <Spacer className="w-2" />
                                        <ExternalLinkIcon className="h-4 w-4 -translate-y-1 group-hover/link:stroke-primary-active group-hover/link:motion-safe:animate-bounce" />
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <ModeToggle />
                        </div>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    )
}