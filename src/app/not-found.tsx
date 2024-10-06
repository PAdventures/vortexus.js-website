import { Button } from "../components/ui/button";
import { Link } from "../components/ui/link";

export default function NotFound() {
    return (
        <div className="flex h-[85vh] w-screen flex-col items-center justify-center space-y-8">
            <h1 className="text-5xl font-bold">Page Not Found</h1>
            <h2 className="text-3xl font-medium">{"Woah! Looks like you got lost looking for something that doesn't exist."}</h2>
            <Button
                variant="secondary"
                className="rounded-lg border border-muted/50 bg-foreground px-8 py-6 text-xl text-background hover:bg-foreground/80"
            >
                <Link defaultTextColour noExternal text="Take me back" href="/" />
            </Button>
        </div>
    )
}