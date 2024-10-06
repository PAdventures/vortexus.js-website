import React from "react";
import { DirectLink } from "../others/DirectLink.tsx";

export default function Header4({ children, id }: { children: React.ReactNode, id: string }) {
    return (
        <h4 id={id} className="group mb-5 mt-6 text-2xl font-medium">
            {children}
            <DirectLink href={`#${id}`} />
        </h4>
    )
}