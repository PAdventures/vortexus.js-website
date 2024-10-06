import Bold from "@/components/pages/Bold";
import Header1 from "@/components/pages/Header1";
import Header2 from "@/components/pages/Header2";
import Header3 from "@/components/pages/Header3";
import Header4 from "@/components/pages/Header4";
import DocumentationPage from "@/components/pages/DocumentationPage";
import Paragraph from "@/components/pages/Paragraph";
import { AlertDanger, AlertDescription, AlertNote, AlertTip, AlertWarning } from "@/components/ui/alert";
import { CodeBlock } from "@/components/ui/code-block";
import { InlineCode } from "@/components/ui/inline-code";
import { Link } from "@/components/ui/link";
import { Npm2Pnpm2Yarn2Bun } from "@/components/ui/tabs";

const configurationExample = `
import { GatewayIntentBits } from "vortexus.js/discord-js"

export const config = {
    token: process.env.TOKEN ?? "",
    client: {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ]
    }
};
`

const packageJsonScript = `
{
    // project details
    "scripts": {
        "dev": "vortexus.js dev"
    }
}
`

export default function InstallationAndSetup() {
    return (
        <DocumentationPage>
            <Header1>Installation & Setup</Header1>
            <Paragraph>
                Currently you can only setup Vortexus.js manually.
                Below you will be shown how to install the needed packages and how setup a basic bot.
            </Paragraph>
            <Paragraph>
                To use Vortexus.js, you&apos;ll need to install<Link underline href="https://nodejs.org" text="Node.js" />
            </Paragraph>
            <AlertTip>
                <AlertDescription>
                    Once you&apos;ve installed Node.js, or to check if it was installed already,
                    run <InlineCode>node -v</InlineCode> in your terminal and see if you get a version output
                </AlertDescription>
            </AlertTip>
            <AlertDanger>
                <AlertDescription>
                    You need at least Node.js version <Bold>18.X</Bold> or higher to use Vortexus.js
                </AlertDescription>
            </AlertDanger>
            <Header3 id="installing-vortexus.js">Installing Vortexus.js</Header3>
            <Paragraph>
                Navigate to the directory you want your project to be in and run the following commands
            </Paragraph>
            <Npm2Pnpm2Yarn2Bun code="npm install vortexus.js" />
            <Header3 id="access-the-discord.js-module">Access the Discord.js module</Header3>
            <Paragraph>
                To access the Discord.js package, you can do this by either, installing the package, or import it through the Vortexus.js package (recommended)
            </Paragraph>
            <Paragraph>
                Below you can find both example uses
            </Paragraph>
            <Header4 id="installing-discord.js">Installing Discord.js</Header4>
            <Npm2Pnpm2Yarn2Bun code="npm install discord.js" />
            <Paragraph>
                Now import the items needed as usual
            </Paragraph>
            <CodeBlock language="typescript" code='import { /** Items to import from Discord.js */ } from "discord.js"' />
            <Header4 id="or-import-discord.js-from-vortexus.js">Or Import Discord.js from Vortexus.js</Header4>
            <Paragraph>
                You don&apos;t need to install anything else, just import the items needed as usual
            </Paragraph>
            <CodeBlock language="typescript" code='import { /** Items to import from Discord.js */ } from "vortexus.js/discord-js"' />
            <AlertWarning>
                <AlertDescription>
                        It is <Bold>highly recommended</Bold> to use this method as it cannot introduce package version conflict between your app and <InlineCode>vortexus.js/core</InlineCode>
                        <br />
                        <br />
                        Yes, this means that we will need to update our version of Discord.js so that you get the bug fixes and features that new Discord.js versions offer
                </AlertDescription>
            </AlertWarning>
            <AlertNote>
                <AlertDescription>
                    All example code found within this guide uses this method to import items from Discord.js
                </AlertDescription>
            </AlertNote>
            <Header2 id="basic-setup">Basic Setup</Header2>
            <Paragraph>
                Once you&apos;ve installed everything needed, you can now setup a basic discord app.
            </Paragraph>
            <Paragraph>
                Before you start this section, you will need to head on over to the developer portal and create your application.
                If you&apos;ve already done that and added your app to servers, you can move on to the next step.
                Otherwise please read the<Link underline href="https://discordjs.guide/preparations/setting-up-a-bot-application.html#setting-up-a-bot-application" text="setting up a bot application" /> and<Link underline href="https://discordjs.guide/preparations/adding-your-bot-to-servers.html#adding-your-bot-to-servers" text="adding your bot to servers" /> adding your bot to servers pages from the Discord.js guide website
            </Paragraph>
            <Header3 id="environment-variables">Environment Variables</Header3>
            <Paragraph>
                In the root of your project, create a <InlineCode>.env</InlineCode> file and add the following
            </Paragraph>
            <CodeBlock language="bash" code='TOKEN = "YOUR_APP_TOKEN"' />
            <Paragraph>
                Make sure replace <InlineCode>YOUR_APP_TOKEN</InlineCode> with your app&apos;s actual token
            </Paragraph>
            <AlertDanger>
                <AlertDescription>
                    Never share your app&apos;s token with anyone!
                </AlertDescription>
            </AlertDanger>
            <Header3 id="configuration-file">Configuration File</Header3>
            <Paragraph>
                To allow your bot to login to Discord, you need to add properties in the configuration file.
                To do this, create a new <Bold>JavaScript (.js)</Bold> file in the <Bold>root</Bold> of your project directory.
                Name this file <InlineCode>vortexus.js</InlineCode> where you can add the token property so that Vortexus.js can log your bot in when you run the project.
            </Paragraph>
            <Paragraph>
                Here is what you should have:
            </Paragraph>
            <CodeBlock title="vortexus.js" language="javascript" code={configurationExample} />
            <AlertDanger>
                <AlertDescription>
                    Do not add your Discord app token directly to the configuration. Please use the <InlineCode>.env</InlineCode> file
                    <br />
                    <br />
                    Futhermore, if you want your bot to read message content, head over to the<Link underline href="https://discord.com/developers/applications" text="discord developer portal" /> and enable the <InlineCode>Message Content</InlineCode> intent under the &quot;Bot&quot; tab
                </AlertDescription>
            </AlertDanger>
            <Paragraph>
                Once you&apos;ve done that, your project should look similar to this
            </Paragraph>
            <CodeBlock language="bash" code={`myapp/\n├── node_modules/\n├── package.json\n├── package-lock.json\n└── vortexus.js`} />
            <AlertNote>
                <AlertDescription>
                    This may look different to your depending on your package manager or if you are using TypeScript. Here is how the JavaScript, NPM project should look like
                </AlertDescription>
            </AlertNote>
            <Header2 id="running-your-app">Running your App</Header2>
            <Paragraph>
                Now that you&apos;ve setup the absolute basic discord app, you can run it by using the Vortexus.js CLI.
                To do that, first we need to quickly add a script. So head on over to your <InlineCode>package.json</InlineCode> file and add the following line
            </Paragraph>
            <CodeBlock language="json" code={packageJsonScript} />
            <Paragraph>
                Now finally, run the following command in your terminal
            </Paragraph>
            <Npm2Pnpm2Yarn2Bun code="npm run dev" />
            <Paragraph>
                Head on over to Discord and see your online Discord app!
            </Paragraph>
            <AlertTip>
                <AlertDescription>
                    Can&apos;t see your app online after following this guide?
                    Ask a question in our<Link underline href="https://discord.gg/Ek4PrXGWUq" text="Discord server" /> or<Link underline href="https://github.com/PAdventures/Vortexus.js/issues/new/choose" text="create an issue" /> in the github repo
                </AlertDescription>
            </AlertTip>
            <Paragraph>
                That&apos;s it! You&apos;ve successfully created your first Vortexus.js discord app!
            </Paragraph>
        </DocumentationPage>
    )
}