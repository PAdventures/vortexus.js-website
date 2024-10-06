import Header1 from "@/components/pages/Header1";
import Paragraph from "@/components/pages/Paragraph";
import BulletPointList from "@/components/pages/BulletPointList";
import Header2 from "@/components/pages/Header2";
import LinkListItem from "@/components/pages/LinkListItem";
import { AlertDescription, AlertNote } from "@/components/ui/alert";
import DocumentationPage from "@/components/pages/DocumentationPage";

export default function Introduction() {
    return (
        <DocumentationPage>
            <Header1>Introduction</Header1>
            <Paragraph>
                Looks like you want to learn how to make a Discord App using Vortexus.js. Welcome! This amazing guide will teach you concepts such as:
            </Paragraph>
            <BulletPointList>
                <li>How to setup a basic App</li>
                <li>How to properly create, use and organise Modules</li>
                <li>How to create slash, context menu and message commands</li>
                <li>Working with Preconditions</li>
                <li>And much more...</li>
            </BulletPointList>
            <Paragraph>
                Our guide will also cover common mistakes made when working with Vortexus.js and how you can solve them.
            </Paragraph>
            <Header2 id="before-you-begin">Before you begin...</Header2>
            <Paragraph>
                This guide assumes you have a decent understanding of JavaScript (or TypeScript) and Discord.js.
                We will not be showing you how to fix common JavaScript (or TypeScript) issues as well as common Discord.js mistakes.
                If you want to learn JavaScript, here are some amazing guides:
            </Paragraph>
            <BulletPointList>
                <LinkListItem underline text="Eloquent JavaScript, a free online book" href="http://eloquentjavascript.net/" />
                <LinkListItem underline text="JavaScript.info, a modern javascript tutorial" href="https://javascript.info/" />
                <LinkListItem underline text="Codecademy's interactive JavaScript course" href="https://www.codecademy.com/learn/introduction-to-javascript" />
                <LinkListItem underline text="Nodeschool, for both JavaScript and Node.js lessons" href="https://nodeschool.io/" />
                <LinkListItem underline text="MDN's JavaScript guide and full documentation" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" />
                <LinkListItem underline text="Google, your best friend" href="https://google.com/" />
            </BulletPointList>
            <Paragraph>
                Pick anyone of these guides and come back later once you&apos;re ready to dive into the wonderful world of Vortexus.js
            </Paragraph>
            <Paragraph>Or learn Discord.js</Paragraph>
            <BulletPointList>
                <LinkListItem underline text="Discord.js Documentation" href="https://discord.js.org/" />
                <LinkListItem underline text="Discord.js Guide" href="https://discordjs.guide/" />
            </BulletPointList>
            <Paragraph>Finally here is the TypeScript guide:</Paragraph>
            <BulletPointList>
                <LinkListItem underline text="TypeScript Guide" href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html" />
            </BulletPointList>
            <AlertNote>
                <AlertDescription>
                    One final note is that Vortexus.js does not support CommonJS as it can cause issues when importing stuff, especially from Discord.js.
                    We do support ESM though, and, TypeScript.
                </AlertDescription>
            </AlertNote>
            <Paragraph>Happy coding!</Paragraph>
        </DocumentationPage>
    )
}