import React from "react";
import { DirectLink } from "../others/DirectLink.tsx";

export default function Header3({ children, id }: { children: React.ReactNode, id: string }) {
    return (
        <h3 id={id} className="group mb-6 mt-8 text-3xl font-bold">
            {children}
            <DirectLink href={`#${id}`} />
        </h3>
    )
}