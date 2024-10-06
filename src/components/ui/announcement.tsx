export function Announcement() {
    const variant: "info" | "warning" | "danger" = "danger"
    const text = "⚠️ Vortexus.js is currently being developed. Everything on this website is subject to be changed frequently ⚠️"
    let colours = "dark:bg-blue-500 bg-blue-300"
    // if (variant === "warning") {
    //     colours = "dark:bg-yellow-700 bg-orange-400 text-background dark:text-foreground"
    // }
    if (variant === "danger") {
        colours = "dark:bg-red-700 bg-red-500 text-background dark:text-foreground"
    }
    return (
        <div className={`h-[5vh] w-screen flex items-center justify-center ${colours}`}>
            <p className="text-center">{text}</p>
        </div>
    )
}