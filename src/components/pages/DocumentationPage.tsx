
import React from "react";
import FooterBar from "@/components/navigation/FooterBar";

export default function DocumentationPage({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full w-full">
            {children}
            <FooterBar />
        </div>
    )
}