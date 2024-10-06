import { Link, LinkProps } from "@/components/ui/link.tsx";

export default function LinkListItem({ href, text, underline, replace, noExternal, defaultTextColour }: LinkProps) {
    return (
        <li><Link href={href} text={text} underline={underline} replace={replace} noExternal={noExternal} defaultTextColour={defaultTextColour} /></li>
    )
}