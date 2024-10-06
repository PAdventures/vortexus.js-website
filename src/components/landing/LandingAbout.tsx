import { Link } from "../ui/link.tsx";

export default function LandingAbout() {
    const keyFeatures: string[] = [
        'Advanced modular system',
        'Modular system is fully extendable',
        'Fully supports ESM and TypeScript',
        'Advanced command and interaction component modules',
        'Fully customisable configuration file',
        'Opt-in to advanced features from the config file',
        'Built-in ready-to-use commands and features for your apps',
        'Full access to the Discord.js module'
    ];

    return (
        <div className="flex h-[100vh] w-screen flex-col items-center justify-center space-y-8 bg-muted/30">
            <div className="grid h-1/2 w-4/5 grid-cols-3 gap-x-12">
                <div className="col-span-1 mt-8 flex flex-col items-center justify-start space-y-4">
                    <h3 className="w-full text-left text-xl font-medium">About</h3>
                    <p className="text-md text-left">
                        Vortexus.js is a complex discord app framework made to be simple out of the box for developers
                    </p>
                </div>
                <div className="col-span-1 mt-8 flex flex-col items-center justify-start space-y-4">
                    <h3 className="w-full text-left text-xl font-medium">Key Features</h3>
                    <ol start={1} type="1" className="flex flex-col items-center justify-center">
                        {keyFeatures.map((feature, index) => <li key={index} className="list-item w-4/5 list-decimal">{feature}</li>)}
                    </ol>
                </div>
                    <div className="col-span-1 mt-8 flex flex-col items-center justify-start space-y-4">
                        <h3 className="w-full text-left text-xl font-medium">Powered by Discord.js</h3>
                        <p className="text-md w-full text-left">
                            Vortexus.js is built on-top of
                            <Link underline href="https://discord.js.org" text="Discord.js" />
                        </p>
                    </div>
            </div>
            <div className="grid h-1/2 w-4/5 grid-cols-3 gap-x-12">
                <div className="col-span-1 flex flex-col items-center justify-center space-y-4">
                    <h3 className="w-full text-left text-lg font-medium">Docs</h3>
                    <ul className="w-full">
                        <li>
                            <Link replace underline href="/docs/guide/Getting-Started" text="Guide" />
                        </li>
                    </ul>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center space-y-4">
                    <h3 className="w-full text-left text-lg font-medium">Community</h3>
                    <ul className="w-full">
                        <li>
                            <Link underline href="https://discord.gg/Ek4PrXGWUq" text="Discord" />
                        </li>
                    </ul>
                </div>
                    <div className="col-span-1 flex flex-col items-center justify-center space-y-4">
                        <h3 className="w-full text-left text-lg font-medium">More</h3>
                        <ul className="w-full">
                            <li>
                                <Link underline href="https://github.com/PAdventures/Vortexus.js" text="GitHub" />
                            </li>
                        </ul>
                    </div>
            </div>
            <h2 className="text-md w-full pb-8 text-center">
                Copyright © 2024 Vortexus.js, PAdventures
            </h2>
        </div>
    )
}