import React from "react";
import Bold from "../../../../../components/pages/Bold.tsx";
import BulletPointList from "../../../../../components/pages/BulletPointList.tsx";
import DocumentationPage from "../../../../../components/pages/DocumentationPage.tsx";
import Header1 from "../../../../../components/pages/Header1.tsx";
import Header2 from "../../../../../components/pages/Header2.tsx";
import Header3 from "../../../../../components/pages/Header3.tsx";
import InlinedBulletPointList from "../../../../../components/pages/InlinedBulletPointList.tsx";
import Paragraph from "../../../../../components/pages/Paragraph.tsx";
import { AlertDanger, AlertDescription, AlertNote } from "../../../../../components/ui/alert.tsx";
import { CodeBlock } from "../../../../../components/ui/code-block.tsx";
import { InlineCode } from "../../../../../components/ui/inline-code.tsx";
import { Link } from "../../../../../components/ui/link.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../../components/ui/tabs.tsx";

const configurationMainOptions = `
export const config = {
    token: process.env.TOKEN ?? "",
    client: {},
    cooldowns: {},
    commands: {},
    modules: {},
    logger: {},
}
`

const configurationEnvExample = `
export const config = {
    token: process.env.TOKEN ?? ""
    // Output: "abc" or "" if the TOKEN is not present in the env file
}
`

const configurationCooldownSimpleExample = `
export const config = {
    cooldowns: {
        enable: true,
        default_ms: 1000,
        sweeper: {
            sweepFrequencyMs: 1000 * 60 * 60,
            filter: (cooldown) => true,
        },
    },
};
`

const configurationCooldownFilterExample = `
export const config = {
    cooldowns: {
        enable: true,
        sweeper: {
            filter: (cooldown) => {
                if (cooldown?.guildId === process.env.TEST_GUILD) {
                    return false;
                };
                return true;
            },
        },
    },
};
`

const configurationCommandBasicExample = `
export const config = {
    commands: {
        register: {
            globally: true,
            guilds: [],
        },
        message_commands: {
            prefix: "!",
            arg_separator: " ",
        },
    },
};
`

const configurationModulesExample = `
export const config = {
    modules: {
        dirs: [],
        ignore: [],
    },
};
`

const configurationModulesUsageExample = `
export const config = {
    modules: {
        dirs: ["./commands", "./events"],
        ignore: ["test.js", "preconditions*"],
    },
};
`

const configurationModulesProjectStructure = `
myapp/
├── node_modules/
├── package.json
├── package-lock.json
├── commands/ // This is read by Vortexus.js
|    └── test.js // However, this is ignored
├── events/ // This is also read by Vortexus.js
├── preconditions/
└── vortexus.js
`

const configurationLoggerExample = `
export const config = {
    logger: {
        enable: true,
        debugs: false,
        pretty_print: false,
        file_stream: {
            enable: true,
            dir: './logs',
            file: 'current.log',
        },
    },
};
`

const configurationLoggerUsageExample = `
export const config = {
    logger: {
        enable: true,
        debugs: true,
        pretty_print: true,
        file_stream: {
            enable: true,
            dir: './logs',
            file: 'current.log',
        },
    },
};
`

export default function Configuration() {
    return (
        <DocumentationPage>
            <Header1>Configuration</Header1>
            <Paragraph>
                Modifying your configuration file to meet your needs is a necessary step in your development experience.
                If you remember from the installation guide, the Vortexus.js configuration lives in a <InlineCode>vortexus.js</InlineCode> file.
            </Paragraph>
            <Header2 id="configuration-file">Configuration File</Header2>
            <Paragraph>
                The configuration file takes many options that are needed for any complex enough discord app.
                Here is what they main options are:
            </Paragraph>
            <CodeBlock title="vortexus.js" language="javascript" code={configurationMainOptions} />
            <BulletPointList>
                <li><InlineCode>token</InlineCode> - The Discord Bot application token to login</li>
                <li><InlineCode>client</InlineCode> - The <Link underline text="discord.js client options" href="https://discord.js.org/docs/packages/discord.js/14.15.3/ClientOptions:Interface" /> used when logging in</li>
                <li><InlineCode>cooldowns</InlineCode> - The options used to configure the built-in Vortexus.js cooldown handler</li>
                <li><InlineCode>commands</InlineCode> - The options for command registering and management</li>
                <li><InlineCode>modules</InlineCode> - The options used to let Vortexus.js know where your modules are held</li>
                <li><InlineCode>logger</InlineCode> - The options for configuring the Vortexus.js logger</li>
            </BulletPointList>
            <Header3 id="token">Token</Header3>
            <Paragraph>
                The token option is where your discord bot application token will be needed.
                It is <Bold>highly recommended</Bold> to store this value in a <InlineCode>.env</InlineCode> file and access it using <InlineCode>process.env.TOKEN</InlineCode>
            </Paragraph>
            <Paragraph>
                Here is an example:
            </Paragraph>
            <Tabs defaultValue="env-file">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="env-file">Env File</TabsTrigger>
                    <TabsTrigger value="config-file">Config File</TabsTrigger>
                </TabsList>
                <TabsContent value="env-file">
                    <CodeBlock title=".env" language='bash' code='TOKEN = "abc"' />
                </TabsContent>
                <TabsContent value="config-file">
                    <CodeBlock title="vortexus.js" language="javascript" code={configurationEnvExample} />
                </TabsContent>
            </Tabs>
            <AlertDanger>
                <AlertDescription>
                    If you are using git.
                    You will need to add <InlineCode>.env</InlineCode> inside the <InlineCode>.gitignore</InlineCode> file to prevent it from being pushed to your repository.
                    It doesn&apos;t matter if the repository is public or private, it is a very bad idea to push the <InlineCode>.env</InlineCode> file to github
                </AlertDescription>
            </AlertDanger>
            <Header3 id="cooldowns">Cooldowns</Header3>
            <Paragraph>
                The cooldowns option is used to configure the cooldown handler which is built-into Vortexus.js.
                Here are all the options you can use inside the cooldowns options:
            </Paragraph>
            <CodeBlock title="vortexus.js" language="javascript" code={configurationCooldownSimpleExample} />
            <BulletPointList>
                <li><InlineCode>enable</InlineCode> - Determines weather or not the cooldown handler should be on</li>
                <li><InlineCode>default_ms</InlineCode> - The default cooldown for a command if not specified in the command module</li>
                <InlinedBulletPointList listItem={<><InlineCode>sweeper</InlineCode> - The options to manage the cache that stores all cooldowns</>}>
                    <li><InlineCode>sweepFrequencyMs</InlineCode> - How often the cache should be cleared of old or completed cooldowns</li>
                    <li><InlineCode>filter</InlineCode> - A function that return a boolean where if returned true, the sweeper can clear that cooldown if it is completed, and if false, then the sweeper should never delete the cooldown</li>
                </InlinedBulletPointList>
            </BulletPointList>
            <Paragraph>
                Here is an example of the <InlineCode>filter</InlineCode>:
            </Paragraph>
            <CodeBlock title="vortexus.js" language="javascript" code={configurationCooldownFilterExample} />
            <Header3 id="commands">Commands</Header3>
            <Paragraph>
                Even a basic discord app needs commands, therefore, you will definitely been needing to use this configuration.
                Below are all the options the commands option takes:
            </Paragraph>
            <CodeBlock title="vortexus.js" language="javascript" code={configurationCommandBasicExample} />
            <BulletPointList>
                <InlinedBulletPointList listItem={<><InlineCode>register</InlineCode> - This manages the Application Commands that are registered globally or to specific guilds</>}>
                    <li><InlineCode>globally</InlineCode> - Register the commands to all guilds</li>
                    <li><InlineCode>guilds</InlineCode> - An array containing the guilds that will have the commands registered too</li>
                </InlinedBulletPointList>
                <InlinedBulletPointList listItem={<><InlineCode>message_commands</InlineCode> - Commands that are triggered by sending a message in a channel</>}>
                    <li><InlineCode>prefix</InlineCode> - The starter character that will trigger Vortexus.js to validate the message</li>
                    <li><InlineCode>arg_separator</InlineCode> - The character that will separate each argument for the command</li>
                </InlinedBulletPointList>
            </BulletPointList>
            <Header3 id="modules">Modules</Header3>
            <Paragraph>
                Vortexus.js uses a module system where your module file will contain a class of a specific module template.
                Here are the options that you can use:
            </Paragraph>
            <CodeBlock title="vortexus.js" language="javascript" code={configurationModulesExample} />
            <BulletPointList>
                <li><InlineCode>dirs</InlineCode> - An array containing blob string paths of the directory or directories where your modules are located</li>
                <li><InlineCode>ignore</InlineCode> - An array containing blob strings of file or directory names to ignore</li>
            </BulletPointList>
            <Paragraph>
                Here is an example usage in a project:
            </Paragraph>
            <Tabs defaultValue="config-file">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="config-file">Config File</TabsTrigger>
                    <TabsTrigger value="project-structure">Project Structure</TabsTrigger>
                </TabsList>
                <TabsContent value="config-file">
                    <CodeBlock title="vortexus.js" language="javascript" code={configurationModulesUsageExample} />
                </TabsContent>
                <TabsContent value="project-structure">
                    <CodeBlock no_copy language='bash' code={configurationModulesProjectStructure} />
                </TabsContent>
            </Tabs>
            <Header3 id="logger">Logger</Header3>
            <Paragraph>
                The logger is a small but powerful tool that you can utilise.
                Here are all the options to can configure:
            </Paragraph>
            <CodeBlock title="vortexus.js" language="javascript" code={configurationLoggerExample} />
            <BulletPointList>
                <li><InlineCode>enable</InlineCode> - Determines weather or not the logger is enabled</li>
                <li><InlineCode>debug</InlineCode> - The logger will output debug messages for more insight</li>
                <li><InlineCode>pretty_print</InlineCode> - Logger outputs pretty messages</li>
                <InlinedBulletPointList listItem={<><InlineCode>file_stream</InlineCode> - The options for logging message in a file as well as your console</>}>
                    <li><InlineCode>enable</InlineCode> - Determines weather or not the logger should write messages to a file</li>
                    <li><InlineCode>dir</InlineCode> - The directory where the current and old logs live</li>
                    <li><InlineCode>file</InlineCode> - The name of the current log being used to write messages too</li>
                </InlinedBulletPointList>
            </BulletPointList>
            <Paragraph>
                Here is an example of the logger:
            </Paragraph>
            <Tabs defaultValue="config-file">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="config-file">Config File</TabsTrigger>
                    <TabsTrigger value="terminal">Terminal</TabsTrigger>
                    <TabsTrigger value="file-stream">File Stream</TabsTrigger>
                </TabsList>
                <TabsContent value="config-file">
                    <CodeBlock title="vortexus.js" language="javascript" code={configurationLoggerUsageExample} />
                </TabsContent>
                <TabsContent value="terminal">
                    <CodeBlock no_copy title="Terminal" language='bash' code={`[19:07:00 INFO] Starting Vortexus.js\n[19:07:00 DEBUG] Started Vortexus.js\n[19:07:00 DEBUG] Logging into Discord\n[19:07:00 INFO] Logged into Discord as Vortexus.js#1970`} />
                </TabsContent>
                <TabsContent value="file-stream">
                    <CodeBlock no_copy title="/logs/current.log" language='bash' code={`[19:07:00 INFO] Starting Vortexus.js\n[19:07:00 INFO] Logged into Discord as Vortexus.js#1970`} />
                </TabsContent>
            </Tabs>
            <AlertNote>
                <AlertDescription>
                    Debug messages are not written to the log files.
                    They will only appear in your console
                </AlertDescription>
            </AlertNote>
            <Header2 id="testing">Testing</Header2>
            <Paragraph>
                Testing your discord app in a danger-free environment is a common need.
                You can create a second config file where you can configure it to your testing needs. 
                his test config file must be named <InlineCode>vortexus.test.js</InlineCode> as Vortexus.js will look for this file when you run the CLI test command
            </Paragraph>
        </DocumentationPage>
    )
}