"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"
import { CodeBlock } from "./code-block.tsx"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground group-[.alert-note]:bg-muted-foreground/20",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

interface Npm2Pnpm2Yarn2BunProps {
    className?: string;
    code: string;
}

const Npm2Pnpm2Yarn2Bun = ({ className, code }: Npm2Pnpm2Yarn2BunProps) => {
    const npmCode = code.replaceAll(/\b(?!(pn))\b(pnpm|yarn|bun)\b/gim, 'npm').replaceAll('add', 'install');
    const pnpmCode = code.replaceAll(/\b(?!(pn))\b(npm|yarn|bun)\b/gim, 'pnpm').replaceAll('install', 'add');
    const yarnCode = code.replaceAll(/\b(?!(pn))\b(npm|pnpm|bun)\b/gim, 'yarn').replaceAll('install', 'add');
    const bunCode = code.replaceAll(/\b(?!(pn))\b(npm|pnpm|yarn)\b/gim, 'bun').replaceAll('install', 'add');
    return (
        <Tabs defaultValue="npm" className={className}>
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="npm">npm</TabsTrigger>
                <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                <TabsTrigger value="yarn">yarn</TabsTrigger>
                <TabsTrigger value="bun">bun</TabsTrigger>
            </TabsList>
            <TabsContent value="npm">
                <CodeBlock code={npmCode} language="bash" />
            </TabsContent>
            <TabsContent value="pnpm">
                <CodeBlock code={pnpmCode} language="bash" />
            </TabsContent>
            <TabsContent value="yarn">
                <CodeBlock code={yarnCode} language="bash" />
            </TabsContent>
            <TabsContent value="bun">
                <CodeBlock code={bunCode} language="bash" />
            </TabsContent>
        </Tabs>
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, Npm2Pnpm2Yarn2Bun }
