"use client"

import React, { useRef } from "react";
import SideBar from "../../components/navigation/SideBar.tsx";
import HeaderTree from "../../components/navigation/HeaderTree.tsx";
import PageBreadcrumb from "../../components/navigation/PageBreadcrumb.tsx";

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
    const headerGrabberRef = useRef<HTMLDivElement>(null);
    return (
        <div className="flex min-h-screen">
            <div className="w-[20vw] flex-shrink-0 border-r border-muted-foreground/50">
                <div className="sticky top-[8vh] h-[calc(100vh-8vh)]">
                    <SideBar />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                <div ref={headerGrabberRef} className="mx-auto max-w-[52rem] px-0 py-8">
                    <div className="mb-6">
                        <PageBreadcrumb />
                    </div>
                    {children}
                </div>
            </div>

            <div className="w-[20vw] flex-shrink-0">
                <div className="sticky top-[8vh] h-[calc(100vh-8vh)]">
                    <HeaderTree containerRef={headerGrabberRef} />
                </div>
            </div>
        </div>
    );
}
