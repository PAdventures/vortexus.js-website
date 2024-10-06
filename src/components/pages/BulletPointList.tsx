import React from "react";

export default function BulletPointList({ children }: { children: React.ReactNode }) {
    return (
        <ul className="my-4 ml-8 list-inside list-disc leading-loose">{children}</ul>
    )
}