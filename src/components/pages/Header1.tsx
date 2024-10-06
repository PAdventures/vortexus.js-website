import React from "react";

export default function Header1({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="mb-6 text-5xl font-bold">{children}</h1>
    )
}