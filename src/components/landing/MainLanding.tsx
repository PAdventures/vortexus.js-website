import Image from "next/image";
import ReadGuideButton from "./ReadGuideButton.tsx";

export default function MainLanding() {
    return (
        <div className="flex h-[90vh] w-screen items-center justify-center space-x-8 space-y-8">
            <div className="flex w-2/5 flex-col items-start justify-center space-y-8">
                <h1 className="text-5xl font-medium leading-relaxed">
                    Discord Bot creation, simplified
                </h1>
                <p className="w-4/5 text-left text-xl font-normal leading-relaxed">
                    Vortexus.js is a complex and flexible Discord.js app framework made to be simple out of the box.
                    Create Slash commands, context menu commands and message commands with ease
                </p>
                <ReadGuideButton />
            </div>
            <div className="relative flex h-full w-2/5 items-center justify-center">
                <Image
                    className="object-contain"
                    src={"/banner.svg"}
                    fill={true}
                    alt="Vortexus.js Banner"
                />
            </div>
        </div>
    )
}