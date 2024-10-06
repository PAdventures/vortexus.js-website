"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb.tsx";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button.tsx";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import React from "react";

export default function PageBreadcrumb() {
    const router = useRouter()
    const pathname = usePathname();
    const paths = pathname.split(/(\/)/).filter(Boolean).slice(3);

    return (
        <Breadcrumb className="ml-4 w-full">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Button onClick={() => router.push("/")} variant={"outline"} size={"icon"} className="mr-3 rounded-full text-foreground hover:text-primary-active">
                        <HomeIcon />
                    </Button>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <ChevronRightIcon />
                </BreadcrumbSeparator>
                {paths.map((path, index) => {
                    if (path === "/") {
                        return (
                            <BreadcrumbSeparator key={index}>
                                <ChevronRightIcon />
                            </BreadcrumbSeparator>
                        )
                    };
                    if (index === paths.length - 1) {
                        return (
                            <BreadcrumbItem key={index}>
                                <p className="rounded-full bg-muted px-3 py-2 text-primary-active">{(path.at(0)!.toUpperCase() + path.substring(1)).replaceAll("-", " ").replaceAll("%27", "'")}</p>
                            </BreadcrumbItem>
                        )
                    }
                    return (
                        <BreadcrumbItem key={index}>
                            <p className="px-3 py-2 text-foreground">{(path.at(0)!.toUpperCase() + path.substring(1)).replaceAll("-", " ").replaceAll("%27", "'").normalize()}</p>
                        </BreadcrumbItem>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}