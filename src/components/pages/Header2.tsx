import React from "react";
import { DirectLink } from "../others/DirectLink.tsx";

export default function Header2({ children, id }: { children: React.ReactNode, id: string }) {
    return (
        <h2 id={id} className="group mb-7 mt-10 text-4xl font-bold">
            {children}
            <DirectLink href={`#${id}`} />
        </h2>
    )
}