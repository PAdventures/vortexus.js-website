import React from "react";

export default function Italic({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-start italic">
            {children}
        </span>
    )
}