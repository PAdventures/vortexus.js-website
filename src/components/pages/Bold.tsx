import React from "react";

export default function Bold({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-start font-bold">
            {children}
        </span>
    )
}