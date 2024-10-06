"use client"

import { PenLineIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EditPageLink() {
    const pathname = usePathname();
    return (
        <Link
            target="_blank"
            href={`https://github.com/PAdventures/vortexus.js-website/edit/main${pathname}/page.tsx`}
            className="group inline-flex items-center px-1 text-primary-active"
        >
            <PenLineIcon className="mr-2 h-5 w-5 stroke-primary-active" />
            <span className="group-hover:underline">Edit this page</span>
        </Link>
    )
}