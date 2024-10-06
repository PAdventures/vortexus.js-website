"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.tsx";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar() {
    const pathname = usePathname();
    const router = useRouter();

    const generalTab: { title: string; href: string; }[] = [
        {
            title: "Welcome",
            href: "/docs/general/welcome"
        }
    ];

    const guideTab: { title: string; content: { title: string; href: string }[] }[] = [
        {
            title: "Home",
            content: [
                {
                    title: "Introduction",
                    href: "/docs/guide/home/introduction"
                },
                {
                    title: "Requesting More Content",
                    href: "/docs/guide/home/requesting-more-content"
                },
                {
                    title: "What's New",
                    href: "/docs/guide/home/what-s-new"
                },
            ],
        },
        {
            title: "Getting Started",
            content: [
                {
                    title: "Installation & Setup",
                    href: "/docs/guide/getting-started/installation-&-setup"
                },
                {
                    title: "Configuration",
                    href: "/docs/guide/getting-started/configuration"
                }
            ]
        }
    ];

    const defaultOpen = pathname.split("/")[2];
    const defaultGuideTabOpen = defaultOpen === "guide" ? pathname.split("/")[3] : "";

    return (
        <div className="flex h-fit w-full items-center justify-center">
            <Accordion defaultValue={[defaultOpen]} type="multiple" className="mt-4 h-full w-[95%]">
                <AccordionItem value="general">
                    <AccordionTrigger className={`${pathname.split("/")[2] === "general" ? "text-primary-active" : ""}`}>General</AccordionTrigger>
                    <AccordionContent className="flex flex-col items-end justify-center">
                        {generalTab.map((item, index) => {
                            const active = pathname === item.href ? "text-primary-active" : ""
                            return (
                                <div className="flex w-[95%]" key={index}>
                                    <button onClick={() => router.push(item.href)} type="button" className={`${active} flex flex-1 items-center justify-between px-4 rounded-md py-1.5 my-0.5 text-base font-normal transition-all hover:bg-muted`}>
                                        {item.title}
                                    </button>
                                </div>
                            )
                        })}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="guide">
                    <AccordionTrigger className={`${pathname.split("/")[2] === "guide" ? "text-primary-active" : ""}`}>Guide</AccordionTrigger>
                    <AccordionContent className="flex items-center justify-end">
                        <Accordion defaultValue={[defaultGuideTabOpen]} type="multiple" className="h-full w-[95%]">
                            {guideTab.map((item, index) => (
                                <AccordionItem value={item.title.toLowerCase().replaceAll(" ", "-")} key={index}>
                                    <AccordionTrigger className={`${pathname.split("/")[3] === item.title.toLowerCase() ? "text-primary-active" : ""}`}>{item.title}</AccordionTrigger>
                                    <AccordionContent className="flex flex-col items-end justify-center">
                                        {item.content.map((contentItem, contentIndex) => {
                                            const active = pathname === contentItem.href ? "text-primary-active bg-muted" : ""
                                            return (
                                                <div className="flex w-[95%]" key={contentIndex}>
                                                    <button onClick={() => router.push(contentItem.href)} type="button" className={`${active} flex flex-1 items-center justify-between px-4 rounded-md py-1.5 my-0.5 text-base font-normal transition-all hover:bg-muted`}>
                                                        {contentItem.title}
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="documentation">
                    <AccordionTrigger className={`${pathname.split("/")[2] === "packages" ? "text-primary-active" : ""}`}>Documentation</AccordionTrigger>
                    <AccordionContent></AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}