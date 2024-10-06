import React from "react";

export default function Paragraph({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <p className={`mb-4 ${className}`}>{children}</p>
    )
}